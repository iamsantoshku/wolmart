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

// const removeWishlistProduct = async (productId) => {
//   try {
//     const res = await axios.delete(`${BACKENDURL}/api/v1/wishlist/remove/${productId}`, {
//       withCredentials: true,
//     });
//     return res.data;
//   } catch (error) {
//     console.error("Remove Wishlist Error:", error?.response?.data || error);
//     return {
//       success: false,
//       message: error?.response?.data?.message || "Something went wrong",
//     };
//   }
// };

// export default removeWishlistProduct;



// const removeWishlistProduct = async (productId) => {
//   try {
//       const response = await axios.delete(`${BACKENDURL}/api/v1/wishlist/remove/${productId}`, {
//           withCredentials:true
//       });

//       return response.data;
//   } catch (error) {
//       return {
//           success: false,
//           message: error.response?.data?.message || 'Something went wrong'
//       };
//   }
// };

const removeWishlistProduct = async (productId) => {
  try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`${BACKENDURL}/api/v1/wishlist/remove/${productId}`, {
          // headers: {
          //     Authorization: `Bearer ${token}`,
          // },
          withCredentials:true,
      });

      return response.data;
  } catch (error) {
      return {
          success: false,
          message: error.response?.data?.message || 'Something went wrong',
      };
  }
};

export default removeWishlistProduct;

// export default removeWishlistProduct;