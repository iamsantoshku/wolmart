// import React from 'react';

// const MergedHeader = () => {
//   return (
//     <div>
//       {/* Headerend content */}
//       <li className='ml-3'>
//         <a href="shop-fullwidth-banner.html">
//           <i className="w-icon-tshirt2"></i>Fashion
//         </a>
//         <ul className="megamenu">
//           <li>
//             <h4 className="menu-title">Women</h4>
//             <hr className="divider" />
//           </li>
//           <li>
//             <h4 className="menu-title">Men</h4>
//             <hr className="divider" />
//           </li>
//           <li>
//             <div className="banner-fixed menu-banner menu-banner2">
//               <figure>
//                 <img src="assets/images/menu/banner-2.jpg" alt="Menu Banner" width="235" height="347" />
//               </figure>
//               <div className="banner-content">
//                 <div className="banner-price-info mb-1 ls-normal">
//                   Get up to <strong className="text-primary text-uppercase">20% Off</strong>
//                 </div>
//                 <h3 className="banner-title ls-normal">Hot Sales</h3>
//                 <a href="shop-banner-sidebar.html" className="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right">
//                   Shop Now<i className="w-icon-long-arrow-right"></i>
//                 </a>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </li>

//       <div className='px-5 py-1'>
//         <hr />
//       </div>

//       <li className='ml-3'>
//         <a href="shop-fullwidth-banner.html">
//           <i className="w-icon-home"></i>Home & Garden
//         </a>
//         <ul className="megamenu">
//           <li>
//             <h4 className="menu-title">Bedroom</h4>
//             <hr className="divider" />
//             <h4 className="menu-title mt-1">Living Room</h4>
//             <hr className="divider" />
//           </li>
//           <li>
//             <h4 className="menu-title">Office</h4>
//             <hr className="divider" />
//           </li>
//           <li>
//             <div className="menu-banner banner-fixed menu-banner3">
//               <figure>
//                 <img src="assets/images/menu/banner-3.jpg" alt="Menu Banner" width="235" height="461" />
//               </figure>
//               <div className="banner-content">
//                 <h4 className="banner-subtitle font-weight-normal text-white mb-1">Restroom</h4>
//                 <h3 className="banner-title font-weight-bolder text-white ls-normal">Furniture Sale</h3>
//                 <div className="banner-price-info text-white font-weight-normal ls-25">
//                   Up to <span className="text-secondary text-uppercase font-weight-bold">25% Off</span>
//                 </div>
//                 <a href="shop-banner-sidebar.html" className="btn btn-white btn-link btn-sm btn-slide-right btn-icon-right">
//                   Shop Now<i className="w-icon-long-arrow-right"></i>
//                 </a>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </li>

//       {/* Headed1 content */}
//       <div className='px-5 py-1'>
//         <hr />
//       </div>
//       <li className='ml-3'>
//         <a href="shop-fullwidth-banner.html">
//           <i className="w-icon-electronics"></i>Electronics
//         </a>
//       </li>

//       {/* Headfur content */}
//       <div className='px-5 py-1'>
//         <hr />
//       </div>
//       <li className='ml-3'>
//         <a href="shop-fullwidth-banner.html">
//           <i className="w-icon-furniture"></i>Furniture
//         </a>
//       </li>

//       <div className='px-5 py-1'>
//         <hr />
//       </div>
//       <li className='ml-3'>
//         <a href="shop-fullwidth-banner.html">
//           <i className="w-icon-heartbeat"></i>Healthy & Beauty
//         </a>
//       </li>

//       <div className='px-5 py-1'>
//         <hr />
//       </div>
//       <li className='ml-3'>
//         <a href="shop-fullwidth-banner.html">
//           <i className="w-icon-gift"></i>Gift Ideas
//         </a>
//       </li>

//       <div className='px-5 py-1'>
//         <hr />
//       </div>
//       <li className='ml-3'>
//         <a href="shop-fullwidth-banner.html">
//           <i className="w-icon-gamepad"></i>Toy & Games
//         </a>
//       </li>

//       <div className='px-5 py-1'>
//         <hr />
//       </div>
//       <li className='ml-3'>
//         <a href="shop-fullwidth-banner.html">
//           <i className="w-icon-ice-cream"></i>Cooking
//         </a>
//       </li>

//       <div className='px-5 py-1'>
//         <hr />
//       </div>
//       <li className='ml-3'>
//         <a href="shop-fullwidth-banner.html">
//           <i className="w-icon-ios"></i>Smart Phones
//         </a>
//       </li>

//       <div className='px-5 py-1'>
//         <hr />
//       </div>
//       <li className='ml-3'>
//         <a href="shop-fullwidth-banner.html">
//           <i className="w-icon-camera"></i>Cameras & Photo
//         </a>
//       </li>

//       <div className='px-5 py-1'>
//         <hr />
//       </div>
//       <li className='ml-3'>
//         <a href="shop-fullwidth-banner.html">
//           <i className="w-icon-ruby"></i>Accessories
//         </a>
//       </li>

//       <div className='px-5 py-1'>
//         <hr />
//       </div>
//       <li className='ml-3'>
//         <a href="shop-banner-sidebar.html" className="font-weight-bold text-primary text-uppercase ls-25">
//           View All Categories<i className="w-icon-angle-right"></i>
//         </a>
//       </li>
//     </div>
//   );
// };

// export default MergedHeader;



// 



import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config";

const MergedHeader = () => {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
        setCategories(res.data || []);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const visibleCategories = showAll ? categories : categories.slice(0, 10);

  return (
    <div>
      {/* Static Headerend Section */}
      <li className='ml-3'>
        <a href="shop-fullwidth-banner.html">
          <i className="w-icon-tshirt2"></i>Fashion
        </a>
        <ul className="megamenu">
          <li>
            <h4 className="menu-title">Women</h4>
            <hr className="divider" />
          </li>
          <li>
            <h4 className="menu-title">Men</h4>
            <hr className="divider" />
          </li>
        </ul>
      </li>

      {/* Dynamic Categories Section */}
      {visibleCategories.map((category, index) => (
        <React.Fragment key={category._id}>
          <div className='px-5 py-1'><hr /></div>
          <li className='ml-3'>
            <a href={`/category/${category._id}`}>
              <i className={`w-icon-${getIconClass(index)}`}></i>{category.name}
            </a>
          </li>
        </React.Fragment>
      ))}

      {/* View All Button */}
      {!showAll && categories.length > 11 && (
        <>
          <div className='px-5 py-1'><hr /></div>
          <li className='ml-3'>
            <button
              onClick={() => setShowAll(true)}
              className="font-weight-bold text-primary text-uppercase ls-25 bg-transparent border-0 p-0"
              style={{ cursor: "pointer" }}
            >
              View All Categories <i className="w-icon-angle-right"></i>
            </button>
          </li>
        </>
      )}
    </div>
  );
};

// Optional icon mapping logic
const getIconClass = (index) => {
  const icons = [
    "electronics", "furniture", "heartbeat", "gift", "gamepad",
    "ice-cream", "ios", "camera", "ruby", "shirt", "tshirt2", "home","tshirt2",
  ];
  return icons[index % icons.length];
};

export default MergedHeader;
