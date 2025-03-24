// import React from 'react'

// const Orderdetcom = () => {
//   return (
//     <div class="tab-pane active order">
//     <p class="mb-7">Order #962 was placed on April 30, 2021 and is currently On hold.</p>
//     <div class="order-details-wrapper mb-5">
//         <h4 class="title text-uppercase ls-25 mb-5">Order Details</h4>
//         <table class="order-table">
//             <thead>
//                 <tr>
//                     <th class="text-dark">Product</th>
//                     <th></th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>
//                         <a href="#">Palm Print Jacket</a>&nbsp;<strong>x 1</strong><br>
//                         Vendor : <a href="#">Vendor 1</a>
//                     </td>
//                     <td>$40.00</td>
//                 </tr>
//                 <tr>
//                     <td>
//                         <a href="#">Brown Backpack</a>&nbsp;<strong>x 1</strong><br>
//                         Vendor : <a href="#">Vendor 1</a>
//                     </td>
//                     <td>$60.00</td>
//                 </tr>
//             </tbody>
//             <tfoot>
//                 <tr>
//                     <th>Subtotal:</th>
//                     <td>$100.00</td>
//                 </tr>
//                 <tr>
//                     <th>Shipping:</th>
//                     <td>Flat rate</td>
//                 </tr>
//                 <tr>
//                     <th>Payment method:</th>
//                     <td>Direct bank transfor</td>
//                 </tr>
//                 <tr class="total">
//                     <th class="border-no">Total:</th>
//                     <td class="border-no">$100.00</td>
//                 </tr>
//             </tfoot>
//         </table>
//     </div>
    

//     <div class="sub-orders mb-10">
//         <h4 class="title mb-5 font-weight-bold ls-25">Sub Orders</h4>
//         <div class="alert alert-icon alert-inline mb-5">
//             <i class="w-icon-exclamation-triangle"></i>
//             <strong>Note: </strong>This order has products from multiple vendors. So we divided this order into multiple vendor orders.
//             Each order will be handled by their respective vendor independently.
//         </div>
//         <table class="order-subtable">
//             <thead>
//                 <tr>
//                     <th class="order">Order</th>
//                     <th class="date">Date</th>
//                     <th class="status">Status</th>
//                     <th class="total">Total</th>
//                     <th class="action"></th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td class="order">950</td>
//                     <td class="date">April 23, 2021</td>
//                     <td class="status">On hold</td>
//                     <td class="total">$40.00 for 1 items</td>
//                     <td class="action"><a href="order-view.html" class="btn btn-rounded">View</a></td>
//                 </tr>
//                 <tr>
//                     <td class="order">951</td>
//                     <td class="date">April 25, 2021</td>
//                     <td class="status">On hold</td>
//                     <td class="total">$60.00 for 1 items</td>
//                     <td class="action"><a href="order-view.html" class="btn btn-rounded">View</a></td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
    

//     <div id="billing-account-addresses">
//         <div class="row">       
//             <div class="col-sm-6 mb-8">
//                 <div class="ecommerce-address billing-address">
//                     <h4 class="title title-underline ls-25 font-weight-bold">Billing Address</h4>
//                     <address class="mb-4">
//                         <table class="address-table">
//                             <tbody>
//                                 <tr>
//                                     <td>John Doe</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Conia</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Wall Street</td>
//                                 </tr>
//                                 <tr>
//                                     <td>California</td>
//                                 </tr>
//                                 <tr>
//                                     <td>United States (US)</td>
//                                 </tr>
//                                 <tr>
//                                     <td>92020</td>
//                                 </tr>
//                                 <tr>
//                                     <td>1112223334</td>
//                                 </tr>
//                                 <tr class="email">
//                                     <td><a href="https://portotheme.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="16787f75736179647d27242356717b777f7a3875797b">[email&#160;protected]</a></td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </address>
//                 </div>
//             </div>
//             <div class="col-sm-6 mb-8">
//                 <div class="ecommerce-address shipping-address">
//                     <h4 class="title title-underline ls-25 font-weight-bold">Shipping Address</h4>
//                     <address class="mb-4">
//                         <table class="address-table">
//                             <tbody>
//                                 <tr>
//                                     <td>John Doe</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Conia</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Wall Street</td>
//                                 </tr>
//                                 <tr>
//                                     <td>California</td>
//                                 </tr>
//                                 <tr>
//                                     <td>United States (US)</td>
//                                 </tr>
//                                 <tr>
//                                     <td>92020</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </address>
//                 </div>
//             </div>
//         </div>
//     </div>
//     {/* <!-- End of Account Address --> */}

//     <a href="#" class="btn btn-dark btn-rounded btn-icon-left btn-back mt-6 mb-6"><i class="w-icon-long-arrow-left"></i>Back To List</a>
// </div>
//   )
// }

// export default Orderdetcom




// import React from 'react';

// const Orderdetcom = () => {
//   return (
//     <div className="tab-pane active order">
//       <p className="mb-7">Order #962 was placed on April 30, 2021 and is currently On hold.</p>
//       <div className="order-details-wrapper mb-5">
//         <h4 className="title text-uppercase ls-25 mb-5">Order Details</h4>
//         <table className="order-table">
//           <thead>
//             <tr>
//               <th className="text-dark">Product</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>
//                 <a href="#">Palm Print Jacket</a>&nbsp;<strong>x 1</strong><br />
//                 Vendor : <a href="#">Vendor 1</a>
//               </td>
//               <td>$40.00</td>
//             </tr>
//             <tr>
//               <td>
//                 <a href="#">Brown Backpack</a>&nbsp;<strong>x 1</strong><br />
//                 Vendor : <a href="#">Vendor 1</a>
//               </td>
//               <td>$60.00</td>
//             </tr>
//           </tbody>
//           <tfoot>
//             <tr>
//               <th>Subtotal:</th>
//               <td>$100.00</td>
//             </tr>
//             <tr>
//               <th>Shipping:</th>
//               <td>Flat rate</td>
//             </tr>
//             <tr>
//               <th>Payment method:</th>
//               <td>Direct bank transfer</td>
//             </tr>
//             <tr className="total">
//               <th className="border-no">Total:</th>
//               <td className="border-no">$100.00</td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>
      
//       <div className="sub-orders mb-10">
//         <h4 className="title mb-5 font-weight-bold ls-25">Sub Orders</h4>
//         <div className="alert alert-icon alert-inline mb-5">
//           <i className="w-icon-exclamation-triangle"></i>
//           <strong>Note: </strong>This order has products from multiple vendors. So we divided this order into multiple vendor orders.
//           Each order will be handled by their respective vendor independently.
//         </div>
//         <table className="order-subtable">
//           <thead>
//             <tr>
//               <th className="order">Order</th>
//               <th className="date">Date</th>
//               <th className="status">Status</th>
//               <th className="total">Total</th>
//               <th className="action"></th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="order">950</td>
//               <td className="date">April 23, 2021</td>
//               <td className="status">On hold</td>
//               <td className="total">$40.00 for 1 item</td>
//               <td className="action"><a href="order-view.html" className="btn btn-rounded">View</a></td>
//             </tr>
//             <tr>
//               <td className="order">951</td>
//               <td className="date">April 25, 2021</td>
//               <td className="status">On hold</td>
//               <td className="total">$60.00 for 1 item</td>
//               <td className="action"><a href="order-view.html" className="btn btn-rounded">View</a></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
      
//       <div id="billing-account-addresses">
//         <div className="row">       
//           <div className="col-sm-6 mb-8">
//             <div className="ecommerce-address billing-address">
//               <h4 className="title title-underline ls-25 font-weight-bold">Billing Address</h4>
//               <address className="mb-4">
//                 <table className="address-table">
//                   <tbody>
//                     <tr><td>John Doe</td></tr>
//                     <tr><td>Conia</td></tr>
//                     <tr><td>Wall Street</td></tr>
//                     <tr><td>California</td></tr>
//                     <tr><td>United States (US)</td></tr>
//                     <tr><td>92020</td></tr>
//                     <tr><td>1112223334</td></tr>
//                   </tbody>
//                 </table>
//               </address>
//             </div>
//           </div>
//           <div className="col-sm-6 mb-8">
//             <div className="ecommerce-address shipping-address">
//               <h4 className="title title-underline ls-25 font-weight-bold">Shipping Address</h4>
//               <address className="mb-4">
//                 <table className="address-table">
//                   <tbody>
//                     <tr><td>John Doe</td></tr>
//                     <tr><td>Conia</td></tr>
//                     <tr><td>Wall Street</td></tr>
//                     <tr><td>California</td></tr>
//                     <tr><td>United States (US)</td></tr>
//                     <tr><td>92020</td></tr>
//                   </tbody>
//                 </table>
//               </address>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <a href="#" className="btn btn-dark btn-rounded btn-icon-left btn-back mt-6 mb-6">
//         <i className="w-icon-long-arrow-left"></i>Back To List
//       </a>
//     </div>
//   );
// };

// export default Orderdetcom;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"; // To get userId from URL params
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";

// const Orderdetcom = () => {
//   const { userId } = useParams(); // Get userId from URL
//   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/checkoutss/orders/${userId}`);
//         console.log(response.data);
//         setOrders(response.data.orders);
        
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setError(err.response?.data?.message || "Failed to fetch orders");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (userId) {
//       fetchOrders();
//     }
//   }, [userId]);

// //   if (loading) return <p>Loading orders...</p>;
//   if (error) return <p className="error">{error}</p>;
//   if (!orders.length) return <p>No orders found.</p>;

//   return (
//     <div className="tab-pane active order">
//       {orders.map((order) => (
//         <div key={order._id}>
//           <p className="mb-7">
//             Order #{order._id} was placed on {new Date(order.createdAt).toDateString()} and is currently {order.status}.
//           </p>

//           <div className="order-details-wrapper mb-5">
//             <h4 className="title text-uppercase ls-25 mb-5">Order Details</h4>
//             <table className="order-table">
//               <thead>
//                 <tr>
//                   <th className="text-dark">Product</th>
//                   <th>Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {order.products.map((item) => (
//                   <tr key={item.productId}>
//                     <td>
//                       <a href="#">{item.name}</a>&nbsp;<strong>x {item.quantity}</strong>
//                       <br />
//                       Vendor: <a href="#">{item.vendorId}</a>
//                     </td>
//                     <td>${item.price.toFixed(2)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <th>Subtotal:</th>
//                   <td>${order.totalAmount.toFixed(2)}</td>
//                 </tr>
//                 <tr>
//                   <th>Shipping:</th>
//                   <td>Flat rate</td>
//                 </tr>
//                 <tr>
//                   <th>Status:</th>
//                   <td>{order.status}</td>
//                 </tr>
//                 <tr className="total">
//                   <th className="border-no">Total:</th>
//                   <td className="border-no">${order.totalAmount.toFixed(2)}</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>

//           {/* Billing Details */}
//           {order.billingDetails && (
//             <div className="billing-address">
//               <h4 className="title title-underline ls-25 font-weight-bold">Billing Address</h4>
//               <address>
//                 <p>{order.billingDetails.firstName} {order.billingDetails.lastName}</p>
//                 <p>{order.billingDetails.streetAddress1}, {order.billingDetails.streetAddress2 || ""}</p>
//                 <p>{order.billingDetails.city}, {order.billingDetails.state}, {order.billingDetails.country}</p>
//                 <p>{order.billingDetails.zip}</p>
//                 <p>{order.billingDetails.phone}</p>
//               </address>
//             </div>
//           )}

//           <a href="#" className="btn btn-dark btn-rounded btn-icon-left btn-back mt-6 mb-6">
//             <i className="w-icon-long-arrow-left"></i>Back To List
//           </a>

//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Orderdetcom;



// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";

// const Orderdetcom = () => {
  
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const user = useSelector(state => state.user.user); 

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/checkoutss/orders/${userId}`);
//         console.log("Orders fetched:", response.data);
//         setOrders(response.data.orders);
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setError(err.response?.data?.message || "Failed to fetch orders");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (userId) {
//       fetchOrders();
//     }
//   }, [userId]);

//   if (loading) return <p>Loading orders...</p>;
//   if (error) return <p className="error">{error}</p>;
//   if (!orders.length) return <p>No orders found.</p>;

//   return (
//     <div className="tab-pane active order">
//       {orders.map((order) => (
//         <div key={order._id}>
//           <p className="mb-7">
//             Order #{order._id} was placed on {new Date(order.createdAt).toDateString()} and is currently {order.status}.
//           </p>

//           <div className="order-details-wrapper mb-5">
//             <h4 className="title text-uppercase ls-25 mb-5">Order Details</h4>
//             <table className="order-table">
//               <thead>
//                 <tr>
//                   <th className="text-dark">Product</th>
//                   <th>Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {order.products.map((item) => (
//                   <tr key={item.productId}>
//                     <td>
//                       <a href="#">{item.name}</a>&nbsp;<strong>x {item.quantity}</strong>
//                       <br />
//                       Vendor: <a href="#">{item.vendorId}</a>
//                     </td>
//                     <td>${item.price.toFixed(2)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <th>Subtotal:</th>
//                   <td>${order.totalAmount.toFixed(2)}</td>
//                 </tr>
//                 <tr>
//                   <th>Shipping:</th>
//                   <td>Flat rate</td>
//                 </tr>
//                 <tr>
//                   <th>Status:</th>
//                   <td>{order.status}</td>
//                 </tr>
//                 <tr className="total">
//                   <th className="border-no">Total:</th>
//                   <td className="border-no">${order.totalAmount.toFixed(2)}</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>

//           {/* Billing Details */}
//           {order.billingDetails && (
//             <div className="billing-address">
//               <h4 className="title title-underline ls-25 font-weight-bold">Billing Address</h4>
//               <address>
//                 <p>{order.billingDetails.firstName} {order.billingDetails.lastName}</p>
//                 <p>{order.billingDetails.streetAddress1}, {order.billingDetails.streetAddress2 || ""}</p>
//                 <p>{order.billingDetails.city}, {order.billingDetails.state}, {order.billingDetails.country}</p>
//                 <p>{order.billingDetails.zip}</p>
//                 <p>{order.billingDetails.phone}</p>
//               </address>
//             </div>
//           )}

//           <a href="#" className="btn btn-dark btn-rounded btn-icon-left btn-back mt-6 mb-6">
//             <i className="w-icon-long-arrow-left"></i>Back To List
//           </a>

//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Orderdetcom;


// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";

// const Orderdetcom = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Get user details from Redux store
//   const user = useSelector((state) => state.user.user);
//   const userId = user?._id; // Extract userId safely

//   useEffect(() => {
//     if (!userId) {
//       setError("User ID not found. Please log in again.");
//       setLoading(false);
//       return;
//     }

//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/checkoutss/orders/${userId}`);
//         console.log("Orders fetched:", response.data);
//         setOrders(response.data.orders);
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setError(err.response?.data?.message || "Failed to fetch orders");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [userId]);

//   if (loading) return <p>Loading orders...</p>;
//   if (error) return <p className="error">{error}</p>;
//   if (!orders.length) return <p>No orders found.</p>;

//   return (
//     <div className="tab-pane active order">
//       {orders.map((order) => (
//         <div key={order._id}>
//           <p className="mb-7">
//             Order #{order._id} was placed on {new Date(order.createdAt).toDateString()} and is currently {order.status}.
//           </p>

//           <div className="order-details-wrapper mb-5">
//             <h4 className="title text-uppercase ls-25 mb-5">Order Details</h4>
//             <table className="order-table">
//               <thead>
//                 <tr>
//                   <th className="text-dark">Product</th>
//                   <th>Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {order.products.map((item) => (
//                   <tr key={item.productId}>
//                     <td>
//                       <a href="#">{item.name}</a>&nbsp;<strong>x {item.quantity}</strong>
//                       <br />
//                       Vendor: <a href="#">{item.vendorId}</a>
//                     </td>
//                     <td>${item.price.toFixed(2)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <th>Subtotal:</th>
//                   <td>${order.totalAmount.toFixed(2)}</td>
//                 </tr>
//                 <tr>
//                   <th>Shipping:</th>
//                   <td>Flat rate</td>
//                 </tr>
//                 <tr>
//                   <th>Status:</th>
//                   <td>{order.status}</td>
//                 </tr>
//                 <tr className="total">
//                   <th className="border-no">Total:</th>
//                   <td className="border-no">${order.totalAmount.toFixed(2)}</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>

//           {/* Billing Details */}
//           {order.billingDetails && (
//             <div className="billing-address">
//               <h4 className="title title-underline ls-25 font-weight-bold">Billing Address</h4>
//               <address>
//                 <p>{order.billingDetails.firstName} {order.billingDetails.lastName}</p>
//                 <p>{order.billingDetails.streetAddress1}, {order.billingDetails.streetAddress2 || ""}</p>
//                 <p>{order.billingDetails.city}, {order.billingDetails.state}, {order.billingDetails.country}</p>
//                 <p>{order.billingDetails.zip}</p>
//                 <p>{order.billingDetails.phone}</p>
//               </address>
//             </div>
//           )}

//           <a href="#" className="btn btn-dark btn-rounded btn-icon-left btn-back mt-6 mb-6">
//             <i className="w-icon-long-arrow-left"></i>Back To List
//           </a>

//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Orderdetcom;



import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { BACKENDURL } from "../../config/config";

const Orderdetcom = () => {
  const [orders, setOrders] = useState([]);


  // Get user details from Redux store
  const user = useSelector((state) => state.user.user);
  console.log("Redux user:", user); // Debugging user state
  const userId = user?._id;
  console.log("Extracted userId:", userId); // Debugging userId

  useEffect(() => {
    

    const fetchOrders = async () => {
      try {
        console.log(`Fetching orders for user ID: ${userId}`);
        const response = await axios.get(`${BACKENDURL}/api/v1/checkoutss/orders/${userId}`);
        console.log("Orders fetched:", response.data);
        setOrders(response.data.orders);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError(err.response?.data?.message || "Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

//   if (loading) return <p>Loading orders...</p>;
//   if (error) return <p className="error">{error}</p>;
  if (!orders.length) return <p>No orders found.</p>;

  return (
    <div className="tab-pane active order px-20">
      {orders.map((order) => (
        <div key={order._id}>
          <p className="mb-7">
            Order #{order._id} was placed on {new Date(order.createdAt).toDateString()} and is currently {order.status}.
          </p>

          <div className="order-details-wrapper mb-5">
            <h4 className="title text-uppercase ls-25 mb-5">Order Details</h4>
            <table className="order-table">
              <thead>
                <tr>
                  <th className="text-dark">Product</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {order.products.map((item) => (
                  <tr key={item.productId}>
                    <td>
                      <a href="#">{item.name}</a>&nbsp;<strong>x {item.quantity}</strong>
                      <br />
                      Vendor: <a href="#">{item.vendorId}</a>
                      <br />
                      
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Subtotal:</th>
                  <td>${order.totalAmount.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Shipping:</th>
                  <td>Flat rate</td>
                </tr>
                <tr>
                  <th>Status:</th>
                  <td>{order.status}</td>
                </tr>
                <tr className="total">
                  <th className="border-no">Total:</th>
                  <td className="border-no">${order.totalAmount.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {order.billingDetails && (
            <div className="billing-address">
              <h4 className="title title-underline ls-25 font-weight-bold">Billing Address</h4>
              <address>
                <p>{order.billingDetails.firstName} {order.billingDetails.lastName}</p>
                <p>{order.billingDetails.streetAddress1}, {order.billingDetails.streetAddress2 || ""}</p>
                <p>{order.billingDetails.city}, {order.billingDetails.state}, {order.billingDetails.country}</p>
                <p>{order.billingDetails.zip}</p>
                <p>{order.billingDetails.phone}</p>
              </address>
            </div>
          )}

          <a href="#" className="btn btn-dark btn-rounded btn-icon-left btn-back mt-6 mb-6">
            <i className="w-icon-long-arrow-left"></i>Back To List
          </a>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Orderdetcom;
