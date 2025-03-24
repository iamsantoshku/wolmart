// import React from 'react'

// const CheckoutBil = () => {
//   return (
//     <form class="form checkout-form" action="#" method="post">
//     <div class="row mb-9">
//         <div class="col-lg-7 pr-lg-4 mb-4">
//             <h3 class="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">
//                 Billing Details
//             </h3>
//             <div class="row gutter-sm">
//                 <div class="col-xs-6">
//                     <div class="form-group">
//                         <label>First name *</label>
//                         <input type="text" class="form-control form-control-md" name="firstname"
//                             required>
//                     </div>
//                 </div>
//                 <div class="col-xs-6">
//                     <div class="form-group">
//                         <label>Last name *</label>
//                         <input type="text" class="form-control form-control-md" name="lastname"
//                             required>
//                     </div>
//                 </div>
//             </div>
//             <div class="form-group">
//                 <label>Company name (optional)</label>
//                 <input type="text" class="form-control form-control-md" name="company-name">
//             </div>
//             <div class="form-group">
//                 <label>Country / Region *</label>
//                 <div class="select-box">
//                     <select name="country" class="form-control form-control-md">
//                         <option value="default" selected="selected">United States
//                             (US)
//                         </option>
//                         <option value="uk">United Kingdom (UK)</option>
//                         <option value="us">United States</option>
//                         <option value="fr">France</option>
//                         <option value="aus">Australia</option>
//                     </select>
//                 </div>
//             </div>
//             <div class="form-group">
//                 <label>Street address *</label>
//                 <input type="text" placeholder="House number and street name"
//                     class="form-control form-control-md mb-2" name="street-address-1" required>
//                 <input type="text" placeholder="Apartment, suite, unit, etc. (optional)"
//                     class="form-control form-control-md" name="street-address-2" required>
//             </div>
//             <div class="row gutter-sm">
//                 <div class="col-md-6">
//                     <div class="form-group">
//                         <label>Town / City *</label>
//                         <input type="text" class="form-control form-control-md" name="town" required>
//                     </div>
//                     <div class="form-group">
//                         <label>ZIP *</label>
//                         <input type="text" class="form-control form-control-md" name="zip" required>
//                     </div>
//                 </div>
//                 <div class="col-md-6">
//                     <div class="form-group">
//                         <label>State *</label>
//                         <div class="select-box">
//                             <select name="country" class="form-control form-control-md">
//                                 <option value="default" selected="selected">California</option>
//                                 <option value="uk">United Kingdom (UK)</option>
//                                 <option value="us">United States</option>
//                                 <option value="fr">France</option>
//                                 <option value="aus">Australia</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div class="form-group">
//                         <label>Phone *</label>
//                         <input type="text" class="form-control form-control-md" name="phone" required>
//                     </div>
//                 </div>
//             </div>
//             <div class="form-group mb-7">
//                 <label>Email address *</label>
//                 <input type="email" class="form-control form-control-md" name="email" required>
//             </div>
//             <div class="form-group checkbox-toggle pb-2">
//                 <input type="checkbox" class="custom-checkbox" id="shipping-toggle"
//                     name="shipping-toggle">
//                 <label for="shipping-toggle">Ship to a different address?</label>
//             </div>
//             <div class="checkbox-content">
//                 <div class="row gutter-sm">
//                     <div class="col-xs-6">
//                         <div class="form-group">
//                             <label>First name *</label>
//                             <input type="text" class="form-control form-control-md" name="firstname"
//                                 required>
//                         </div>
//                     </div>
//                     <div class="col-xs-6">
//                         <div class="form-group">
//                             <label>Last name *</label>
//                             <input type="text" class="form-control form-control-md" name="lastname"
//                                 required>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="form-group">
//                     <label>Company name (optional)</label>
//                     <input type="text" class="form-control form-control-md" name="company-name">
//                 </div>
//                 <div class="form-group">
//                     <label>Country / Region *</label>
//                     <div class="select-box">
//                         <select name="country" class="form-control form-control-md">
//                             <option value="default" selected="selected">United States
//                                 (US)
//                             </option>
//                             <option value="uk">United Kingdom (UK)</option>
//                             <option value="us">United States</option>
//                             <option value="fr">France</option>
//                             <option value="aus">Australia</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div class="form-group">
//                     <label>Street address *</label>
//                     <input type="text" placeholder="House number and street name"
//                         class="form-control form-control-md mb-2" name="street-address-1" required>
//                     <input type="text" placeholder="Apartment, suite, unit, etc. (optional)"
//                         class="form-control form-control-md" name="street-address-2" required>
//                 </div>
//                 <div class="row gutter-sm">
//                     <div class="col-md-6">
//                         <div class="form-group">
//                             <label>Town / City *</label>
//                             <input type="text" class="form-control form-control-md" name="town" required>
//                         </div>
//                         <div class="form-group">
//                             <label>Postcode *</label>
//                             <input type="text" class="form-control form-control-md" name="postcode" required>
//                         </div>
//                     </div>
//                     <div class="col-md-6">
//                         <div class="form-group">
//                             <label>Country (optional)</label>
//                             <input type="text" class="form-control form-control-md" name="zip" required>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div class="form-group mt-3">
//                 <label for="order-notes">Order notes (optional)</label>
//                 <textarea class="form-control mb-0" id="order-notes" name="order-notes" cols="30"
//                     rows="4"
//                     placeholder="Notes about your order, e.g special notes for delivery"></textarea>
//             </div>
//         </div>
//         <div class="col-lg-5 mb-4 sticky-sidebar-wrapper">
//             <div class="order-summary-wrapper sticky-sidebar">
//                 <h3 class="title text-uppercase ls-10">Your Order</h3>
//                 <div class="order-summary">
//                     <table class="order-table">
//                         <thead>
//                             <tr>
//                                 <th colspan="2">
//                                     <b>Product</b>
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr class="bb-no">
//                                 <td class="product-name">Palm Print Jacket <i
//                                         class="fas fa-times"></i> <span
//                                         class="product-quantity">1</span></td>
//                                 <td class="product-total">$40.00</td>
//                             </tr>
//                             <tr class="bb-no">
//                                 <td class="product-name">Brown Backpack <i class="fas fa-times"></i>
//                                     <span class="product-quantity">1</span></td>
//                                 <td class="product-total">$60.00</td>
//                             </tr>
//                             <tr class="cart-subtotal bb-no">
//                                 <td>
//                                     <b>Subtotal</b>
//                                 </td>
//                                 <td>
//                                     <b>$100.00</b>
//                                 </td>
//                             </tr>
//                         </tbody>
//                         <tfoot>
//                             <tr class="shipping-methods">
//                                 <td colspan="2" class="text-left">
//                                     <h4 class="title title-simple bb-no mb-1 pb-0 pt-3">Shipping
//                                     </h4>
//                                     <ul id="shipping-method" class="mb-4">
//                                         <li>
//                                             <div class="custom-radio">
//                                                 <input type="radio" id="free-shipping"
//                                                     class="custom-control-input" name="shipping">
//                                                 <label for="free-shipping"
//                                                     class="custom-control-label color-dark">Free
//                                                     Shipping</label>
//                                             </div>
//                                         </li>
//                                         <li>
//                                             <div class="custom-radio">
//                                                 <input type="radio" id="local-pickup"
//                                                     class="custom-control-input" name="shipping">
//                                                 <label for="local-pickup"
//                                                     class="custom-control-label color-dark">Local
//                                                     Pickup</label>
//                                             </div>
//                                         </li>
//                                         <li>
//                                             <div class="custom-radio">
//                                                 <input type="radio" id="flat-rate"
//                                                     class="custom-control-input" name="shipping">
//                                                 <label for="flat-rate"
//                                                     class="custom-control-label color-dark">Flat
//                                                     rate: $5.00</label>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                 </td>
//                             </tr>
//                             <tr class="order-total">
//                                 <th>
//                                     <b>Total</b>
//                                 </th>
//                                 <td>
//                                     <b>$100.00</b>
//                                 </td>
//                             </tr>
//                         </tfoot>
//                     </table>

//                     <div class="payment-methods" id="payment_method">
//                         <h4 class="title font-weight-bold ls-25 pb-0 mb-1">Payment Methods</h4>
//                         <div class="accordion payment-accordion">
//                             <div class="card">
//                                 <div class="card-header">
//                                     <a href="#cash-on-delivery" class="collapse">Direct Bank Transfor</a>
//                                 </div>
//                                 <div id="cash-on-delivery" class="card-body expanded">
//                                     <p class="mb-0">
//                                         Make your payment directly into our bank account. 
//                                         Please use your Order ID as the payment reference. 
//                                         Your order will not be shipped until the funds have cleared in our account.
//                                     </p>
//                                 </div>
//                             </div>
//                             <div class="card">
//                                 <div class="card-header">
//                                     <a href="#payment" class="expand">Check Payments</a>
//                                 </div>
//                                 <div id="payment" class="card-body collapsed">
//                                     <p class="mb-0">
//                                         Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
//                                     </p>
//                                 </div>
//                             </div>
//                             <div class="card">
//                                 <div class="card-header">
//                                     <a href="#delivery" class="expand">Cash on delivery</a>
//                                 </div>
//                                 <div id="delivery" class="card-body collapsed">
//                                     <p class="mb-0">
//                                         Pay with cash upon delivery.
//                                     </p>
//                                 </div>
//                             </div>
//                             <div class="card p-relative">
//                                 <div class="card-header">
//                                     <a href="#paypal" class="expand">Paypal</a>
//                                 </div>
//                                 <a href="https://www.paypal.com/us/webapps/mpp/paypal-popup" class="text-primary paypal-que" 
//                                     onclick="javascript:window.open('https://www.paypal.com/us/webapps/mpp/paypal-popup','WIPaypal',
//                                     'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); 
//                                     return false;">What is PayPal?
//                                 </a>
//                                 <div id="paypal" class="card-body collapsed">
//                                     <p class="mb-0">
//                                         Pay via PayPal, you can pay with your credit cart if you
//                                         don't have a PayPal account.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="form-group place-order pt-6">
//                         <button type="submit" class="btn btn-dark btn-block btn-rounded">Place Order</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </form>
//   )
// }

// export default CheckoutBil



import React from 'react';

const CheckoutBil = () => {
    return (
        <form className="form checkout-form" action="#" method="post">
            <div className="row mb-9">
                <div className="col-lg-7 pr-lg-4 mb-4">
                    <h3 className="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">Billing Details</h3>
                    <div className="row gutter-sm">
                        <div className="col-xs-6">
                            <div className="form-group">
                                <label>First name *</label>
                                <input type="text" className="form-control form-control-md" name="firstname" required />
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="form-group">
                                <label>Last name *</label>
                                <input type="text" className="form-control form-control-md" name="lastname" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Company name (optional)</label>
                        <input type="text" className="form-control form-control-md" name="company-name" />
                    </div>
                    <div className="form-group">
                        <label>Country / Region *</label>
                        <div className="select-box">
                            <select name="country" className="form-control form-control-md">
                                <option value="default" selected>United States (US)</option>
                                <option value="uk">United Kingdom (UK)</option>
                                <option value="fr">France</option>
                                <option value="aus">Australia</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Street address *</label>
                        <input type="text" placeholder="House number and street name" className="form-control form-control-md mb-2" name="street-address-1" required />
                        <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="form-control form-control-md" name="street-address-2" required />
                    </div>
                    <div className="row gutter-sm">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Town / City *</label>
                                <input type="text" className="form-control form-control-md" name="town" required />
                            </div>
                            <div className="form-group">
                                <label>ZIP *</label>
                                <input type="text" className="form-control form-control-md" name="zip" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>State *</label>
                                <div className="select-box">
                                    <select name="state" className="form-control form-control-md">
                                        <option value="default" selected>California</option>
                                        <option value="uk">United Kingdom (UK)</option>
                                        <option value="fr">France</option>
                                        <option value="aus">Australia</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Phone *</label>
                                <input type="text" className="form-control form-control-md" name="phone" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-7">
                        <label>Email address *</label>
                        <input type="email" className="form-control form-control-md" name="email" required />
                    </div>
                </div>
                <div className="col-lg-5 mb-4 sticky-sidebar-wrapper">
                    <div className="order-summary-wrapper sticky-sidebar">
                        <h3 className="title text-uppercase ls-10">Your Order</h3>
                        <div className="order-summary">
                            <table className="order-table">
                                <thead>
                                    <tr>
                                        <th colSpan="2"><b>Product</b></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bb-no">
                                        <td className="product-name">Palm Print Jacket <span className="product-quantity">1</span></td>
                                        <td className="product-total">$40.00</td>
                                    </tr>
                                    <tr className="bb-no">
                                        <td className="product-name">Brown Backpack <span className="product-quantity">1</span></td>
                                        <td className="product-total">$60.00</td>
                                    </tr>
                                    <tr className="cart-subtotal bb-no">
                                        <td><b>Subtotal</b></td>
                                        <td><b>$100.00</b></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="order-total">
                                        <th><b>Total</b></th>
                                        <td><b>$100.00</b></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="form-group place-order pt-6">
                            <button type="submit" className="btn btn-dark btn-block btn-rounded">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CheckoutBil;
