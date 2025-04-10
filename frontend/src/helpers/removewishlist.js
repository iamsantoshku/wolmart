// import axios from "axios";
// import { BACKENDURL } from "../config/config";

// const removeWishlistProduct = async (productId) => {
//   try {
//     e
//     const res = await axios.delete(`${BACKENDURL}/api/v1/wishlist/remove/${productId}`, { 
//     credentials: "include",
//     });
//     return res.data;
//   } catch (error) {
//     return {
//       success: false,
//       message: error?.response?.data?.message || "Something went wrong",
//     };
//   }
// };

// export default removeWishlistProduct;



// import axios from "axios";
// import { BACKENDURL } from "../config/config";

// const removeWishlistProduct = async (productId) => {
//   try {
//     const res = await axios.delete(
//       `${BACKENDURL}/api/v1/wishlist/remove/${productId}`,
//       {
//         withCredentials: true, // ✅ Correct way for Axios
//       }
//     );
//     return res.data;
//   } catch (error) {
//     return {
//       success: false,
//       message: error?.response?.data?.message || "Something went wrong",
//     };
//   }
// };

// export default removeWishlistProduct;


import axios from "axios";
import { BACKENDURL } from "../config/config";

const removeWishlistProduct = async (productId) => {
  try {
    const res = await axios.delete(`${BACKENDURL}/api/v1/wishlist/remove/${productId}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    return {
      success: false,
      message: error?.response?.data?.message || "Something went wrong",
    };
  }
};
export default removeWishlistProduct;