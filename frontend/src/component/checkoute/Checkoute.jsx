

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";  // Import useSelector
import axios from "axios";
import { BACKENDURL } from "../../config/config";
import Checkoutenav from "./Checkoutenav";

const Checkoute = () => {
    const user = useSelector((state) => state.user.user);  // Get user from Redux store
    const location = useLocation();
    const navigate = useNavigate();
    const cart = location.state?.cart;

    const [billingDetails, setBillingDetails] = useState({
        firstName: "",
        lastName: "",
        country: "United States",
        streetAddress1: "",
        streetAddress2: "",
        city: "",
        state: "California",
        zip: "",
        phone: "",
        email: "",
    });

    if (!cart || cart.items.length === 0) {
        return (
            <div className="container text-center mt-5">
                <h2>No items in the cart</h2>
                <button className="btn btn-primary" onClick={() => navigate("/")}>
                    Go to Shop
                </button>
            </div>
        );
    }

    const handleInputChange = (e) => {
        setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        if (!user?._id) {
            alert("User not logged in!");
            return;
        }

        try {
            const orderData = {
                userId: user._id,  // Use user ID from Redux
                products: cart.items.map((item) => ({
                    productId: item.product._id,
                    vendorId: item.product.vendor,
                    name: item.product.name,
                    quantity: item.quantity,
                    price: item.product.price,
                })),
                billingDetails,
            };

            const response = await axios.post(`${BACKENDURL}/api/v1/checkoutss/checkout`, orderData, {
                withCredentials: true,
            });

            if (response.data.success) {
                navigate("/order-success");
            } else {
                alert("Order failed. Try again.");
            }
        } catch (error) {
            console.error("Order error:", error);
            alert("Order failed.");
        }
    };

    return (
        <>
            <Checkoutenav />
            <div className="container mt-5">
                <h2>Checkout</h2>
                <form className="form checkout-form" onSubmit={handlePlaceOrder}>
                    <div className="row mb-9">
                        <div className="col-lg-7 pr-lg-4 mb-4">
                            <h3 className="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">
                                Billing Details
                            </h3>
                            <div className="row gutter-sm">
                                <div className="col-xs-6">
                                    <div className="form-group">
                                        <label>First name *</label>
                                        <input type="text" className="form-control form-control-md" name="firstName" value={billingDetails.firstName} onChange={handleInputChange} required />
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <div className="form-group">
                                        <label>Last name *</label>
                                        <input type="text" className="form-control form-control-md" name="lastName" value={billingDetails.lastName} onChange={handleInputChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Country / Region *</label>
                                <input type="text" className="form-control form-control-md" name="country" value={billingDetails.country} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Street address *</label>
                                <input type="text" className="form-control form-control-md" name="streetAddress1" value={billingDetails.streetAddress1} onChange={handleInputChange} required />
                                <input type="text" className="form-control form-control-md" name="streetAddress2" value={billingDetails.streetAddress2} onChange={handleInputChange} />
                            </div>
                            <div className="row gutter-sm">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>City *</label>
                                        <input type="text" className="form-control form-control-md" name="city" value={billingDetails.city} onChange={handleInputChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>ZIP *</label>
                                        <input type="text" className="form-control form-control-md" name="zip" value={billingDetails.zip} onChange={handleInputChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>State *</label>
                                        <input type="text" className="form-control form-control-md" name="state" value={billingDetails.state} onChange={handleInputChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone *</label>
                                        <input type="text" className="form-control form-control-md" name="phone" value={billingDetails.phone} onChange={handleInputChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-7">
                                <label>Email address *</label>
                                <input type="email" className="form-control form-control-md" name="email" value={billingDetails.email} onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="col-lg-5 mb-4 sticky-sidebar-wrapper">
                            <div className="order-summary-wrapper sticky-sidebar">
                                <h3 className="title text-uppercase ls-10">Your Order</h3>
                                <div className="order-summary">
                                    <table className="order-table">
                                        <tbody>
                                            {cart.items.map((item) => (
                                                <tr key={item.product._id}>
                                                    <td>{item.product.name} x {item.quantity}</td>
                                                    <td>${(item.quantity * item.product.price).toFixed(2)}</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <th>Total</th>
                                                <td>${cart.totalPrice.toFixed(2)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <button type="submit" className="btn btn-dark btn-block btn-rounded">Place Order</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Checkoute;
