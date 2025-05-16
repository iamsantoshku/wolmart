




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

     
      <div className="w-4/5 p-6">
        {activeTab === "addStore" && <AddStore />}
        {activeTab === "addCategory" && <AddCategory />}
        {activeTab === "addProduct" && <AddProduct />}
        {activeTab === "vieworders" && < VendorOrderDetails/>}
        {/* {activeTab === "viewProducts" && <ViewProducts />} */}
        {/* vieworders */}
      </div>
    </div>
  );
};

export default Dashboard;



// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import AddStore from "./AddStore";
// import AddCategory from "./AddCategory";
// import AddProduct from "./AddProduct";
// import VendorOrderDetails from "./VendorOrderDetails";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("addStore");

//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} className="w-full md:w-1/5" />

//       <div className="w-full md:w-4/5 p-6">
//         {activeTab === "addStore" && <AddStore />}
//         {activeTab === "addCategory" && <AddCategory />}
//         {activeTab === "addProduct" && <AddProduct />}
//         {activeTab === "vieworders" && <VendorOrderDetails />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
