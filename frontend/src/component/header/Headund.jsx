
// import React from 'react'
// import { BACKENDURL } from '../../config/config';
// import { Link } from 'react-router-dom';
// import { useState,useEffect } from 'react';
// import axios from 'axios';
// const Headund = () => {

//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         const fetchCategories = async () => {
//           try {
//             const response = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
//             setCategories(response.data);
//           } catch (error) {
//             console.error("Error fetching categories:", error);
//           }
//         };
    
//         fetchCategories();
//       }, []);

//   return (
//     <nav className="main-nav">
//     <ul className="menu active-underline">
//         <li className="active">
//             <a href="demo1.html">Home</a>
//         </li>
//         <li>
//             <a href={`/category/${category._id}`}>Shop</a>

            
//             <ul className="megamenu">
//                 <li>
//                     <h4 className="menu-title">Shop Pages</h4>
//                     <ul>
                       
//                         {categories.map((category) => (
//                   <li key={category._id}>
//                     <a href={`/category/${category._id}`}>Banner With Sidebar</a>
//                   </li>
//                 ))}
//                         <li><a href="shop-boxed-banner.html">Boxed Banner</a></li>
//                         <li><a href="shop-fullwidth-banner.html">Full Width Banner</a></li>
//                         <li><a href="shop-horizontal-filter.html">Horizontal Filter<span
//                                     className="tip tip-hot">Hot</span></a></li>
//                         <li><a href="shop-off-canvas.html">Off Canvas Sidebar<span
//                                     className="tip tip-new">New</span></a></li>
//                         <li><a href="shop-infinite-scroll.html">Infinite Ajax Scroll</a>
//                         </li>
//                         <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
//                         <li><a href="shop-both-sidebar.html">Both Sidebar</a></li>
//                     </ul>
//                 </li>
//                 <li>
//                     <h4 className="menu-title">Shop Layouts</h4>
//                     <ul>
//                         <li><a href="shop-grid-3cols.html">3 Columns Mode</a></li>
//                         <li><a href="shop-grid-4cols.html">4 Columns Mode</a></li>
//                         <li><a href="shop-grid-5cols.html">5 Columns Mode</a></li>
//                         <li><a href="shop-grid-6cols.html">6 Columns Mode</a></li>
//                         <li><a href="shop-grid-7cols.html">7 Columns Mode</a></li>
//                         <li><a href="shop-grid-8cols.html">8 Columns Mode</a></li>
//                         <li><a href="shop-list.html">List Mode</a></li>
//                         <li><a href="shop-list-sidebar.html">List Mode With Sidebar</a></li>
//                     </ul>
//                 </li>
//                 <li>
//                     <h4 className="menu-title">Product Pages</h4>
//                     <ul>
//                         <li><a href="product-variable.html">Variable Product</a></li>
//                         <li><a href="product-featured.html">Featured &amp; Sale</a></li>
//                         <li><a href="product-accordion.html">Data In Accordion</a></li>
//                         <li><a href="product-section.html">Data In Sections</a></li>
//                         <li><a href="product-swatch.html">Image Swatch</a></li>
//                         <li><a href="product-extended.html">Extended Info</a>
//                         </li>
//                         <li><a href="product-without-sidebar.html">Without Sidebar</a></li>
//                         <li><a href="product-video.html">360<sup>o</sup> &amp; Video<span
//                                     className="tip tip-new">New</span></a></li>
//                     </ul>
//                 </li>
//                 <li>
//                     <h4 className="menu-title">Product Layouts</h4>
//                     <ul>
//                         <li><a href="product-default.html">Default<span
//                                     className="tip tip-hot">Hot</span></a></li>
//                         <li><a href="product-vertical.html">Vertical Thumbs</a></li>
//                         <li><a href="product-grid.html">Grid Images</a></li>
//                         <li><a href="product-masonry.html">Masonry</a></li>
//                         <li><a href="product-gallery.html">Gallery</a></li>
//                         <li><a href="product-sticky-info.html">Sticky Info</a></li>
//                         <li><a href="product-sticky-thumb.html">Sticky Thumbs</a></li>
//                         <li><a href="product-sticky-both.html">Sticky Both</a></li>
//                     </ul>
//                 </li>
//             </ul>
          
//         </li>
//         <li>
//             <a href="vendor-dokan-store.html">Vendor</a>
//             <ul>
//                 <li>
//                     <a href="vendor-dokan-store-list.html">Store Listing</a>
//                     <ul>
//                         <li><a href="vendor-store-list">Store listing 1</a></li>
                        
//                     </ul>
//                 </li>
                
//             </ul>
//         </li>
//         <li>
//             <a href="blog">Blog</a>
//             {/* <ul>
//                 <li><a href="blog">classNameic</a></li>
//                 <li><a href="blog-listing.html">Listing</a></li>
//                 <li>
//                     <a href="blog-grid-3cols.html">Grid</a>
//                     <ul>
//                         <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
//                         <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
//                         <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
//                         <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
//                     </ul>
//                 </li>
//                 <li>
//                     <a href="blog-masonry-3cols.html">Masonry</a>
//                     <ul>
//                         <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
//                         <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
//                         <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
//                         <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
//                     </ul>
//                 </li>
//                 <li>
//                     <a href="blog-mask-grid.html">Mask</a>
//                     <ul>
//                         <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
//                         <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
//                     </ul>
//                 </li>
//                 <li>
//                     <a href="post-single.html">Single Post</a>
//                 </li>
//             </ul> */}
//         </li>
//         <li>
//             <a href="about-us.html">Pages</a>
//             <ul>

//                 <li><a href="about-us">About Us</a></li>
//                 <li><a href="become-a-vendor">Become A Vendor</a></li>
//                 <li><a href="contact-us">Contact Us</a></li>
//                 {/* <li><a href="faq.html">FAQs</a></li> */}
//                 {/* <li><a href="error-404.html">Error 404</a></li> */}
//                 {/* <li><a href="coming-soon.html">Coming Soon</a></li> */}
//                 <li><a href="wishlist">Wishlist</a></li>
//                 <li><a href="cart">Cart</a></li>
//                 <li><a href="checkout">Checkout</a></li>
//                 <li><a href="my-account">My Account</a></li>
//                 {/* <li><a href="compare.html">Compare</a></li> */}
//             </ul>
//         </li>
//         {/* <li>
//             <a href="elements.html">Elements</a>
//             <ul>
//                 <li><a href="element-accordions.html">Accordions</a></li>
//                 <li><a href="element-alerts.html">Alert &amp; Notification</a></li>
//                 <li><a href="element-blog-posts.html">Blog Posts</a></li>
//                 <li><a href="element-buttons.html">Buttons</a></li>
//                 <li><a href="element-cta.html">Call to Action</a></li>
//                 <li><a href="element-icons.html">Icons</a></li>
//                 <li><a href="element-icon-boxes.html">Icon Boxes</a></li>
//                 <li><a href="element-instagrams.html">Instagrams</a></li>
//                 <li><a href="element-categories.html">Product Category</a></li>
//                 <li><a href="element-products.html">Products</a></li>
//                 <li><a href="element-tabs.html">Tabs</a></li>
//                 <li><a href="element-testimonials.html">Testimonials</a></li>
//                 <li><a href="element-titles.html">Titles</a></li>
//                 <li><a href="element-typography.html">Typography</a></li>

//                 <li><a href="element-vendors.html">Vendors</a></li>
//             </ul>
//         </li> */}
//     </ul>
// </nav>
//   )
// }

// export default Headund



import React, { useEffect, useState } from 'react';
import { BACKENDURL } from '../../config/config';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Headund = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <nav className="main-nav">
      <ul className="menu active-underline">
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/vendor-store-list">Shop</Link>
          <ul className="megamenu">
            <li>
              <h4 className="menu-title">Shop Pages</h4>
              <ul>
                {categories.map((category) => (
                  <li key={category._id}>
                    <Link to={`/category/${category._id}`}>{category.name}</Link>
                  </li>
                ))}
                {/* <li><a href="shop-boxed-banner.html">Boxed Banner</a></li>
                <li><a href="shop-fullwidth-banner.html">Full Width Banner</a></li>
                <li><a href="shop-horizontal-filter.html">Horizontal Filter<span className="tip tip-hot">Hot</span></a></li>
                <li><a href="shop-off-canvas.html">Off Canvas Sidebar<span className="tip tip-new">New</span></a></li>
                <li><a href="shop-infinite-scroll.html">Infinite Ajax Scroll</a></li>
                <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                <li><a href="shop-both-sidebar.html">Both Sidebar</a></li> */}
              </ul>
            </li>
            {/* <li>
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
                <li><a href="product-featured.html">Featured & Sale</a></li>
                <li><a href="product-accordion.html">Data In Accordion</a></li>
                <li><a href="product-section.html">Data In Sections</a></li>
                <li><a href="product-swatch.html">Image Swatch</a></li>
                <li><a href="product-extended.html">Extended Info</a></li>
                <li><a href="product-without-sidebar.html">Without Sidebar</a></li>
                <li><a href="product-video.html">360° & Video<span className="tip tip-new">New</span></a></li>
              </ul>
            </li>
            <li>
              <h4 className="menu-title">Product Layouts</h4>
              <ul>
                <li><a href="product-default.html">Default<span className="tip tip-hot">Hot</span></a></li>
                <li><a href="product-vertical.html">Vertical Thumbs</a></li>
                <li><a href="product-grid.html">Grid Images</a></li>
                <li><a href="product-masonry.html">Masonry</a></li>
                <li><a href="product-gallery.html">Gallery</a></li>
                <li><a href="product-sticky-info.html">Sticky Info</a></li>
                <li><a href="product-sticky-thumb.html">Sticky Thumbs</a></li>
                <li><a href="product-sticky-both.html">Sticky Both</a></li>
              </ul>
            </li> */}
          </ul>
        </li>
        <li>
          <a href="/vendor-store-list">Vendor</a>
          <ul>
            <li>
              <a href="/vendor-store-list">Store Listing</a>
              <ul>
                <li><Link to="/vendor-store-list">Store listing 1</Link></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <a href="/about-us">Pages</a>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/become-a-vendor">Become A Vendor</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
            <li><Link to="/my-account">My Account</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Headund;



