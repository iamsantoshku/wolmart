// import React from 'react'

// const Cart = () => {
//   return (
//     <div class="page-content">
//     <div class="container">
//         <div class="row gutter-lg mb-10">
//             <div class="col-lg-8 pr-lg-4 mb-6">
//                 <table class="shop-table cart-table">
//                     <thead>
//                         <tr>
//                             <th class="product-name"><span>Product</span></th>
//                             <th></th>
//                             <th class="product-price"><span>Price</span></th>
//                             <th class="product-quantity"><span>Quantity</span></th>
//                             <th class="product-subtotal"><span>Subtotal</span></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td class="product-thumbnail">
//                                 <div class="p-relative">
//                                     <a href="product-default.html">
//                                         <figure>
//                                             <img src="assets/images/shop/12.jpg" alt="product"
//                                                 width="300" height="338">
//                                         </figure>
//                                     </a>
//                                     <button type="submit" class="btn btn-close"><i
//                                             class="fas fa-times"></i></button>
//                                 </div>
//                             </td>
//                             <td class="product-name">
//                                 <a href="product-default.html">
//                                     Classic Simple Backpack
//                                 </a>
//                             </td>
//                             <td class="product-price"><span class="amount">$40.00</span></td>
//                             <td class="product-quantity">
//                                 <div class="input-group">
//                                     <input class="quantity form-control" type="number" min="1" max="100000">
//                                     <button class="quantity-plus w-icon-plus"></button>
//                                     <button class="quantity-minus w-icon-minus"></button>
//                                 </div>
//                             </td>
//                             <td class="product-subtotal">
//                                 <span class="amount">$40.00</span>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td class="product-thumbnail">
//                                 <div class="p-relative">
//                                     <a href="product-default.html">
//                                         <figure>
//                                             <img src="assets/images/shop/13.jpg" alt="product"
//                                                 width="300" height="338">
//                                         </figure>
//                                     </a>
//                                     <button class="btn btn-close"><i class="fas fa-times"></i></button>
//                                 </div>
//                             </td>
//                             <td class="product-name">
//                                 <a href="product-default.html">
//                                     Smart Watch
//                                 </a>
//                             </td>
//                             <td class="product-price"><span class="amount">$60.00</span></td>
//                             <td class="product-quantity">
//                                 <div class="input-group">
//                                     <input class="quantity form-control" type="number" min="1" max="100000">
//                                     <button class="quantity-plus w-icon-plus"></button>
//                                     <button class="quantity-minus w-icon-minus"></button>
//                                 </div>
//                             </td>
//                             <td class="product-subtotal">
//                                 <span class="amount">$60.00</span>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>

//                 <div class="cart-action mb-6">
//                     <a href="#" class="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto"><i class="w-icon-long-arrow-left"></i>Continue Shopping</a>
//                     <button type="submit" class="btn btn-rounded btn-default btn-clear" name="clear_cart" value="Clear Cart">Clear Cart</button> 
//                     <button type="submit" class="btn btn-rounded btn-update disabled" name="update_cart" value="Update Cart">Update Cart</button>
//                 </div>

//                 <form class="coupon">
//                     <h5 class="title coupon-title font-weight-bold text-uppercase">Coupon Discount</h5>
//                     <input type="text" class="form-control mb-4" placeholder="Enter coupon code here..." required />
//                     <button class="btn btn-dark btn-outline btn-rounded">Apply Coupon</button>
//                 </form>
//             </div>
//             <div class="col-lg-4 sticky-sidebar-wrapper">
//                 <div class="sticky-sidebar">
//                     <div class="cart-summary mb-4">
//                         <h3 class="cart-title text-uppercase">Cart Totals</h3>
//                         <div class="cart-subtotal d-flex align-items-center justify-content-between">
//                             <label class="ls-25">Subtotal</label>
//                             <span>$100.00</span>
//                         </div>

//                         <hr class="divider">

//                         <ul class="shipping-methods mb-2">
//                             <li>
//                                 <label
//                                     class="shipping-title text-dark font-weight-bold">Shipping</label>
//                             </li>
//                             <li>
//                                 <div class="custom-radio">
//                                     <input type="radio" id="free-shipping" class="custom-control-input"
//                                         name="shipping">
//                                     <label for="free-shipping"
//                                         class="custom-control-label color-dark">Free
//                                         Shipping</label>
//                                 </div>
//                             </li>
//                             <li>
//                                 <div class="custom-radio">
//                                     <input type="radio" id="local-pickup" class="custom-control-input"
//                                         name="shipping">
//                                     <label for="local-pickup"
//                                         class="custom-control-label color-dark">Local
//                                         Pickup</label>
//                                 </div>
//                             </li>
//                             <li>
//                                 <div class="custom-radio">
//                                     <input type="radio" id="flat-rate" class="custom-control-input"
//                                         name="shipping">
//                                     <label for="flat-rate" class="custom-control-label color-dark">Flat
//                                         rate:
//                                         $5.00</label>
//                                 </div>
//                             </li>
//                         </ul>

//                         <div class="shipping-calculator">
//                             <p class="shipping-destination lh-1">Shipping to <strong>CA</strong>.</p>

//                             <form class="shipping-calculator-form">
//                                 <div class="form-group">
//                                     <div class="select-box">
//                                         <select name="country" class="form-control form-control-md">
//                                             <option value="default" selected="selected">United States
//                                                 (US)
//                                             </option>
//                                             <option value="us">United States</option>
//                                             <option value="uk">United Kingdom</option>
//                                             <option value="fr">France</option>
//                                             <option value="aus">Australia</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div class="form-group">
//                                     <div class="select-box">
//                                         <select name="state" class="form-control form-control-md">
//                                             <option value="default" selected="selected">California
//                                             </option>
//                                             <option value="ohaio">Ohaio</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div class="form-group">
//                                     <input class="form-control form-control-md" type="text"
//                                         name="town-city" placeholder="Town / City">
//                                 </div>
//                                 <div class="form-group">
//                                     <input class="form-control form-control-md" type="text"
//                                         name="zipcode" placeholder="ZIP">
//                                 </div>
//                                 <button type="submit" class="btn btn-dark btn-outline btn-rounded">Update
//                                     Totals</button>
//                             </form>
//                         </div>

//                         <hr class="divider mb-6">
//                         <div class="order-total d-flex justify-content-between align-items-center">
//                             <label>Total</label>
//                             <span class="ls-50">$100.00</span>
//                         </div>
//                         <a href="#"
//                             class="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout">
//                             Proceed to checkout<i class="w-icon-long-arrow-right"></i></a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//   )
// }

// export default Cart



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";
// import Cartnav from "./Cartnav";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const [cart, setCart] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get(BACKENDURL + "/api/v1/cart/getcart", {
//           withCredentials: true, // If using cookies for auth
//         });
//         setCart(response.data.data);
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCart();
//   }, []);

//   const handleCheckout = () => {
//     if (cart?.items?.length > 0) {
//       navigate("/checkout", { state: { cart } });
//     } else {
//       alert("Your cart is empty. Add items before checkout.");
//     }
//   };


//   if (loading) return <p>Loading cart...</p>;

//   return (
//     <>
//      <Cartnav/>
//      <div className="page-content">
//       <div className="container">
//         <div className="row gutter-lg mb-10">
//           <div className="col-lg-8 pr-lg-4 mb-6">
//             <table className="shop-table cart-table">
//               <thead>
//                 <tr>
//                   <th className="product-name"><span>Product</span></th>
//                   <th></th>
//                   <th className="product-price"><span>Price</span></th>
//                   <th className="product-quantity"><span>Quantity</span></th>
//                   <th className="product-subtotal"><span>Subtotal</span></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart?.items?.length > 0 ? (
//                   cart.items.map((item) => (
//                     <tr key={item.product._id}>
//                       <td className="product-thumbnail">
//                         <div className="p-relative">
//                           <a href={`/product/${item.product._id}`}>
//                             <figure>
//                               <img
//                                 src={item.product.image || "assets/images/shop/default.jpg"}
//                                 // src={`${BACKENDURL}/uploads/product/${item.product.image?.[0]?.urls?.[0].split('\\').pop()}`}
//                                 alt={item.product.name}
//                                 width="300"
//                                 height="338"
//                               />
//                             </figure>
//                           </a>


//                           <button type="button" className="btn btn-close">
//                             <i className="fas fa-times"></i>
//                           </button>
//                         </div>
//                       </td>
//                       <td className="product-name">
//                         <a href={`/product/${item.product._id}`}>
//                           {item.product.name}
//                         </a>
//                       </td>
//                       <td className="product-price">
//                         <span className="amount">${item.price.toFixed(2)}</span>
//                       </td>
//                       <td className="product-quantity">
//                         <div className="input-group">
//                           <input
//                             className="quantity form-control"
//                             type="number"
//                             min="1"
//                             max="100000"
//                             value={item.quantity}
//                             readOnly
//                           />
//                         </div>
//                       </td>
//                       <td className="product-subtotal">
//                         <span className="amount">${(item.price * item.quantity).toFixed(2)}</span>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" className="text-center">
//                       <p>Your cart is empty</p>
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>

//             <div className="cart-action mb-6">
//               <a href="#" className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto">
//                 <i className="w-icon-long-arrow-left"></i>Continue Shopping
//               </a>
//               <button type="button" className="btn btn-rounded btn-default btn-clear">
//                 Clear Cart
//               </button>
//               <button type="button" className="btn btn-rounded btn-update disabled">
//                 Update Cart
//               </button>
//             </div>

//             <form className="coupon">
//               <h5 className="title coupon-title font-weight-bold text-uppercase">Coupon Discount</h5>
//               <input type="text" className="form-control mb-4" placeholder="Enter coupon code here..." required />
//               <button className="btn btn-dark btn-outline btn-rounded">Apply Coupon</button>
//             </form>
//           </div>
//           <div className="col-lg-4 sticky-sidebar-wrapper">
//             <div className="sticky-sidebar">
//               <div className="cart-summary mb-4">
//                 <h3 className="cart-title text-uppercase">Cart Totals</h3>
//                 <div className="cart-subtotal d-flex align-items-center justify-content-between">
//                   <label className="ls-25">Subtotal</label>
//                   <span>${cart?.totalPrice?.toFixed(2) || "0.00"}</span>
//                 </div>

//                 <hr className="divider" />

//                 <ul className="shipping-methods mb-2">
//                   <li>
//                     <label className="shipping-title text-dark font-weight-bold">Shipping</label>
//                   </li>
//                   <li>
//                     <div className="custom-radio">
//                       <input type="radio" id="free-shipping" className="custom-control-input" name="shipping" />
//                       <label htmlFor="free-shipping" className="custom-control-label color-dark">
//                         Free Shipping
//                       </label>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="custom-radio">
//                       <input type="radio" id="local-pickup" className="custom-control-input" name="shipping" />
//                       <label htmlFor="local-pickup" className="custom-control-label color-dark">
//                         Local Pickup
//                       </label>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="custom-radio">
//                       <input type="radio" id="flat-rate" className="custom-control-input" name="shipping" />
//                       <label htmlFor="flat-rate" className="custom-control-label color-dark">
//                         Flat rate: $5.00
//                       </label>
//                     </div>
//                   </li>
//                 </ul>

//                 <hr className="divider mb-6" />
//                 <div className="order-total d-flex justify-content-between align-items-center">
//                   <label>Total</label>
//                   <span className="ls-50">${cart?.totalPrice?.toFixed(2) || "0.00"}</span>
//                 </div>
                

// <button onClick={handleCheckout} className="btn btn-dark btn-block">
//                   Proceed to Checkout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
   
//   );
// };

// export default Cart;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config";
import Cartnav from "./Cartnav";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get(BACKENDURL + "/api/v1/cart/getcart", {
        withCredentials: true,
      });
      setCart(response.data.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      await axios.delete(`${BACKENDURL}/api/v1/cart/remove/${productId}`, {
        withCredentials: true,
      });
      fetchCart(); // Refresh cart after removing item
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const handleCheckout = () => {
    if (cart?.items?.length > 0) {
      navigate("/checkout", { state: { cart } });
    } else {
      alert("Your cart is empty. Add items before checkout.");
    }
  };

  if (loading) return <p>Loading cart...</p>;

  return (
    <>
      <Cartnav />
      <div className="page-content">
        <div className="container">
          <div className="row gutter-lg mb-10">
            <div className="col-lg-8 pr-lg-4 mb-6">
              <table className="shop-table cart-table">
                <thead>
                  <tr>
                    <th className="product-name"><span>Product</span></th>
                    <th></th>
                    <th className="product-price"><span>Price</span></th>
                    <th className="product-quantity"><span>Quantity</span></th>
                    <th className="product-subtotal"><span>Subtotal</span></th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.items?.length > 0 ? (
                    cart.items.map((item) => (
                      <tr key={item.product._id}>
                        <td className="product-thumbnail">
                          <div className="p-relative">
                            <a href={`/product/${item.product._id}`}>
                              <figure>
                                <img
                                  // src={item.product.image || "assets/images/shop/default.jpg"}
                                  // src={`${BACKENDURL}/uploads/product/${item.product.images?.[0]?.urls?.[0].split("\\").pop()}`}
                                  // src={
                                  //   item.product.images?.[0]?.urls?.[0]
                                  //     ? `${BACKENDURL}/uploads/product/${item.product.images[0].urls[0].split("\\").pop()}`
                                  //     : "assets/images/shop/default.jpg"
                                  // }
                                  // alt={item.product.name}
                                  // width="300"
                                  // height="338"


                                  src={
                                    item.product.image
                                      ? `${BACKENDURL}/uploads/product/${item.product.image.split("\\").pop()}`
                                      : "/assets/images/shop/default.jpg"
                                  }
                                  alt={item.product.name}
                                  width="200"
                                  height="200"
                                />
                              </figure>
                            </a>
                            <button 
                              type="button" 
                              className="btn btn-close"
                              onClick={() => handleRemoveFromCart(item.product._id)}
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          </div>
                        </td>
                        <td className="product-name">
                          <a href={`/product/${item.product._id}`}>{item.product.name}</a>
                        </td>
                        <td className="product-price">
                          <span className="amount">${item.price.toFixed(2)}</span>
                        </td>
                        <td className="product-quantity">
                          <div className="input-group">
                            <input
                              className="quantity form-control"
                              type="number"
                              min="1"
                              max="100000"
                              value={item.quantity}
                              readOnly
                            />
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">${(item.price * item.quantity).toFixed(2)}</span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        <p>Your cart is empty</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <form className="coupon">
               <h5 className="title coupon-title font-weight-bold text-uppercase">Coupon Discount</h5>
               <input type="text" className="form-control mb-4" placeholder="Enter coupon code here..." required />
               <button className="btn btn-dark btn-outline btn-rounded">Apply Coupon</button>
             </form>
            </div>
            
            <div className="col-lg-4 sticky-sidebar-wrapper">
            <div className="sticky-sidebar">
              <div className="cart-summary mb-4">
                <h3 className="cart-title text-uppercase">Cart Totals</h3>
                <div className="cart-subtotal d-flex align-items-center justify-content-between">
                  <label className="ls-25">Subtotal</label>
                  <span>${cart?.totalPrice?.toFixed(2) || "0.00"}</span>
                </div>

                <hr className="divider" />

                <ul className="shipping-methods mb-2">
                  <li>
                    <label className="shipping-title text-dark font-weight-bold">Shipping</label>
                  </li>
                  <li>
                    <div className="custom-radio">
                      <input type="radio" id="free-shipping" className="custom-control-input" name="shipping" />
                      <label htmlFor="free-shipping" className="custom-control-label color-dark">
                        Free Shipping
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-radio">
                      <input type="radio" id="local-pickup" className="custom-control-input" name="shipping" />
                      <label htmlFor="local-pickup" className="custom-control-label color-dark">
                        Local Pickup
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-radio">
                      <input type="radio" id="flat-rate" className="custom-control-input" name="shipping" />
                      <label htmlFor="flat-rate" className="custom-control-label color-dark">
                        Flat rate: $5.00
                      </label>
                    </div>
                  </li>
                </ul>

                <hr className="divider mb-6" />
                <div className="order-total d-flex justify-content-between align-items-center">
                  <label>Total</label>
                  <span className="ls-50">${cart?.totalPrice?.toFixed(2) || "0.00"}</span>
                </div>
                

<button onClick={handleCheckout} className="btn btn-dark btn-block">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

