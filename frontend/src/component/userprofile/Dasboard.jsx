



import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import { clearUser } from "../../store/UserSlice";
import Context from "../../context/index";
import { useContext } from "react";
import { FaUser, FaBox, FaDownload, FaMapMarkerAlt, FaHeart, FaCogs, FaStore, FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context);
    const user = useSelector((state) => state.user.user);
    const { userId } = useParams(); // Get userId from URL

    const handleLogout = () => {
        dispatch(clearUser()); // Clear user details from Redux
        fetchUserDetails(); // Reset user state in context
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="w-68 bg-gray-900 text-white min-h-screen p-5 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-center">Dashboard</h2>
            <ul className="space-y-4">
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FaUser />
                    <a href="#account-dashboard" className="text-3xl">Dashboard</a>
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FaBox />
                    <a href="orders" className="text-3xl">Orders</a>
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FaBox />
                    <a href="order-detail" className="text-3xl">Orders details</a>
                    {/* <Link to={`order-detail/${userId}`}>View Order Details</Link> */}
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FaDownload />
                    <a href="#account-downloads" className="text-3xl">Downloads</a>
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FaMapMarkerAlt />
                    <a href="#account-addresses" className="text-3xl">Addresses</a>
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FaCogs />
                    <a href="#account-details" className="text-3xl">Account Details</a>
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FaHeart />
                    <a href="wishlist.html" className="text-3xl">Wishlist</a>
                </li>
                {user?.role === "admin" && (
                    <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                        <FaCogs />
                        <a href="admin-panel" className="text-3xl">Admin Panel</a>
                    </li>
                )}
                {user?.role === "vendor" && (
                    <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                        <FaStore />
                        <a href="vendor-panel" className="text-3xl">Vendor Panel</a>
                    </li>
                )}
                <li className="flex items-center gap-3 p-3 hover:bg-red-600 rounded-lg cursor-pointer text-red-400 hover:text-white" onClick={handleLogout}>
                    <FaSignOutAlt />
                    <span className="text-lg">Logout</span>
                </li>
            </ul>
        </div>
    );
};

export default Dashboard;



// import React, { useState, useContext } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import { clearUser } from "../../store/UserSlice";
// import Context from "../../context/index";
// import {
//   FaUser,
//   FaBox,
//   FaDownload,
//   FaMapMarkerAlt,
//   FaHeart,
//   FaCogs,
//   FaStore,
//   FaSignOutAlt,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { fetchUserDetails } = useContext(Context);
//   const user = useSelector((state) => state.user.user);
//   const { userId } = useParams(); // Get userId from URL

//   const handleLogout = () => {
//     dispatch(clearUser()); // Clear user details from Redux
//     fetchUserDetails(); // Reset user state in context
//     navigate("/login"); // Redirect to login page
//   };

//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const menuItems = (
//     <>
//       <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
//         <FaUser />
//         <Link to="#account-dashboard" className="text-lg md:text-xl">
//           Dashboard
//         </Link>
//       </li>
//       <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
//         <FaBox />
//         <Link to="/orders" className="text-lg md:text-xl">
//           Orders
//         </Link>
//       </li>
//       <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
//         <FaBox />
//         <Link to={`/order-detail/${userId}`} className="text-lg md:text-xl">
//           Order Details
//         </Link>
//       </li>
//       <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
//         <FaDownload />
//         <Link to="#account-downloads" className="text-lg md:text-xl">
//           Downloads
//         </Link>
//       </li>
//       <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
//         <FaMapMarkerAlt />
//         <Link to="#account-addresses" className="text-lg md:text-xl">
//           Addresses
//         </Link>
//       </li>
//       <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
//         <FaCogs />
//         <Link to="#account-details" className="text-lg md:text-xl">
//           Account Details
//         </Link>
//       </li>
//       <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
//         <FaHeart />
//         <Link to="/wishlist" className="text-lg md:text-xl">
//           Wishlist
//         </Link>
//       </li>
//       {user?.role === "admin" && (
//         <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
//           <FaCogs />
//           <Link to="/admin-panel" className="text-lg md:text-xl">
//             Admin Panel
//           </Link>
//         </li>
//       )}
//       {user?.role === "vendor" && (
//         <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
//           <FaStore />
//           <Link to="/vendor-panel" className="text-lg md:text-xl">
//             Vendor Panel
//           </Link>
//         </li>
//       )}
//       <li
//         className="flex items-center gap-3 p-3 hover:bg-red-600 rounded-lg cursor-pointer text-red-400 hover:text-white"
//         onClick={handleLogout}
//       >
//         <FaSignOutAlt />
//         <span className="text-lg">Logout</span>
//       </li>
//     </>
//   );

//   return (
//     <div className="md:w-68 w-full bg-gray-900 text-white min-h-screen p-5 rounded-xl shadow-lg">
//       {/* Header for Mobile */}
//       <div className="flex justify-between items-center md:hidden mb-5">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button
//           className="text-white text-2xl focus:outline-none"
//           onClick={toggleMenu}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Sidebar content */}
//       <div
//         className={`${
//           menuOpen ? "block" : "hidden"
//         } md:block transition-all duration-300`}
//       >
//         <ul className="space-y-4">{menuItems}</ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
