// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import DynamicHead from "../component/DynamicHead";

// const OrderSuccess = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       navigate("/");
//     }, 20000);

//     return () => clearTimeout(timeout);
//   }, [navigate]);

//   return (
//     <>
//     <DynamicHead
//   title="Order Successful - Zumpon"
//   description="Thank you for your purchase! Your order has been placed successfully. Track your order and explore more amazing products on Zumpon."
//   keywords="Order Success, Purchase Complete, Order Confirmation, Zumpon"
//   image="https://zumpon.com/images/order-success-banner.png"
//   url="https://zumpon.com/order-success"
//   author="Zumpon Team"
// />

// <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 px-4">
//       <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full animate-fade-in">
//         <div className="flex justify-center mb-4">
//           <svg
//             className="w-16 h-16 text-green-500"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//           </svg>
//         </div>
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Successful!</h1>
//         <p className="text-gray-600 mb-6">
//           Thank you for your purchase. Your order has been placed successfully.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-3 justify-center">
//           <button
//             onClick={() => navigate("/")}
//             className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition transform hover:scale-105 duration-300 shadow-md"
//           >
//             Back to Home
//           </button>

//           <button
//             onClick={() => navigate("/order-detail")}
//             className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition transform hover:scale-105 duration-300 shadow-md"
//           >
//             Go to Order Details
//           </button>
//         </div>

//         <p className="text-sm text-gray-500 mt-4">Redirecting to home in 20 seconds...</p>
//       </div>
//     </div>
//     </>
   
//   );
// };

// export default OrderSuccess;




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKENDURL } from "../config/config";
import DynamicHead from "../component/DynamicHead";
import { useSelector } from "react-redux";
import axios from "axios";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [userRatings, setUserRatings] = useState({});
  const user = useSelector((state) => state.user.user);
  const userId = user?._id;

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 20000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  // Fetching user orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/checkoutss/orders/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.data?.success) {
          setOrders(response.data.orders);
        } else {
          console.error("Failed to fetch orders:", response.data?.message);
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    if (userId) fetchOrders();
  }, [userId]);

  // Handle Star Rating Click
  const handleStarClick = (productId, star) => {
    setUserRatings((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], stars: star },
    }));
  };

  // Handle Review Submission
  const handleReviewSubmit = async (productName) => {
    const ratingData = userRatings[productName];
    // if (!ratingData || !ratingData.stars || ratingData.stars < 1 || ratingData.stars > 5) {
    //   return alert("Please select a rating between 1 and 5 stars.");
    // }

   

    try {
      const response = await fetch(
        `${BACKENDURL}/api/v1/product/productrv/${productName.replace(/\s+/g, "-")}/review`,
        // `/${product.name.replace(/\s+/g, "-")}`
        {
          method: "POST",
          credentials: "include",
          
          body: JSON.stringify({
            stars: Number(ratingData.stars),
            comment: ratingData.comment || "",
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Review submitted!");
        setUserRatings((prev) => ({
          ...prev,
          [productName]: { stars: 0, comment: "" },
        }));
      } else {
        alert(data.message || "Failed to submit review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Something went wrong while submitting the review.");
    }
  };

  return (
    <>
      <DynamicHead
        title="Order Successful - Zumpon"
        description="Thank you for your purchase! Rate your purchased products."
        keywords="Order Success, Product Review, Customer Rating, Zumpon"
        image="https://zumpon.com/images/order-success-banner.png"
        url="https://zumpon.com/order-success"
        author="Zumpon Team"
      />

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Successful!</h1>
          <p className="text-gray-600 mb-6">Thank you for your purchase. Rate your products below.</p>

          {orders.length > 0 ? (
            orders.flatMap((order) =>
              order.products.map((product) => (
                <div key={product._id} className="mb-6 border-b pb-4">
                  <p className="font-semibold">{product.name}</p>
                  <div className="flex justify-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        onClick={() => handleStarClick(product.name, star)}
                        className={`cursor-pointer text-2xl ${
                          userRatings[product.name]?.stars >= star ? "text-yellow-500" : "text-gray-400"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
               
                  <button
                    onClick={() => handleReviewSubmit(product.name)}
                    className="mt-2 px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Submit Review
                  </button>
                </div>
              ))
            )
          ) : (
            <p className="text-gray-600">No products found for rating.</p>
          )}

          <button
            onClick={() => navigate("/")}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full mt-4"
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;



