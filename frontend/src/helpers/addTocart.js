// import SummaryApi from "../common";
// import { toast } from "react-toastify";
// import { BACKENDURL } from "../config/config";

// const addToCart = async (e, id, size, selectedColor) => {
//   try {
//     e?.stopPropagation();
//     e?.preventDefault();

//     if (!id || !size || !selectedColor) {
//       toast.error("Product ID, size, and color are required!");
//       return { error: true, message: "Missing required fields" };
//     }

//     const response = await fetch(BACKENDURL + "/api/v1/cart/addtocart", {
//       method: "post",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         productId: id,
//         size,
//         selectedColor, // Pass selected color
//       }),
//     });

//     const responseData = await response.json();

//     if (response.ok) {
//       toast.success(responseData.message || "Product added to cart successfully!");
//       return responseData;
//     } else {
//       toast.error(responseData.message || "Failed to add product to cart.");
//       return { error: true, message: responseData.message };
//     }

//   } catch (error) {
//     console.error("Error adding to cart:", error);
//     toast.error("Something went wrong. Please try again.");
//     return { error: true, message: error.message };
//   }
// };

// export default addToCart;



// import { toast } from "react-toastify";
// import { BACKENDURL } from "../config/config";

// const addToCart = async (e, id, size, selectedColor) => {
//   try {
//     e?.stopPropagation();
//     e?.preventDefault();

//     // Only require product ID and size, NOT color
//     if (!id || !size) {
//       toast.error("Please select a size before adding to cart!");
//       return { error: true, message: "Size is required" };
//     }

//     const response = await fetch(BACKENDURL + "/api/v1/cart/addtocart", {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         productId: id,
//         size,
//         selectedColor: selectedColor || null, // Send null if no color is selected
//       }),
//     });

//     const responseData = await response.json();

//     if (response.ok) {
//       toast.success(responseData.message || "Product added to cart successfully!");
//       return responseData;
//     } else {
//       toast.error(responseData.message || "Failed to add product to cart.");
//       return { error: true, message: responseData.message };
//     }
//   } catch (error) {
//     console.error("Error adding to cart:", error);
//     toast.error("Something went wrong. Please try again.");
//     return { error: true, message: error.message };
//   }
// };

// export default addToCart;


import { toast } from "react-toastify";
import { BACKENDURL } from "../config/config";

const addToCart = async (e, id, size, selectedColor) => {
  try {
    e?.stopPropagation();
    e?.preventDefault();

    if (!id || !size) {
      toast.error("Please select a size before adding to cart!");
      return { error: true, message: "Size is required" };
    }

    // Ensure size is a valid string
    const validSize = typeof size === "string" ? size.trim() : "";
    if (!validSize) {
      toast.error("Invalid size selection!");
      return { error: true, message: "Invalid size" };
    }

    // Prepare payload
    const payload = {
      productId: id,
      size: validSize,
      selectedColor: selectedColor || null, // Ensure color is optional
    };

    console.log("Sending request to backend with payload:", payload);

    const response = await fetch(`${BACKENDURL}/api/v1/cart/addtocart`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();

    console.log("Response from backend:", responseData);

    if (response.ok) {
      toast.success(responseData.message || "Product added to cart successfully!");
      return responseData;
    } else {
      toast.error(responseData.message || "Failed to add product to cart.");
      return { error: true, message: responseData.message };
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    toast.error("Something went wrong. Please try again.");
    return { error: true, message: error.message };
  }
};

export default addToCart;
