

// import React from 'react';
// import './Headund.css'; // Import the new CSS file

// const Headund = () => {
//   return (
//     <nav className="nav-container">
//       <ul className="nav-menu">
//         <li className="nav-item active">
//           <a href="demo1.html" className="nav-link">Home</a>
//         </li>
//         <li className="nav-item">
//           <a href="shop-banner-sidebar.html" className="nav-link">
//             Shop <span className="dropdown-icon">▼</span>
//           </a>
//           <ul className="dropdown-menu">
//             <li>
//               <h4 className="dropdown-title">Shop Pages</h4>
//               <ul>
//                 <li><a href="shop-banner-sidebar.html" className="dropdown-link">Banner With Sidebar</a></li>
//                 <li><a href="shop-boxed-banner.html" className="dropdown-link">Boxed Banner</a></li>
//                 <li><a href="shop-fullwidth-banner.html" className="dropdown-link">Full Width Banner</a></li>
//                 <li><a href="shop-horizontal-filter.html" className="dropdown-link">Horizontal Filter <span className="badge hot">Hot</span></a></li>
//                 <li><a href="shop-off-canvas.html" className="dropdown-link">Off Canvas Sidebar <span className="badge new">New</span></a></li>
//                 <li><a href="shop-infinite-scroll.html" className="dropdown-link">Infinite Ajax Scroll</a></li>
//               </ul>
//             </li>
//           </ul>
//         </li>


//         <li className="nav-item">
//           <a href="vendor-dokan-store.html" className="nav-link">
//             Vendor <span className="dropdown-icon">▼</span>
//           </a>
//           <ul className="dropdown-menu">
//             <li><a href="vendor-dokan-store-list.html" className="dropdown-link">Store Listing</a></li>
//             <li><a href="vendor-dokan-store.html" className="dropdown-link">Vendor Store</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a href="about-us.html" className="nav-link">Pages <span className="dropdown-icon">▼</span></a>
//           <ul className="dropdown-menu">
//             <li><a href="about-us.html" className="dropdown-link">About Us</a></li>
//             <li><a href="contact-us.html" className="dropdown-link">Contact Us</a></li>
//             <li><a href="faq.html" className="dropdown-link">FAQs</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a href="blog.html" className="nav-link">
//             Blog <span className="dropdown-icon">▼</span>
//           </a>
//           <ul className="dropdown-menu">
//             <li><a href="blog.html" className="dropdown-link">Classic</a></li>
//             <li><a href="blog-listing.html" className="dropdown-link">Listing</a></li>
//           </ul>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Headund;



// import React, { useState } from 'react';
// import './Headund.css';

// const Headund = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleDropdown = (index) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//   };

//   return (
//     <nav className="nav-container">
//       <ul className="nav-menu">
//         <li className="nav-item active">
//           <a href="demo1.html" className="nav-link">Home</a>
//         </li>
        
//         <li className="nav-item" onClick={() => toggleDropdown(1)}>
//           <a href="#" className="nav-link">
//             Shop <span className="dropdown-icon">▼</span>
//           </a>
//           <ul className={`dropdown-menu ${openDropdown === 1 ? 'show' : ''}`}>
//             <li>
//               <h4 className="dropdown-title">Shop Pages</h4>
//               <ul>
//                 <li><a href="shop-banner-sidebar.html" className="dropdown-link">Banner With Sidebar</a></li>
//                 <li><a href="shop-boxed-banner.html" className="dropdown-link">Boxed Banner</a></li>
//                 <li><a href="shop-fullwidth-banner.html" className="dropdown-link">Full Width Banner</a></li>
//               </ul>
//             </li>
//           </ul>
//         </li>

//         <li className="nav-item" onClick={() => toggleDropdown(2)}>
//           <a href="#" className="nav-link">
//             Vendor <span className="dropdown-icon">▼</span>
//           </a>
//           <ul className={`dropdown-menu ${openDropdown === 2 ? 'show' : ''}`}>
//             <li><a href="vendor-list-dokan" className="dropdown-link">Store Listing</a></li>
//             <li><a href="vendor-dokan-store.html" className="dropdown-link">Vendor Store</a></li>
//           </ul>
//         </li>

//         <li className="nav-item" onClick={() => toggleDropdown(3)}>
//           <a href="#" className="nav-link">
//             Pages <span className="dropdown-icon">▼</span>
//           </a>
//           <ul className={`dropdown-menu ${openDropdown === 2 ? 'show' : ''}`}>
//             <li><a href="vendor-dokan-store-list.html" className="dropdown-link">About Us</a></li>
//             <li><a href="vendor-dokan-store.html" className="dropdown-link">Contact uS</a></li>
//           </ul>
//         </li>

//         <li className="nav-item" onClick={() => toggleDropdown(4)}>
//           <a href="#" className="nav-link">
//             Blog <span className="dropdown-icon">▼</span>
//           </a>
//           <ul className={`dropdown-menu ${openDropdown === 3 ? 'show' : ''}`}>
//             <li><a href="blog.html" className="dropdown-link">Classic</a></li>
//             <li><a href="blog-listing.html" className="dropdown-link">Listing</a></li>
//           </ul>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Headund;



import React from 'react'

const Headund = () => {
  return (
    <nav className="main-nav">
    <ul className="menu active-underline">
        <li className="active">
            <a href="demo1.html">Home</a>
        </li>
        <li>
            <a href="shop-banner-sidebar.html">Shop</a>

            
            <ul className="megamenu">
                <li>
                    <h4 className="menu-title">Shop Pages</h4>
                    <ul>
                        <li><a href="shop-banner-sidebar.html">Banner With Sidebar</a></li>
                        <li><a href="shop-boxed-banner.html">Boxed Banner</a></li>
                        <li><a href="shop-fullwidth-banner.html">Full Width Banner</a></li>
                        <li><a href="shop-horizontal-filter.html">Horizontal Filter<span
                                    className="tip tip-hot">Hot</span></a></li>
                        <li><a href="shop-off-canvas.html">Off Canvas Sidebar<span
                                    className="tip tip-new">New</span></a></li>
                        <li><a href="shop-infinite-scroll.html">Infinite Ajax Scroll</a>
                        </li>
                        <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                        <li><a href="shop-both-sidebar.html">Both Sidebar</a></li>
                    </ul>
                </li>
                <li>
                    <h4 className="menu-title">Shop Layouts</h4>
                    <ul>
                        <li><a href="shop-grid-3cols.html">3 Columns Mode</a></li>
                        <li><a href="shop-grid-4cols.html">4 Columns Mode</a></li>
                        <li><a href="shop-grid-5cols.html">5 Columns Mode</a></li>
                        <li><a href="shop-grid-6cols.html">6 Columns Mode</a></li>
                        <li><a href="shop-grid-7cols.html">7 Columns Mode</a></li>
                        <li><a href="shop-grid-8cols.html">8 Columns Mode</a></li>
                        <li><a href="shop-list.html">List Mode</a></li>
                        <li><a href="shop-list-sidebar.html">List Mode With Sidebar</a></li>
                    </ul>
                </li>
                <li>
                    <h4 className="menu-title">Product Pages</h4>
                    <ul>
                        <li><a href="product-variable.html">Variable Product</a></li>
                        <li><a href="product-featured.html">Featured &amp; Sale</a></li>
                        <li><a href="product-accordion.html">Data In Accordion</a></li>
                        <li><a href="product-section.html">Data In Sections</a></li>
                        <li><a href="product-swatch.html">Image Swatch</a></li>
                        <li><a href="product-extended.html">Extended Info</a>
                        </li>
                        <li><a href="product-without-sidebar.html">Without Sidebar</a></li>
                        <li><a href="product-video.html">360<sup>o</sup> &amp; Video<span
                                    className="tip tip-new">New</span></a></li>
                    </ul>
                </li>
                <li>
                    <h4 className="menu-title">Product Layouts</h4>
                    <ul>
                        <li><a href="product-default.html">Default<span
                                    className="tip tip-hot">Hot</span></a></li>
                        <li><a href="product-vertical.html">Vertical Thumbs</a></li>
                        <li><a href="product-grid.html">Grid Images</a></li>
                        <li><a href="product-masonry.html">Masonry</a></li>
                        <li><a href="product-gallery.html">Gallery</a></li>
                        <li><a href="product-sticky-info.html">Sticky Info</a></li>
                        <li><a href="product-sticky-thumb.html">Sticky Thumbs</a></li>
                        <li><a href="product-sticky-both.html">Sticky Both</a></li>
                    </ul>
                </li>
            </ul>
          
        </li>
        <li>
            <a href="vendor-dokan-store.html">Vendor</a>
            <ul>
                <li>
                    <a href="vendor-dokan-store-list.html">Store Listing</a>
                    <ul>
                        <li><a href="vendor-store-list">Store listing 1</a></li>
                        <li><a href="vendor-wcfm-store-list.html">Store listing 2</a></li>
                        {/* <li><a href="vendor-wcmp-store-list.html">Store listing 3</a></li>
                        <li><a href="vendor-wc-store-list.html">Store listing 4</a></li> */}
                    </ul>
                </li>
                <li>
                    <a href="vendor-dokan-store.html">Vendor Store</a>
                    <ul>
                        <li><a href="vendor-dokan-store.html">Vendor Store 1</a></li>
                        <li><a href="vendor-wcfm-store-product-grid.html">Vendor Store 2</a>
                        </li>
                        <li><a href="vendor-wcmp-store-product-grid.html">Vendor Store 3</a>
                        </li>
                        <li><a href="vendor-wc-store-product-grid.html">Vendor Store 4</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <a href="blog">Blog</a>
            <ul>
                <li><a href="blog">classNameic</a></li>
                <li><a href="blog-listing.html">Listing</a></li>
                <li>
                    <a href="blog-grid-3cols.html">Grid</a>
                    <ul>
                        <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                        <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                        <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                        <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                    </ul>
                </li>
                <li>
                    <a href="blog-masonry-3cols.html">Masonry</a>
                    <ul>
                        <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                        <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                        <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                        <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                    </ul>
                </li>
                <li>
                    <a href="blog-mask-grid.html">Mask</a>
                    <ul>
                        <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                        <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                    </ul>
                </li>
                <li>
                    <a href="post-single.html">Single Post</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="about-us.html">Pages</a>
            <ul>

                <li><a href="about-us">About Us</a></li>
                <li><a href="become-a-vendor">Become A Vendor</a></li>
                <li><a href="contact-us">Contact Us</a></li>
                <li><a href="faq.html">FAQs</a></li>
                <li><a href="error-404.html">Error 404</a></li>
                <li><a href="coming-soon.html">Coming Soon</a></li>
                <li><a href="wishlist.html">Wishlist</a></li>
                <li><a href="cart.html">Cart</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="my-account.html">My Account</a></li>
                <li><a href="compare.html">Compare</a></li>
            </ul>
        </li>
        <li>
            <a href="elements.html">Elements</a>
            <ul>
                <li><a href="element-accordions.html">Accordions</a></li>
                <li><a href="element-alerts.html">Alert &amp; Notification</a></li>
                <li><a href="element-blog-posts.html">Blog Posts</a></li>
                <li><a href="element-buttons.html">Buttons</a></li>
                <li><a href="element-cta.html">Call to Action</a></li>
                <li><a href="element-icons.html">Icons</a></li>
                <li><a href="element-icon-boxes.html">Icon Boxes</a></li>
                <li><a href="element-instagrams.html">Instagrams</a></li>
                <li><a href="element-categories.html">Product Category</a></li>
                <li><a href="element-products.html">Products</a></li>
                <li><a href="element-tabs.html">Tabs</a></li>
                <li><a href="element-testimonials.html">Testimonials</a></li>
                <li><a href="element-titles.html">Titles</a></li>
                <li><a href="element-typography.html">Typography</a></li>

                <li><a href="element-vendors.html">Vendors</a></li>
            </ul>
        </li>
    </ul>
</nav>
  )
}

export default Headund



// import React from "react";

// const Headund = ({ mobileMenuOpen, setMobileMenuOpen }) => {
//   return (
//     <nav
//       className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
//         mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//       } transition-transform duration-300 lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:shadow-none lg:translate-x-0 z-50`}
//     >
//       {/* Close Button for Mobile */}
//       <div className="flex justify-between items-center p-4 border-b lg:hidden">
//         <h2 className="text-lg font-semibold">Menu</h2>
//         <button
//           className="text-gray-600 text-2xl"
//           onClick={() => setMobileMenuOpen(false)}
//         >
//           &times; {/* Close Icon */}
//         </button>
//       </div>

//       <ul className="menu active-underline space-y-4 p-4 lg:flex lg:space-x-6 lg:p-0">
//         <li className="lg:inline-block">
//           <a href="demo1.html" className="text-gray-700 hover:text-blue-500">
//             Home
//           </a>
//         </li>
//         <li className="lg:inline-block relative group">
//           <a href="shop-banner-sidebar.html" className="text-gray-700 hover:text-blue-500">
//             Shop
//           </a>

//           {/* Dropdown for Desktop */}
//           <ul className="hidden absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 space-y-2 group-hover:block">
//             <li>
//               <a href="shop-banner-sidebar.html" className="text-gray-600 hover:text-blue-500">
//                 Banner With Sidebar
//               </a>
//             </li>
//             <li>
//               <a href="shop-boxed-banner.html" className="text-gray-600 hover:text-blue-500">
//                 Boxed Banner
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li className="lg:inline-block">
//           <a href="vendor-dokan-store.html" className="text-gray-700 hover:text-blue-500">
//             Vendor
//           </a>
//         </li>
//         <li className="lg:inline-block">
//           <a href="blog.html" className="text-gray-700 hover:text-blue-500">
//             Blog
//           </a>
//         </li>
//         <li className="lg:inline-block">
//           <a href="about-us.html" className="text-gray-700 hover:text-blue-500">
//             About Us
//           </a>
//         </li>
//         <li className="lg:inline-block">
//           <a href="contact-us.html" className="text-gray-700 hover:text-blue-500">
//             Contact Us
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Headund;
