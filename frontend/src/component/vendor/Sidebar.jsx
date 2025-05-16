



// import { FaStore, FaTags, FaBox, FaList } from "react-icons/fa";

// const Sidebar = ({ activeTab, setActiveTab }) => {
//   return (
//     <div className="w-1/5 bg-gray-800 text-white p-5">
//       <h2 className="text-xl font-bold mb-6">Vendor Dashboard</h2>
//       <ul>
//         <li
//           className={`mb-4 cursor-pointer ${activeTab === "addStore" ? "font-bold" : ""}`}
//           onClick={() => setActiveTab("addStore")}
//         >
//           <FaStore className="inline mr-2" /> Add Store
//         </li>
//         <li
//           className={`mb-4 cursor-pointer ${activeTab === "addCategory" ? "font-bold" : ""}`}
//           onClick={() => setActiveTab("addCategory")}
//         >
//           <FaTags className="inline mr-2" /> Add Category
//         </li>
//         <li
//           className={`mb-4 cursor-pointer ${activeTab === "addProduct" ? "font-bold" : ""}`}
//           onClick={() => setActiveTab("addProduct")}
//         >
//           <FaBox className="inline mr-2" /> Add Product
//         </li>
//         <li
//           className={`mb-4 cursor-pointer ${activeTab === "viewProducts" ? "font-bold" : ""}`}
//           onClick={() => setActiveTab("viewProducts")}
//         >
//           <FaList className="inline mr-2" /> View Products
//         </li>
//         <li
//           className={`mb-4 cursor-pointer ${activeTab === "vieworders" ? "font-bold" : ""}`}
//           onClick={() => setActiveTab("vieworders")}
//         >
//           <FaBox className="inline mr-2" /> view order
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



import React from "react";
import { FaStore, FaTags, FaBox, FaList } from "react-icons/fa";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-68 text-black min-h-screen p-5  rounded-xl shadow-lg mt-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">Vendor Dashboard</h2>
      <ul className="space-y-3">
        <li className="flex items-center  gap-3 p-3 rounded-lg cursor-pointer hover:text-blue-950" onClick={() => setActiveTab("addStore")}> 
          <FaStore className="inline mr-2" /> Add Store
        </li>
        <hr className="my-2" />
        <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:text-blue-950" onClick={() => setActiveTab("addCategory")}> 
          <FaTags className="inline mr-2" /> Add Category
        </li>
        <hr className="my-2" />
        <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:text-blue-950" onClick={() => setActiveTab("addProduct")}> 
          <FaBox className="inline mr-2" /> Add Product
        </li>
        <hr className="my-2" />
        <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:text-blue-950" onClick={() => setActiveTab("viewProducts")}> 
          <FaList className="inline mr-2" /> View Products
        </li>
        <hr className="my-2" />
        <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:text-blue-950" onClick={() => setActiveTab("vieworders")}> 
          <FaBox className="inline mr-2" /> View Orders
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
