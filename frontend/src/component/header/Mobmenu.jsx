


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";

// const Mobmenu = ({ isOpen, onClose }) => {
//   const [openMenu, setOpenMenu] = useState(null);
//   const [showCategories, setShowCategories] = useState(false);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
//         setCategories(res.data || []);
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//       }
//     };
//     fetchCategories();
//   }, []);

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
//         className={`fixed top-0 left-0 w-96 bg-black text-white h-full shadow-lg transform transition-transform ease-in-out duration-800 p-6 overflow-y-auto ${
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
//             <li
//               className={`flex-1 text-center py-2 cursor-pointer ${
//                 !showCategories ? "border-b-2 border-white" : "text-gray-400"
//               }`}
//               onClick={() => setShowCategories(false)}
//             >
//               Main Menu
//             </li>
//             <li
//               className={`flex-1 text-center py-2 cursor-pointer ${
//                 showCategories ? "border-b-2 border-white" : "text-gray-400"
//               }`}
//               onClick={() => setShowCategories(true)}
//             >
//               Categories
//             </li>
//           </ul>
//         </div>

//         {/* Conditional Sections */}
//         {!showCategories ? (
//           // Main Menu Section
//           <div className="mt-6">
//             <ul className="space-y-3">
//               <li><a href="/" className="block px-4 py-2 hover:bg-gray-700">🏠 Home</a></li>

//               {/* Shop Dropdown */}
//               <li>
//                 <button
//                   className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
//                   onClick={() => toggleMenu("shop")}
//                 >
//                   🛍️ Shop
//                   <span>{openMenu === "shop" ? "▲" : "▼"}</span>
//                 </button>
//                 {openMenu === "shop" && (
//                   <ul className="pl-4 space-y-2">
//                     <li><a href="/vendor-store-list" className="block hover:text-yellow-300">📌 Banner With Sidebar</a></li>
//                     {/* <li><a href="shop-boxed-banner.html" className="block hover:text-yellow-300">📦 Boxed Banner</a></li> */}
//                   </ul>
//                 )}
//               </li>

//               {/* Vendor Dropdown */}
//               <li>
//                 <button
//                   className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
//                   onClick={() => toggleMenu("vendor")}
//                 >
//                   🛒 Vendor
//                   <span>{openMenu === "vendor" ? "▲" : "▼"}</span>
//                 </button>
//                 {openMenu === "vendor" && (
//                   <ul className="pl-4 space-y-2">
//                     <li><a href="vendor-store-list" className="block hover:text-yellow-300">🏪 Store Listing 1</a></li>
//                   </ul>
//                 )}
//               </li>

//               <li><a href="/blog" className="block px-4 py-2 hover:bg-gray-700">📰 Blog</a></li>
//               <li><a href="/about-us" className="block px-4 py-2 hover:bg-gray-700">ℹ️ About Us</a></li>
//             </ul>
//           </div>
//         ) : (
//           // Categories Section (Dynamic)
//           // <div className="mt-6">
//           //   <ul className="space-y-3">
//           //     {categories.map((category, index) => (
//           //       <li key={category._id}>
//           //         <button
//           //           className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
//           //           onClick={() => toggleMenu(category._id)}
//           //         >
//           //           <span>

//           //             <a href={`/category/${category._id}`}><i className={`w-icon-${getIconClass(index)} mr-2`}></i></a>
//           //             {category.name}
//           //           </span>
//           //           {/* <span>{openMenu === category._id ? "▲" : "▼"}</span> */}
//           //         </button>
                  
//           //       </li>
//           //     ))}
//           //   </ul>
//           // </div>

//           <div className="mt-6">
//   <ul className="space-y-3">
//     {categories.map((category, index) => (
//       <li key={category._id}>
//         <button
//           className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
//           onClick={() => toggleMenu(category._id)}
//         >
//           <span className="flex items-center">
//             <i className={`w-icon-${getIconClass(index)} mr-2`}></i>
//             {category.name}
//           </span>
//         </button>

//         {openMenu === category._id && (
//           <ul className="pl-4 space-y-2">
//             {/* You can show nested items here or navigate */}
//             <li>
//               <a
//                 href={`/category/${category._id}`}
//                 className="block hover:text-yellow-300"
//               >
//                 Go to {category.name}
//               </a>
//             </li>
//           </ul>
//         )}
//       </li>
//     ))}
//   </ul>
// </div>

//         )}
//       </div>
//     </div>
//   );
// };

// // Icon mapping function
// const getIconClass = (index) => {
//   const icons = [
//     "electronics", "furniture", "heartbeat", "gift", "gamepad",
//     "ice-cream", "ios", "camera", "ruby", "shirt", "tshirt2", "home"
//   ];
//   return icons[index % icons.length];
// };

// export default Mobmenu;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BACKENDURL } from "../../config/config";

const Mobmenu = ({ isOpen, onClose }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

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

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      toast.error("Please enter a search term.");
      return;
    }

    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    onClose(); // Close the menu after search
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      <div
        className={`fixed top-0 left-0 w-96 bg-black text-white h-full shadow-lg transform transition-transform ease-in-out duration-800 p-6 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4 text-gray-300 text-2xl" onClick={onClose}>
          ✖
        </button>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mt-8 flex items-center border border-gray-600 rounded-md p-2"
        >
          <input
            type="text"
            className="bg-transparent outline-none w-full text-white placeholder-gray-400"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="text-gray-400 hover:text-white">
            🔍
          </button>
        </form>

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
                    <li><a href="/vendor-store-list" className="block hover:text-yellow-300">📌 Banner With Sidebar</a></li>
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
                    <li><a href="/vendor-store-list" className="block hover:text-yellow-300">🏪 Store Listing 1</a></li>
                  </ul>
                )}
              </li>

              <li><a href="/blog" className="block px-4 py-2 hover:bg-gray-700">📰 Blog</a></li>
              <li><a href="/about-us" className="block px-4 py-2 hover:bg-gray-700">ℹ️ About Us</a></li>
            </ul>
          </div>
        ) : (
          // Categories Section (Dynamic)
          <div className="mt-6">
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={category._id}>
                  <button
                    className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
                    onClick={() => toggleMenu(category._id)}
                  >
                    <span className="flex items-center">
                      <i className={`w-icon-${getIconClass(index)} mr-2`}></i>
                      {category.name}
                    </span>
                  </button>

                  {openMenu === category._id && (
                    <ul className="pl-4 space-y-2">
                      <li>
                        <a
                          href={`/category/${category._id}`}
                          className="block hover:text-yellow-300"
                        >
                          Go to {category.name}
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Icon mapping function
const getIconClass = (index) => {
  const icons = [
    "electronics", "furniture", "heartbeat", "gift", "gamepad",
    "ice-cream", "ios", "camera", "ruby", "shirt", "tshirt2", "home"
  ];
  return icons[index % icons.length];
};

export default Mobmenu;
