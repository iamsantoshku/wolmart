


// import React from "react";

// const Mobmenu = ({ isOpen, onClose }) => {
//     return (
//         <div className={`fixed inset-0 z-50 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
//             {/* Overlay */}
//             <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

//             {/* Menu Container - Now opens from the left */}
//             <div className={`fixed top-0 left-0 w-80 bg-black h-full shadow-lg transform transition-transform ease-in-out duration-300 
//         p-4 overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

//                 {/* Close Button */}
//                 <button className="absolute top-4 right-4 text-gray-600 text-2xl" onClick={onClose}>
//                     ✖
//                 </button>

//                 {/* Menu Items */}
//                 {/* <ul className="mt-10 space-y-4 text-lg">
//           <li><a href="/" className="block">🏠 Home</a></li>
//           <li><a href="/shop" className="block">🛍️ Shop</a></li>
//           <li><a href="/blog" className="block">📰 Blog</a></li>
//           <li><a href="/about-us" className="block">ℹ️ About Us</a></li>
//         </ul> */}



//                 {/* dfkj */}
//                 <div class="mobile-menu-wrapper">
//                     <div class="mobile-menu-overlay">

//                         <div class="mobile-menu-container scrollable">
//                             <form action="#" method="get" class="input-wrapper">
//                                 <input type="text" class="form-control" name="search" autocomplete="off" placeholder="Search"
//                                     required />
//                                 <button class="btn btn-search" type="submit">
//                                     <i class="w-icon-search"></i>
//                                 </button>
//                             </form>
//                             <div class="tab">
//                 <ul class="nav nav-tabs" role="tablist">
//                     <li class="nav-item">
//                         <a href="#main-menu" class="nav-link active">Main Menu</a>
//                     </li>
//                     <li class="nav-item">
//                         <a href="#categories" class="nav-link">Categories</a>
//                     </li>
//                 </ul>
//             </div>
//         <div class="tab-content">
//                 <div class="tab-pane active" id="main-menu">
//                     <ul class="mobile-menu">
//                         <li><a href="demo1.html">Home</a></li>
//                         <li>
//                             <a href="shop-banner-sidebar.html">Shop</a>
//                             <ul>
//                                 <li>
//                                     <a href="#">Shop Pages</a>
//                                     <ul>
//                                         <li><a href="shop-banner-sidebar.html">Banner With Sidebar</a></li>
//                                         <li><a href="shop-boxed-banner.html">Boxed Banner</a></li>
                                        
//                                     </ul>
//                                 </li>
//                                 <li>
//                                     <a href="#">Shop Layouts</a>
//                                     <ul>
//                                         <li><a href="shop-grid-3cols.html">3 Columns Mode</a></li>
//                                         <li><a href="shop-grid-4cols.html">4 Columns Mode</a></li>
                                        
//                                     </ul>
//                                 </li>
//                                 <li>
//                                     <a href="#">Product Pages</a>
//                                     <ul>
//                                         <li><a href="product-variable.html">Variable Product</a></li>
//                                         <li><a href="product-featured.html">Featured &amp; Sale</a></li>
                                        
//                                     </ul>
//                                 </li>
//                                 <li>
//                                     <a href="#">Product Layouts</a>
//                                     <ul>
//                                         <li><a href="product-default.html">Default<span
//                                                     class="tip tip-hot">Hot</span></a></li>
//                                         <li><a href="product-vertical.html">Vertical Thumbs</a></li>
                                        
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li>
//                             <a href="vendor-dokan-store.html">Vendor</a>
//                             <ul>
//                                 <li>
//                                     <a href="#">Store Listing</a>
//                                     <ul>
//                                         <li><a href="vendor-dokan-store-list.html">Store listing 1</a></li>
//                                         <li><a href="vendor-wcfm-store-list.html">Store listing 2</a></li>
                                        
//                                     </ul>
//                                 </li>
//                                 <li>
//                                     <a href="#">Vendor Store</a>
//                                     <ul>
//                                         <li><a href="vendor-dokan-store.html">Vendor Store 1</a></li>
                                        
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li>
//                             <a href="blog.html">Blog</a>
//                             <ul>
//                                 <li><a href="blog.html">Classic</a></li>
//                                 <li><a href="blog-listing.html">Listing</a></li>
//                                 <li>
//                                     <a href="https://www.portotheme.com/html/wolmart/blog-grid.html">Grid</a>
//                                     <ul>
//                                         <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                                        
//                                     </ul>
//                                 </li>
//                                 <li>
//                                     <a href="#">Masonry</a>
//                                     <ul>
//                                         <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
//                                         </ul>
                                        
//                                 </li>
//                                 <li>
//                                     <a href="#">Mask</a>
//                                     <ul>
//                                         <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                                       
//                                     </ul>
//                                 </li>
//                                 <li>
//                                     <a href="post-single.html">Single Post</a>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li>
//                             <a href="about-us.html">Pages</a>
//                             <ul>

//                                 <li><a href="about-us.html">About Us</a></li>
//                                 <li><a href="become-a-vendor.html">Become A Vendor</a></li>
                                
//                             </ul>
//                         </li>
//                         <li>
//                             <a href="elements.html">Elements</a>
//                             <ul>
//                                 <li><a href="element-products.html">Products</a></li>
//                                 <li><a href="element-titles.html">Titles</a></li>
                               
//                             </ul>
//                         </li>
//                     </ul>
//                 </div>
//                 <div class="tab-pane" id="categories">
//                     <ul class="mobile-menu">
//                         <li>
//                             <a href="shop-fullwidth-banner.html">
//                                 <i class="w-icon-tshirt2"></i>Fashion
//                             </a>
//                             <ul>
//                                 <li>
//                                     <a href="#">Women</a>
//                                     <ul>
//                                         <li><a href="shop-fullwidth-banner.html">New Arrivals</a>
//                                         </li>
                                        
//                                         <li><a href="shop-fullwidth-banner.html">Sale</a></li>
//                                     </ul>
//                                 </li>
//                                 <li>
//                                     <a href="#">Men</a>
//                                     <ul>
//                                         <li><a href="shop-fullwidth-banner.html">New Arrivals</a>
//                                         </li>
                                        
//                                         <li><a href="shop-fullwidth-banner.html">Jewlery &
//                                                 Watches</a></li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li>
//                             <a href="shop-fullwidth-banner.html">
//                                 <i class="w-icon-home"></i>Home & Garden
//                             </a>
//                             <ul>
//                                 <li>
//                                     <a href="#">Bedroom</a>
//                                     <ul>
//                                         <li><a href="shop-fullwidth-banner.html">Beds, Frames &
//                                                 Bases</a></li>
                                       
//                                     </ul>
//                                 </li>
//                                 <li>
//                                     <a href="#">Living Room</a>
//                                     <ul>
//                                         <li><a href="shop-fullwidth-banner.html">Coffee Tables</a>
//                                         </li>
                                       
//                                     </ul>
//                                 </li>
//                                 <li>
//                                     <a href="#">Office</a>
//                                     <ul>
//                                         <li><a href="shop-fullwidth-banner.html">Office Chairs</a>
//                                         </li>
                                        
//                                     </ul>
//                                 </li>
//                                 <li>
//                                     <a href="#">Kitchen & Dining</a>
//                                     <ul>
//                                         <li><a href="shop-fullwidth-banner.html">Dining Sets</a>
//                                         </li>
                                       
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </li>
                       
                                             
//                     </ul>
//                 </div>
//             </div>

//                         </div>



//                     </div>
//                 </div>



//                 {/* dfk */}
//             </div>
//         </div>
//     );
// };

// export default Mobmenu;



// import React, { useState } from "react";

// const Mobmenu = ({ isOpen, onClose }) => {
//   const [openMenu, setOpenMenu] = useState(null); // Track opened menu

//   // Toggle submenu function
//   const toggleMenu = (menu) => {
//     setOpenMenu(openMenu === menu ? null : menu);
//   };

//   return (
//     <div
//       className={`fixed inset-0 z-50 transition-opacity ${
//         isOpen ? "opacity-100 visible" : "opacity-0 invisible"
//       }`}
//     >
//       {/* Overlay (Click to Close) */}
//       <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

//       {/* Sidebar Menu - Opens from Left */}
//       <div
//         className={`fixed top-0 left-0 w-96 bg-black text-white h-full shadow-lg transform transition-transform ease-in-out duration-300 p-6 overflow-y-auto ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Close Button */}
//         <button className="absolute top-4 right-4 text-gray-300 text-2xl" onClick={onClose}>
//           ✖
//         </button>

//         {/* Search Bar */}
//         <div className="mt-8 flex items-center border border-gray-600 rounded-md p-2">
//           <input
//             type="text"
//             className="bg-transparent outline-none w-full text-white placeholder-gray-400"
//             placeholder="Search..."
//           />
//           <button className="text-gray-400 hover:text-white">🔍</button>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="mt-6">
//           <ul className="flex border-b border-gray-700">
//             <li className="flex-1 text-center py-2 border-b-2 border-white cursor-pointer">
//               <a href="#main-menu" className="block">Main Menu</a>
//             </li>
//             <li className="flex-1 text-center py-2 cursor-pointer">
//               <a href="#categories" className="block">Categories</a>
//             </li>
//           </ul>
//         </div>

//         {/* Main Menu Section */}
//         <div className="mt-6">
//           <ul className="space-y-3">
//             <li><a href="/" className="block px-4 py-2 hover:bg-gray-700">🏠 Home</a></li>
//             <li>
//               <button
//                 className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
//                 onClick={() => toggleMenu("shop")}
//               >
//                 🛍️ Shop
//                 <span>{openMenu === "shop" ? "▲" : "▼"}</span>
//               </button>
//               {openMenu === "shop" && (
//                 <ul className="pl-4 space-y-2">
//                   <li><a href="shop-banner-sidebar.html" className="block hover:text-yellow-300">📌 Banner With Sidebar</a></li>
//                   <li><a href="shop-boxed-banner.html" className="block hover:text-yellow-300">📦 Boxed Banner</a></li>
//                 </ul>
//               )}
//             </li>

//             <li>
//               <button
//                 className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
//                 onClick={() => toggleMenu("shop")}
//               >
//                 🛍️ vendor
//                 <span>{openMenu === "shop" ? "▲" : "▼"}</span>
//               </button>
//               {openMenu === "shop" && (
//                 <ul className="pl-4 space-y-2">
                   
//                         <li><a href="vendor-store-list">Store listing 1</a></li>
                        
                    
                 
//                 </ul>
//               )}
//             </li>
//             <li><a href="/blog" className="block px-4 py-2 hover:bg-gray-700">📰 Blog</a></li>
//             <li><a href="/about-us" className="block px-4 py-2 hover:bg-gray-700">ℹ️ About Us</a></li>
//           </ul>
//         </div>

//         {/* Categories Section */}
//         <div className="mt-6">
//           <ul className="space-y-3">
//             <li>
//               <button
//                 className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
//                 onClick={() => toggleMenu("fashion")}
//               >
//                 <span>👗 Fashion</span>
//                 <span>{openMenu === "fashion" ? "▲" : "▼"}</span>
//               </button>
//               {openMenu === "fashion" && (
//                 <ul className="pl-4 space-y-2">
//                   <li><a href="shop-fullwidth-banner.html" className="block hover:text-yellow-300">👗 Women</a></li>
//                   <li><a href="shop-fullwidth-banner.html" className="block hover:text-yellow-300">🕺 Men</a></li>
//                 </ul>
//               )}
//             </li>
//             <li>
//               <button
//                 className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
//                 onClick={() => toggleMenu("home")}
//               >
//                 <span>🏡 Home & Garden</span>
//                 <span>{openMenu === "home" ? "▲" : "▼"}</span>
//               </button>
//               {openMenu === "home" && (
//                 <ul className="pl-4 space-y-2">
//                   <li><a href="shop-fullwidth-banner.html" className="block hover:text-yellow-300">🛏️ Bedroom</a></li>
//                   <li><a href="shop-fullwidth-banner.html" className="block hover:text-yellow-300">🛋️ Living Room</a></li>
//                 </ul>
//               )}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mobmenu;



import React, { useState } from "react";

const Mobmenu = ({ isOpen, onClose }) => {
  const [openMenu, setOpenMenu] = useState(null); // Track opened submenu
  const [showCategories, setShowCategories] = useState(false); // Toggle categories section

  // Toggle submenu function
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Overlay (Click to Close) */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* Sidebar Menu - Opens from Left */}
      <div
        className={`fixed top-0 left-0 w-96 bg-black text-white h-full shadow-lg transform transition-transform ease-in-out duration-800 p-6 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-300 text-2xl" onClick={onClose}>
          ✖
        </button>

        {/* Search Bar */}
        <div className="mt-8 flex items-center border border-gray-600 rounded-md p-2">
          <input
            type="text"
            className="bg-transparent outline-none w-full text-white placeholder-gray-400"
            placeholder="Search..."
          />
          <button className="text-gray-400 hover:text-white">🔍</button>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-6">
          <ul className="flex border-b border-gray-700">
            <li
              className={`flex-1 text-center py-2 cursor-pointer ${
                !showCategories ? "border-b-2 border-white" : "text-gray-400"
              }`}
              onClick={() => setShowCategories(false)}
            >
              Main Menu
            </li>
            <li
              className={`flex-1 text-center py-2 cursor-pointer ${
                showCategories ? "border-b-2 border-white" : "text-gray-400"
              }`}
              onClick={() => setShowCategories(true)}
            >
              Categories
            </li>
          </ul>
        </div>

        {/* Conditional Sections */}
        {!showCategories ? (
          // Main Menu Section
          <div className="mt-6">
            <ul className="space-y-3">
              <li><a href="/" className="block px-4 py-2 hover:bg-gray-700">🏠 Home</a></li>
              
              {/* Shop Dropdown */}
              <li>
                <button
                  className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
                  onClick={() => toggleMenu("shop")}
                >
                  🛍️ Shop
                  <span>{openMenu === "shop" ? "▲" : "▼"}</span>
                </button>
                {openMenu === "shop" && (
                  <ul className="pl-4 space-y-2">
                    <li><a href="shop-banner-sidebar.html" className="block hover:text-yellow-300">📌 Banner With Sidebar</a></li>
                    <li><a href="shop-boxed-banner.html" className="block hover:text-yellow-300">📦 Boxed Banner</a></li>
                  </ul>
                )}
              </li>

              {/* Vendor Dropdown */}
              <li>
                <button
                  className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
                  onClick={() => toggleMenu("vendor")}
                >
                  🛒 Vendor
                  <span>{openMenu === "vendor" ? "▲" : "▼"}</span>
                </button>
                {openMenu === "vendor" && (
                  <ul className="pl-4 space-y-2">
                    <li><a href="vendor-store-list" className="block hover:text-yellow-300">🏪 Store Listing 1</a></li>
                  </ul>
                )}
              </li>

              <li><a href="/blog" className="block px-4 py-2 hover:bg-gray-700">📰 Blog</a></li>
              <li><a href="/about-us" className="block px-4 py-2 hover:bg-gray-700">ℹ️ About Us</a></li>
            </ul>
          </div>
        ) : (
          // Categories Section
          <div className="mt-6">
            <ul className="space-y-3">
              {/* Fashion Dropdown */}
              <li>
                <button
                  className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
                  onClick={() => toggleMenu("fashion")}
                >
                  <span>👗 Fashion</span>
                  <span>{openMenu === "fashion" ? "▲" : "▼"}</span>
                </button>
                {openMenu === "fashion" && (
                  <ul className="pl-4 space-y-2">
                    <li><a href="shop-fullwidth-banner.html" className="block hover:text-yellow-300">👗 Women</a></li>
                    <li><a href="shop-fullwidth-banner.html" className="block hover:text-yellow-300">🕺 Men</a></li>
                  </ul>
                )}
              </li>

              {/* Home & Garden Dropdown */}
              <li>
                <button
                  className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
                  onClick={() => toggleMenu("home")}
                >
                  <span>🏡 Home & Garden</span>
                  <span>{openMenu === "home" ? "▲" : "▼"}</span>
                </button>
                {openMenu === "home" && (
                  <ul className="pl-4 space-y-2">
                    <li><a href="shop-fullwidth-banner.html" className="block hover:text-yellow-300">🛏️ Bedroom</a></li>
                    <li><a href="shop-fullwidth-banner.html" className="block hover:text-yellow-300">🛋️ Living Room</a></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobmenu;
