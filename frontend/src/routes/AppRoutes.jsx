// import React from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// // import Home from '../pages/Home'
// import Home from '../component/home/Home';
// import Signup from '../page/Signup';
// import Login from '../page/Login';
// import Wishlist from '../page/Wishlist';
// import Vendorlist from '../component/vendor/Vendorlist';
// import Profile from '../component/userprofile/Profile';
// import Mobmenu from '../component/mobile/Mobmenu';
// import Tab2 from '../component/home/Tab2';
// import Vendordas from '../component/vendor/Vendordas'
// import Storelist from '../component/store/Storelist';
// import VendorProducts from '../component/store/VendorProducts';
// import Store from '../component/store/Store';
// import Category from '../component/store/Category';
// import CategoryPage from '../component/store/CatogeryPage';
// import Productdetails from '../component/product/Productdetails';
// import SingleProduct from '../component/product/Singleproduct';
// import Cart from '../component/cart/Cart';
// import SearchResultsPage from '../component/header/SearchResultsPage';
// import Checkoute from '../component/checkoute/Checkoute';
// import Checkout from '../component/checkoute/Checkout';
// import Orderdet from '../component/userprofile/Orderdet';
// import Orderdetcom from '../component/userprofile/Orderdetcom';
// import Order from '../component/userprofile/Order';
// import Adminhome from '../component/admin/Adminhome';
// import AdminVendorList from '../component/admin/AdminVendorList';



// const ProtectedRoute = ({ element: Element, ...rest }) => {
//   const isAdmin = localStorage.getItem("isAdmin") === "true";
//   return isAdmin ? <Element {...rest} /> : <Navigate to="/" replace />;
// };
// const AppRoutes = () => {
//   return (
//     <div>     
//        <Routes>
//        <Route path='/' element={<Home/>}></Route>
//        <Route path='/signup' element={<Signup/>}></Route>
//        <Route path='/login' element={<Login/>}></Route>
//        <Route path='/wishlist' element ={<Wishlist/>}></Route>
//        {/* vendor-list-dokan */}
//        <Route path='/vendor-list-dokan'element={<Vendorlist/>}></Route>
//        <Route path='/my-account' element = {<Profile/>}></Route>
//        <Route path='/#tab1-2' element = {<Tab2/>}></Route>
//        <Route path='/vendor-store-list' element = {<Storelist/>}></Route>
       
//        <Route path="/vendor/:shopName" element={<Store />} />
//        {/* <Route path="/category/:categoryName" element={<Category />} /> */}
//        <Route path="/category/:categoryName" element={<CategoryPage />} />
//        <Route path="/category" element={<Category />} />
//        {/* <Route path="/product/:id/:productName" element={<Productdetails/>} /> */}
//        <Route path="/product/:id" element={<SingleProduct />} />
//        <Route path="/cart" element={<Cart />} />
//        <Route path="/search" element={<SearchResultsPage />} />
//        <Route path='/checkout' element={<Checkoute/>}></Route>
       
//        <Route path='/order-detail' element={<Orderdetcom />} />
//        <Route path='/orders' element = {<Order/>}></Route>
       

//        {/* vendor */}

//        <Route path='vendor-panel' element = {<Vendordas/>}>

        
//        </Route>
//        {/* admin  */}
//        <Route
//           path="/admin-panel"
//           element={<Adminhome/>}
//         >
//            {/* <Route path="dashboard" element={<Dashboard />} /> */}
//           <Route path="/vendors" element={<AdminVendorList />} />
          
//           </Route>
//        </Routes>
      
//     </div>
//   )
// }

// export default AppRoutes




import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../component/home/Home';
import Signup from '../page/Signup';
import Login from '../page/Login';
import Wishlist from '../page/Wishlist';
import Vendorlist from '../component/vendor/Vendorlist';
import Profile from '../component/userprofile/Profile';
import Storelist from '../component/store/Storelist';
import Store from '../component/store/Store';
import CategoryPage from '../component/store/CatogeryPage';
import SingleProduct from '../component/product/Singleproduct';
import Cart from '../component/cart/Cart';
import SearchResultsPage from '../component/header/SearchResultsPage';
import Checkoute from '../component/checkoute/Checkoute';
import Orderdetcom from '../component/userprofile/Orderdetcom';
import Order from '../component/userprofile/Order';
import Adminhome from '../component/admin/Adminhome';
import AdminVendorList from '../component/admin/AdminVendorList';

const ProtectedRoute = ({ element: Element }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return isAdmin ? <Element /> : <Navigate to="/" replace />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/vendor-list-dokan" element={<Vendorlist />} />
      <Route path="/my-account" element={<Profile />} />
      <Route path="/vendor-store-list" element={<Storelist />} />
      <Route path="/vendor/:shopName" element={<Store />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search" element={<SearchResultsPage />} />
      <Route path="/checkout" element={<Checkoute />} />
      <Route path="/order-detail" element={<Orderdetcom />} />
      <Route path="/orders" element={<Order />} />

      {/* Admin Panel Routes */}
      <Route path="/admin-panel" element={ <Adminhome/>}>
        <Route path="vendors" element={<AdminVendorList />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
