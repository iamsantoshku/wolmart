import addToWishlistModel from "../models/wishlistSchema.js"
import Product from "../models/productSchema.js"


export const addToWishlistController = async (req, res) => {
    try {
        const { productId } = req.body;
        const currentUser = req.userId;

        // Check if the product is already in the user's wishlist
        const isProductAvailable = await addToWishlistModel.findOne({ productId, userId: currentUser });

        console.log("isProductAvailable in Wishlist", isProductAvailable);

        if (isProductAvailable) {
            return res.json({
                message: "Already exists in Wishlist",
                success: false,
                error: true,
            });
        }

        // Prepare the payload for adding to the wishlist
        const payload = {
            productId: productId,
            userId: currentUser,
        };

        const newAddToWishlist = new addToWishlistModel(payload);
        const saveProduct = await newAddToWishlist.save();

        return res.json({
            data: saveProduct,
            message: "Product Added to Wishlist",
            success: true,
            error: false,
        });

    } catch (err) {
        res.json({
            message: err?.message || err,
            error: true,
            success: false,
        });
    }
};



export const getWishlistController = async (req, res) => {
    try {
        const currentUser = req.userId;
        console.log(currentUser)

        if (!currentUser) {
            return res.status(400).json({
                message: "User ID is required",
                error: true,
                success: false,
            });
        }

        // Fetch wishlist items and populate product details
        const wishlistItems = await addToWishlistModel
            .find({ userId: currentUser })
            .populate({
                path: "productId",
                model: Product,
                select: "name image price inStock"
            });

        return res.status(200).json({
            data: wishlistItems || [],
            message: "Wishlist items retrieved successfully",
            success: true,
            error: false,
        });

    } catch (err) {
        console.error("Error fetching wishlist:", err);
        return res.status(500).json({
            message: err?.message || "Internal Server Error",
            error: true,
            success: false,
        });
    }
};



export const removeFromWishlistController = async (req, res) => {
  try {
    const userId = req.userId; // Set from auth middleware
    const { productId } = req.params; // Assuming productId is coming from params

    // Check required fields
    if (!userId || !productId || productId === "undefined") {
      return res.status(400).json({
        message: "User ID and Product ID are required",
        success: false,
        error: true,
      });
    }

    // Find and delete product from wishlist
    const deletedItem = await addToWishlistModel.findOneAndDelete({
      userId: userId,
      productId: productId,
    });

    if (!deletedItem) {
      return res.status(404).json({
        message: "Product not found in wishlist",
        success: false,
        error: true,
      });
    }

    return res.status(200).json({
      message: "Product removed from wishlist successfully",
      success: true,
      error: false,
    });

  } catch (error) {
    console.error("Error removing from wishlist:", error);
    return res.status(500).json({
      message: error?.message || "Internal Server Error",
      success: false,
      error: true,
    });
  }
};