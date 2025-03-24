import mongoose from "mongoose";

const CheckouteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor", required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    billingDetails: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      country: { type: String, required: true },
      streetAddress1: { type: String, required: true },
      streetAddress2: { type: String },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },
    status: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Checkoute", CheckouteSchema);
