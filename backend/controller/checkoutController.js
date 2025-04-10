



import Checkoute from "../models/checkoutSchema.js";
import User from "../models/userSchema.js";
import Product from "../models/productSchema.js";
import Vendor from "../models/vendorSchema.js"

// Place Order Controller
export const placeOrder = async (req, res) => {
    try {
        const { userId, products, billingDetails } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let totalAmount = 0;
        const validatedProducts = await Promise.all(
            products.map(async (item) => {
                const product = await Product.findById(item.productId);
                if (!product) {
                    throw new Error(`Product with ID ${item.productId} not found`);
                }

                if (product.vendor) {
                    item.vendor = product.vendor.toString(); // Ensure vendor ID is a string
                } else {
                    throw new Error(`Vendor ID is required for product ${item.productId}`);
                }

                const productTotal = product.price * item.quantity;
                totalAmount += productTotal;

                return {
                    productId: product._id,
                    vendorId: item.vendor, // Ensure this is correctly set
                    name: product.name,
                    quantity: item.quantity,
                    price: productTotal,
                };
            })
        );

        const newOrder = new Checkoute({
            userId,
            products: validatedProducts,
            totalAmount,
            billingDetails,
            status: "Pending",
        });

        await newOrder.save();
        res.status(201).json({ success: true, message: "Order placed successfully", order: newOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};






export const getVendorOrders = async (req, res) => {
    try {
        const { vendorId } = req.params; // Get vendorId from request params

        // Check if vendorId is missing
        if (!vendorId) {
            return res.status(400).json({ success: false, message: "Vendor ID is required" });
        }

        
        // Fetch orders where products have the given vendorId
        const orders = await Checkoute.find({ "products.vendorId": vendorId }).sort({ createdAt: -1 });

        // Format vendor-specific order details
        const vendorOrders = orders.map(order => ({
            _id: order._id,
            userId: order.userId,
            products: order.products.filter(product => product.vendorId.toString() === vendorId),
            totalAmount: order.products
                .filter(product => product.vendorId.toString() === vendorId)
                .reduce((sum, product) => sum + product.price * product.quantity, 0),
            billingDetails: order.billingDetails,
            status: order.status,
            createdAt: order.createdAt,
            updatedAt: order.updatedAt
        }));

        return res.status(200).json({ success: true, orders: vendorOrders });

    } catch (error) {
        console.error("Error fetching vendor orders:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
};



export const getUserOrders = async (req, res) => {
    try {
        const { userId } = req.params;
        
        // Find orders for the given user ID
        const orders = await Checkoute.find({ userId });

        if (!orders || orders.length === 0) {
            return res.status(404).json({ success: false, message: "No orders found for this user" });
        }

        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};





export const updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params; // Get order ID from URL params
        const { status } = req.body; // Get new status from request body

        // Find the order by ID
        const order = await Checkoute.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        // Update order status
        order.status = status;
        await order.save();

        res.status(200).json({ success: true, message: "Order status updated successfully", order });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


export const cancelOrder = async (req, res) => {
    try {
        const { orderId } = req.params; // Get order ID from request params
        const { userId } = req.body; // Get user ID from request body

        // Find the order by ID and check if it belongs to the user
        const order = await Checkoute.findOne({ _id: orderId, userId });

        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found or does not belong to the user" });
        }

        // Prevent cancellation if order is already shipped or delivered
        if (["Shipped", "Delivered"].includes(order.status)) {
            return res.status(400).json({ success: false, message: "Cannot cancel an order that has already been shipped or delivered" });
        }

        // Update order status to 'Cancelled'
        order.status = "Cancelled";
        await order.save();

        return res.status(200).json({ success: true, message: "Order has been cancelled successfully", order });
    } catch (error) {
        console.error("Error cancelling order:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
};



export const getAllOrdersForAdmin = async (req, res) => {
    try {
        // Fetch all orders with vendor details
        const orders = await Checkoute.find().populate("products.vendorId", "name email phone").sort({ createdAt: -1 });

        if (!orders || orders.length === 0) {
            return res.status(404).json({ success: false, message: "No orders found" });
        }

        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

