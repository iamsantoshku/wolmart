// import { useState } from "react";
// import { FaStore, FaTags, FaBox, FaList } from "react-icons/fa";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("addStore");

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-1/5 bg-gray-800 text-white p-5">
//         <h2 className="text-xl font-bold mb-6">Vendor Dashboard</h2>
//         <ul>
//           <li className="mb-4 cursor-pointer" onClick="/add store" >
//             <FaStore className="inline mr-2" /> Add Store
//           </li>
//           <li className="mb-4 cursor-pointer"  onClick="/add store" >
//             <FaTags className="inline mr-2"   /> Add Category
//           </li>
//           <li className="mb-4 cursor-pointer">
//             <FaBox className="inline mr-2" /> Add Product
//           </li>
//           <li className="mb-4 cursor-pointer" >
//             <FaList className="inline mr-2" /> View Products
//           </li>
//         </ul>
//       </div>

//       <div className="w-4/5 p-6">
//         {activeTab === "addStore" && <AddStore />}
//         {activeTab === "addCategory" && <AddCategory />}
//         {activeTab === "addProduct" && <AddProduct />}
//         {activeTab === "viewProducts" && <ViewProducts />}
//       </div>
//     </div>
//   );
// };

// const AddStore = () => (
//   <div>
//     <h2 className="text-2xl font-bold mb-4">Add Store</h2>
//     <input className="border p-2 w-full mb-4" type="text" placeholder="Store Name" />
//     <button className="bg-blue-500 text-white px-4 py-2">Save Store</button>
//   </div>
// );

// const AddCategory = () => (
//   <div>
//     <h2 className="text-2xl font-bold mb-4">Add Category</h2>
//     <input className="border p-2 w-full mb-4" type="text" placeholder="Category Name" />
//     <button className="bg-blue-500 text-white px-4 py-2">Save Category</button>
//   </div>
// );

// const AddProduct = () => (
//   <div>
//     <h2 className="text-2xl font-bold mb-4">Add Product</h2>
//     <input className="border p-2 w-full mb-2" type="text" placeholder="Product Name" />
//     <input className="border p-2 w-full mb-2" type="number" placeholder="Price" />
//     <button className="bg-blue-500 text-white px-4 py-2">Save Product</button>
//   </div>
// );

// const ViewProducts = () => (
//   <div>
//     <h2 className="text-2xl font-bold mb-4">All Products</h2>
//     <ul>
//       <li className="border p-2 mb-2">Product 1 - $20</li>
//       <li className="border p-2 mb-2">Product 2 - $30</li>
//     </ul>
//   </div>
// );

// export default Dashboard;



// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Dashboard from "../vendor/Dashboard";
// import AddStore from "../vendor/AddStore";
// import AddCategory from "..vendor/AddCategory";
// import AddProduct from "../vendor/AddProduct";
// import ProductList from "../vendor/ProductList";


// function App() {
//   return (
//     <Router>
//       <div className="flex">
//         {/* Sidebar */}
//         <div className="w-1/4 h-screen bg-gray-900 text-white p-5">
//           <h2 className="text-2xl font-bold mb-4">Vendor Dashboard</h2>
//           <ul>
//             <li className="mb-2"><Link to="/" className="block p-2 hover:bg-gray-700">Dashboard</Link></li>
//             <li className="mb-2"><Link to="/add-store" className="block p-2 hover:bg-gray-700">Add Store</Link></li>
//             <li className="mb-2"><Link to="/add-category" className="block p-2 hover:bg-gray-700">Add Category</Link></li>
//             <li className="mb-2"><Link to="/add-product" className="block p-2 hover:bg-gray-700">Add Product</Link></li>
//             <li className="mb-2"><Link to="/products" className="block p-2 hover:bg-gray-700">All Products</Link></li>
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="w-3/4 p-5">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/add-store" element={<AddStore />} />
//             <Route path="/add-category" element={<AddCategory />} />
//             <Route path="/add-product" element={<AddProduct />} />
//             <Route path="/products" element={<ProductList />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;





// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaStore, FaTags, FaBox, FaList } from "react-icons/fa";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-1/5 bg-gray-800 text-white p-5">
//         <h2 className="text-xl font-bold mb-6">Vendor Dashboard</h2>
//         <ul>
//           <li className="mb-4 cursor-pointer" onClick={() => navigate("/vendor-panel/add-store")}>
//             <FaStore className="inline mr-2" /> Add Store
//           </li>
//           <li className="mb-4 cursor-pointer" onClick={() => navigate("/vendor-panel/add-category")}>
//             <FaTags className="inline mr-2" /> Add Category
//           </li>
//           <li className="mb-4 cursor-pointer" onClick={() => navigate("/add-product")}>
//             <FaBox className="inline mr-2" /> Add Product
//           </li>
//           <li className="mb-4 cursor-pointer" onClick={() => navigate("/view-products")}>
//             <FaList className="inline mr-2" /> View Products
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import { useState } from "react";
// import { FaStore, FaTags, FaBox, FaList } from "react-icons/fa";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("addStore");

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-1/5 bg-gray-800 text-white p-5">
//         <h2 className="text-xl font-bold mb-6">Vendor Dashboard</h2>
//         <ul>
//           <li
//             className={`mb-4 cursor-pointer ${activeTab === "addStore" ? "font-bold" : ""}`}
//             onClick={() => setActiveTab("addStore")}
//           >
//             <FaStore className="inline mr-2" /> Add Store
//           </li>
//           <li
//             className={`mb-4 cursor-pointer ${activeTab === "addCategory" ? "font-bold" : ""}`}
//             onClick={() => setActiveTab("addCategory")}
//           >
//             <FaTags className="inline mr-2" /> Add Category
//           </li>
//           <li
//             className={`mb-4 cursor-pointer ${activeTab === "addProduct" ? "font-bold" : ""}`}
//             onClick={() => setActiveTab("addProduct")}
//           >
//             <FaBox className="inline mr-2" /> Add Product
//           </li>
//           <li
//             className={`mb-4 cursor-pointer ${activeTab === "viewProducts" ? "font-bold" : ""}`}
//             onClick={() => setActiveTab("viewProducts")}
//           >
//             <FaList className="inline mr-2" /> View Products
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="w-4/5 p-6">
//         {activeTab === "addStore" && <AddStore />}
//         {activeTab === "addCategory" && <AddCategory />}
//         {activeTab === "addProduct" && <AddProduct />}
//         {activeTab === "viewProducts" && <ViewProducts />}
//       </div>
//     </div>
//   );
// };

// // Add Store Component
// const AddStore = () => (
//   <div>
//     <h2 className="text-2xl font-bold mb-4">Add Store</h2>
//     <input className="border p-2 w-full mb-4" type="text" placeholder="Store Name" />
//     <button className="bg-blue-500 text-white px-4 py-2">Save Store</button>
//   </div>
// );

// // Add Category Component
// const AddCategory = () => (
//   <div>
//     <h2 className="text-2xl font-bold mb-4">Add Category</h2>
//     <input className="border p-2 w-full mb-4" type="text" placeholder="Category Name" />
//     <button className="bg-blue-500 text-white px-4 py-2">Save Category</button>
//   </div>
// );

// // Add Product Component
// const AddProduct = () => (
//   <div>
//     <h2 className="text-2xl font-bold mb-4">Add Product</h2>
//     <input className="border p-2 w-full mb-2" type="text" placeholder="Product Name" />
//     <input className="border p-2 w-full mb-2" type="number" placeholder="Price" />
//     <button className="bg-blue-500 text-white px-4 py-2">Save Product</button>
//   </div>
// );

// // View Products Component
// const ViewProducts = () => (
//   <div>
//     <h2 className="text-2xl font-bold mb-4">All Products</h2>
//     <ul>
//       <li className="border p-2 mb-2">Product 1 - $20</li>
//       <li className="border p-2 mb-2">Product 2 - $30</li>
//     </ul>
//   </div>
// );

// export default Dashboard;



import { useState } from "react";
import Sidebar from "./Sidebar";
import AddStore from "./AddStore";
import AddCategory from "./AddCategory";
import AddProduct from "./AddProduct";
// import Orderdet from "./VendorOrderDetails";
import VendorOrderDetails from "./VendorOrderDetails";
// import ViewProducts from "./ViewProducts";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("addStore");

  return (
    <div className="flex h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="w-4/5 p-6">
        {activeTab === "addStore" && <AddStore />}
        {activeTab === "addCategory" && <AddCategory />}
        {activeTab === "addProduct" && <AddProduct />}
        {activeTab === "vieworders" && < VendorOrderDetails/>}
        {/* {activeTab === "viewProducts" && <ViewProducts />} */}
        vieworders
      </div>
    </div>
  );
};

export default Dashboard;
