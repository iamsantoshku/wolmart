// import React, { useState } from "react";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
// import {
//   FiHome,
//   FiTag,
//   FiUsers,
//   FiList,
//   FiGlobe,
//   FiMessageCircle,
//   FiPlusCircle,
//   FiSettings,
// } from "react-icons/fi"; // Correct icons for sections
// // Ensure this is correctly imported
// // import { FiPlusCircle } from "react-icons/fi";
// import Dashboard from "./Dashboard";



// const Adminhome = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const location = useLocation(); // To get the current path

//   const [isOpen, setIsOpen] = useState(false); 

//   const handleDarkModeToggle = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle("dark", !darkMode);
//   };

//   const isAdminPage = location.pathname === "/admin-panel"; // Check if it's the admin home page

//   return (
//     <div
//       className={`flex flex-col md:flex-row h-screen ${
//         darkMode ? "bg-gray-900" : "bg-gray-100"
//       }`}
//     >
//       {/* Sidebar */}
//       <div
//         className={`w-full md:w-64 ${
//           darkMode ? "bg-gray-800" : "bg-gray-200"
//         } shadow-md md:h-full md:flex-shrink-0`}
//       >
        
//         <nav className="mt-0 space-y-1">
//           <NavLink
//             to="/admin-panel/dashboard"
//             className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
//           >
//             <FiHome className="text-blue-500" />
//             Dashboard
//           </NavLink>
          
//           <NavLink
//             to="/admin-panel/clients"
//             className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
//           >
//             <FiUsers className="text-yellow-500" />
//             Clients
//           </NavLink>
                


//       <div className="relative">
     
      
//           <NavLink
//             to="/admin-panel/usersupport"
//             className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
//           >
//             <FiSettings className="text-gray-500" />
//             User support
//           </NavLink>

          

//           {/* rolechange */}
//           <div className="p-3">
//             <button
//               className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300"
//               onClick={handleDarkModeToggle}
//             >
//               <span>Dark Mode</span>
//               <input
//                 type="checkbox"
//                 className="form-checkbox"
//                 checked={darkMode}
//                 onChange={handleDarkModeToggle}
//               />
//             </button>
//           </div>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div
//         className={`flex-1 p-6 overflow-y-auto ${
//           darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
//         }`}
//       >
//         {isAdminPage ? <Dashboard/> : <Outlet />}
//       </div>
//     </div>
//   );
// };

// export default Adminhome;



// import React, { useState } from "react";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
// import {
//   FiHome,
//   FiUsers,
//   FiSettings,
// } from "react-icons/fi"; // Only importing used icons
// import Dashboard from "./Dashboard";

// const Adminhome = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const location = useLocation(); // Get the current path

//   const handleDarkModeToggle = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle("dark", !darkMode);
//   };

//   const isAdminPage = location.pathname === "/admin-panel"; // Check if it's the admin home page

//   return (
//     <div
//       className={`flex flex-col md:flex-row h-screen transition-all ${
//         darkMode ? "bg-gray-900" : "bg-gray-100"
//       }`}
//     >
//       {/* Sidebar */}
//       <aside
//         className={`w-full md:w-64 ${
//           darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
//         } shadow-md md:h-full md:flex-shrink-0`}
//       >
//         <nav className="mt-4 space-y-1">
//           <NavLink
//             to="/admin-panel/dashboard"
//             className="flex items-center p-3 hover:bg-gray-300 dark:hover:bg-gray-700 gap-2 text-sm md:text-base transition"
//           >
//             <FiHome className="text-blue-500" />
//             Dashboard
//           </NavLink>

//           <NavLink
//             to="/admin-panel/clients"
//             className="flex items-center p-3 hover:bg-gray-300 dark:hover:bg-gray-700 gap-2 text-sm md:text-base transition"
//           >
//             <FiUsers className="text-yellow-500" />
//             Clients
//           </NavLink>

//           <NavLink
//             to="/admin-panel/usersupport"
//             className="flex items-center p-3 hover:bg-gray-300 dark:hover:bg-gray-700 gap-2 text-sm md:text-base transition"
//           >
//             <FiSettings className="text-gray-500" />
//             User Support
//           </NavLink>

//           {/* Dark Mode Toggle */}
//           <div className="p-3">
//             <button
//               className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300"
//               onClick={handleDarkModeToggle}
//             >
//               <span>Dark Mode</span>
//               <input
//                 type="checkbox"
//                 className="form-checkbox"
//                 checked={darkMode}
//                 onChange={handleDarkModeToggle}
//               />
//             </button>
//           </div>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main
//         className={`flex-1 p-6 overflow-y-auto transition-all ${
//           darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
//         }`}
//       >
//         {isAdminPage ? <Dashboard /> : <Outlet />}
//       </main>
//     </div>
//   );
// };

// export default Adminhome;


// import React, { useState } from "react";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
// import {
//   FiHome,
//   FiUsers,
//   FiSettings,
//   FiBox,
//   FiShoppingCart,
//   FiDollarSign,
//   FiBarChart2,
//   FiPackage,
//   FiTruck,
//   FiLogOut,
//   FiMenu,
// } from "react-icons/fi";
// import Dashboard from "./Dashboard";

// const Adminhome = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const location = useLocation();

//   const handleDarkModeToggle = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle("dark", !darkMode);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const isAdminPage = location.pathname === "/admin-panel";

//   return (
//     <div className={`flex h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
//       {/* Sidebar */}
//       <aside
//         className={`$ {
//           sidebarOpen ? "w-92" : "w-20"
//         } md:block fixed md:relative h-full transition-all duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"}`}
//       >
//         <div className="p-4 flex justify-between items-center">
//           <h2 className={`text-xl font-bold ${!sidebarOpen ? "hidden" : "block"}`}>Admin Panel</h2>
//           <FiMenu className="cursor-pointer text-2xl" onClick={toggleSidebar} />
//         </div>
//         <nav className="mt-4 space-y-1">
//           <NavLink to="/admin-panel/dashboard" className="nav-link">
//             <FiHome /> {!sidebarOpen ? "" : "Dashboard"}
//           </NavLink>
//           <NavLink to="/admin-panel/products" className="nav-link">
//             <FiBox /> {!sidebarOpen ? "" : "Products"}
//           </NavLink>
//           <NavLink to="/admin-panel/vendors" className="nav-link">
//             <FiUsers /> {!sidebarOpen ? "" : "Vendors"}
//           </NavLink>
//           <NavLink to="/admin-panel/orders" className="nav-link">
//             <FiShoppingCart /> {!sidebarOpen ? "" : "Orders"}
//           </NavLink>
//           <NavLink to="/admin-panel/transactions" className="nav-link">
//             <FiDollarSign /> {!sidebarOpen ? "" : "Transactions"}
//           </NavLink>
//           <NavLink to="/admin-panel/reports" className="nav-link">
//             <FiBarChart2 /> {!sidebarOpen ? "" : "Reports"}
//           </NavLink>
//           <NavLink to="/admin-panel/shipping" className="nav-link">
//             <FiTruck /> {!sidebarOpen ? "" : "Shipping"}
//           </NavLink>
//           <NavLink to="/admin-panel/settings" className="nav-link">
//             <FiSettings /> {!sidebarOpen ? "" : "Settings"}
//           </NavLink>
//           <div className="p-3">
//             <button className="flex items-center justify-between w-full" onClick={handleDarkModeToggle}>
//               <span>Dark Mode</span>
//               <input type="checkbox" className="form-checkbox" checked={darkMode} onChange={handleDarkModeToggle} />
//             </button>
//           </div>
//           <NavLink to="/logout" className="nav-link text-red-500">
//             <FiLogOut /> {!sidebarOpen ? "" : "Logout"}
//           </NavLink>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className={`flex-1 p-6 transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
//         {isAdminPage ? <Dashboard /> : <Outlet />}
//       </main>
//     </div>
//   );
// };

// export default Adminhome;



// import React, { useState } from "react";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
// import {
//   FiHome,
//   FiUsers,
//   FiSettings,
//   FiBox,
//   FiShoppingCart,
//   FiDollarSign,
//   FiBarChart2,
//   FiTruck,
//   FiLogOut,
//   FiMenu,
//   FiMoon,
//   FiSun,
// } from "react-icons/fi";
// import Dashboard from "./Dashboard";

// const Adminhome = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const location = useLocation();

//   const handleDarkModeToggle = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle("dark", !darkMode);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const isAdminPage = location.pathname === "/admin-panel";

//   return (
//     <div className={`flex min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
//       {/* Sidebar */}
//       <aside
//         className={`fixed md:relative h-full transition-all duration-300 ease-in-out ${
//           sidebarOpen ? "w-" : "w-20"
//         } ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} flex flex-col`}
//       >
//         {/* Sidebar Header */}
//         <div className="p-4 flex items-center justify-between">
//           <h2 className={`text-xl font-bold transition-all ${sidebarOpen ? "block" : "hidden"}`}>Admin Panel</h2>
//           <FiMenu className="cursor-pointer text-2xl md:hidden" onClick={toggleSidebar} />
//         </div>

//         {/* Navigation Links */}
//         <nav className="mt-4 flex flex-col space-y-2 flex-grow">
//           <NavLink to="/admin-panel/dashboard" className="nav-link">
//             <FiHome className="icon" /> {sidebarOpen && "Dashboard"}
//           </NavLink>
//           <NavLink to="/admin-panel/products" className="nav-link">
//             <FiBox className="icon" /> {sidebarOpen && "Products"}
//           </NavLink>
//           <NavLink to="/admin-panel/vendors" className="nav-link">
//             <FiUsers className="icon" /> {sidebarOpen && "Vendors"}
//           </NavLink>
//           <NavLink to="/admin-panel/orders" className="nav-link">
//             <FiShoppingCart className="icon" /> {sidebarOpen && "Orders"}
//           </NavLink>
//           <NavLink to="/admin-panel/transactions" className="nav-link">
//             <FiDollarSign className="icon" /> {sidebarOpen && "Transactions"}
//           </NavLink>
//           <NavLink to="/admin-panel/reports" className="nav-link">
//             <FiBarChart2 className="icon" /> {sidebarOpen && "Reports"}
//           </NavLink>
//           <NavLink to="/admin-panel/shipping" className="nav-link">
//             <FiTruck className="icon" /> {sidebarOpen && "Shipping"}
//           </NavLink>
//           <NavLink to="/admin-panel/settings" className="nav-link">
//             <FiSettings className="icon" /> {sidebarOpen && "Settings"}
//           </NavLink>
//         </nav>

//         {/* Dark Mode Toggle */}
//         <div className="p-4 border-t border-gray-700 flex items-center justify-between">
//           <button onClick={handleDarkModeToggle} className="flex items-center gap-2">
//             {darkMode ? <FiSun className="icon" /> : <FiMoon className="icon" />} 
//             {sidebarOpen && (darkMode ? "Light Mode" : "Dark Mode")}
//           </button>
//         </div>

//         {/* Logout */}
//         <div className="p-4 border-t border-gray-700">
//           <NavLink to="/logout" className="nav-link text-red-500">
//             <FiLogOut className="icon" /> {sidebarOpen && "Logout"}
//           </NavLink>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? "md:ml-72 ml-20" : "ml-20"}`}>
//         {isAdminPage ? <Dashboard /> : <Outlet />}
//         {/* Footer */}
//         <footer className="mt-10 p-4 text-center border-t bg-gray-200 dark:bg-gray-800 dark:text-white">
//           © {new Date().getFullYear()} Admin Panel. All rights reserved.
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default Adminhome;



// import React, { useState } from "react";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
// import { FiHome, FiUsers, FiSettings, FiLogOut, FiMenu } from "react-icons/fi";
// import Dashboard from "./Dashboard";

// const Adminhome = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const location = useLocation();

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100 text-gray-800">
//       {/* Sidebar */}
//       <aside className={`fixed md:relative h-full transition-all duration-300 ${sidebarOpen ? "w-64" : "w-20"} bg-gray-800 text-white flex flex-col`}>
//         <div className="p-4 flex items-center justify-between">
//           <h2 className={`text-xl font-bold ${sidebarOpen ? "block" : "hidden"}`}>Admin Panel</h2>
//           <FiMenu className="cursor-pointer text-2xl md:hidden" onClick={toggleSidebar} />
//         </div>

//         {/* Navigation Links */}
//         <nav className="mt-4 flex flex-col space-y-2 flex-grow">
//           <NavLink to="/admin-panel" className="nav-link"><FiHome className="icon" /> {sidebarOpen && "Dashboard"}</NavLink>
//           <NavLink to="vendors" className="nav-link"><FiUsers className="icon" /> {sidebarOpen && "Vendors"}</NavLink>
//           <NavLink to="/admin-panel/settings" className="nav-link"><FiSettings className="icon" /> {sidebarOpen && "Settings"}</NavLink>
//         </nav>

//         {/* Logout */}
//         <div className="p-4 border-t border-gray-700">
//           <NavLink to="/logout" className="nav-link text-red-500"><FiLogOut className="icon" /> {sidebarOpen && "Logout"}</NavLink>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-20"}`}>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default Adminhome;



import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiBox,
  FiShoppingCart,
  FiDollarSign,
  FiBarChart2,
  FiTruck,
  FiLogOut,
  FiMenu,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import Dashboard from "./Dashboard";

const Adminhome = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isAdminPage = location.pathname === "/admin-panel";

  return (
    <div className={`flex min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
      {/* Sidebar */}
      <aside
        className={`fixed md:relative h-full transition-all duration-300 ease-in-out ${
          sidebarOpen ? "w-64" : "w-20"
        } ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between">
          <h2 className={`text-xl font-bold transition-all ${sidebarOpen ? "block" : "hidden"}`}>Admin Panel</h2>
          <FiMenu className="cursor-pointer text-2xl md:hidden" onClick={toggleSidebar} />
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 flex flex-col space-y-2 flex-grow">
          <NavLink to="/admin-panel/dashboard" className="nav-link">
            <FiHome className="icon" /> {sidebarOpen && "Dashboard"}
          </NavLink>
          <NavLink to="/admin-panel/products" className="nav-link">
            <FiBox className="icon" /> {sidebarOpen && "Products"}
          </NavLink>
          <NavLink to="/admin-panel/vendors" className="nav-link">
            <FiUsers className="icon" /> {sidebarOpen && "Vendors"}
          </NavLink>
          <NavLink to="/admin-panel/orders" className="nav-link">
            <FiShoppingCart className="icon" /> {sidebarOpen && "Orders"}
          </NavLink>
          <NavLink to="/admin-panel/transactions" className="nav-link">
            <FiDollarSign className="icon" /> {sidebarOpen && "Transactions"}
          </NavLink>
          <NavLink to="/admin-panel/reports" className="nav-link">
            <FiBarChart2 className="icon" /> {sidebarOpen && "Reports"}
          </NavLink>
          <NavLink to="/admin-panel/shipping" className="nav-link">
            <FiTruck className="icon" /> {sidebarOpen && "Shipping"}
          </NavLink>
          <NavLink to="/admin-panel/settings" className="nav-link">
            <FiSettings className="icon" /> {sidebarOpen && "Settings"}
          </NavLink>
        </nav>

        {/* Dark Mode Toggle */}
        <div className="p-4 border-t border-gray-700 flex items-center justify-between">
          <button onClick={handleDarkModeToggle} className="flex items-center gap-2">
            {darkMode ? <FiSun className="icon" /> : <FiMoon className="icon" />} 
            {sidebarOpen && (darkMode ? "Light Mode" : "Dark Mode")}
          </button>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-700">
          <NavLink to="/logout" className="nav-link text-red-500">
            <FiLogOut className="icon" /> {sidebarOpen && "Logout"}
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "ml-20"}`}>
        {isAdminPage ? <Dashboard /> : <Outlet />}
        {/* Footer */}
        <footer className="mt-10 p-4 text-center border-t bg-gray-200 dark:bg-gray-800 dark:text-white">
          © {new Date().getFullYear()} Admin Panel. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default Adminhome;
