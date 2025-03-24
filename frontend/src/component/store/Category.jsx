// import React, { useEffect, useState } from "react";
// import { BACKENDURL } from "../../config/config";

// const Category = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(BACKENDURL + "/api/v1/category/getall-cat"); // Update with your API URL
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <aside className="sidebar left-sidebar vendor-sidebar sticky-sidebar-wrapper sidebar-fixed">
//       <div className="sidebar-overlay"></div>
//       <a className="sidebar-close" href="#">
//         <i className="close-icon"></i>
//       </a>
//       <a href="#" className="sidebar-toggle">
//         <i className="fas fa-chevron-right"></i>
//       </a>

//       <div className="sidebar-content">
//         <div className="sticky-sidebar">
//           {/* Categories Widget */}
//           <div className="widget widget-collapsible widget-categories">
//             <h3 className="widget-title">
//               <span>All Categories</span>
//             </h3>
//             <ul className="widget-body filter-items search-ul">
//               {categories.length > 0 ? (
//                 categories.map((category) => (
//                   <li key={category._id}>
//                     <a href="#">{category.name}</a>
//                   </li>
//                 ))
//               ) : (
//                 <li>Loading categories...</li>
//               )}
//             </ul>
//           </div>

//           {/* Other widgets remain unchanged */}
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Category;






// import React, { useEffect, useState } from "react";
// import { BACKENDURL } from "../../config/config";
// import ProductList from "./ProductList";

// const Category = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(`${BACKENDURL}/api/v1/category/getall-cat`);
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

// const fetchProductsByCategory = async (category) => {
//     // console.log("Sending Category:", category); // Debugging log
  
//     if (!category) {
//       console.error("Category is undefined!");
//       return;
//     }
  
//     setLoading(true);
//     try {
//       const response = await fetch(`${BACKENDURL}/api/v1/product/products/${encodeURIComponent(category)}`);
//       const data = await response.json();
  
//     //   console.log("API Response:", data); // Debugging log
  
//       if (data.success) {
//         setProducts(data.data);
//       } else {
//         setProducts([]);
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setProducts([]);
//     }
//     setLoading(false);
//   };
  
//   const handleCategoryClick = (categoryId) => {
//     setSelectedCategory(categoryId);
//     fetchProductsByCategory(categoryId);
//   };

//   return (
//     <div className="category-container">
//       <aside className="sidebar left-sidebar vendor-sidebar sticky-sidebar-wrapper sidebar-fixed">
//         <div className="sidebar-overlay"></div>
//         <a className="sidebar-close" href="#">
//           <i className="close-icon"></i>
//         </a>
//         <a href="#" className="sidebar-toggle">
//           <i className="fas fa-chevron-right"></i>
//         </a>

//         <div className="sidebar-content">
//           <div className="sticky-sidebar">
//             {/* Categories Widget */}
//             <div className="widget widget-collapsible widget-categories ">
//               <h3 className="widget-title">
//                 <span>All Categories</span>
//               </h3>
//               <ul className="widget-body filter-items search-ul ">
//                 {categories.length > 0 ? (
//                   categories.map((category) => (
//                     <li key={category._id}>
//                       <button
//                         className={`category-button ${selectedCategory === category._id ? "active" : ""}`}
//                         onClick={() => handleCategoryClick(category._id)}
//                       >
//                         {category.name}
//                       </button>
//                     </li>
//                   ))
//                 ) : (
//                   <li>Loading categories...</li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* Use ProductList Component */}
//       <ProductList products={products} selectedCategory={selectedCategory} loading={loading} />
//     </div>
//   );
// };

// export default Category;



import React, { useEffect, useState } from "react";
import { BACKENDURL } from "../../config/config";
import ProductList from "./ProductList";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${BACKENDURL}/api/v1/category/getall-cat`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const fetchProductsByCategory = async (category) => {
    if (!category) {
      console.error("Category is undefined!");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${BACKENDURL}/api/v1/product/products/${encodeURIComponent(category)}`);
      const data = await response.json();

      if (data.success) {
        setProducts(data.data);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
    setLoading(false);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    fetchProductsByCategory(categoryId);
  };

  return (
    <div className="category-container">
      <aside className="sidebar left-sidebar vendor-sidebar sticky-sidebar-wrapper sidebar-fixed">
        <div className="sidebar-overlay"></div>
        <a className="sidebar-close" href="#">
          <i className="close-icon"></i>
        </a>
        <a href="#" className="sidebar-toggle">
          <i className="fas fa-chevron-right"></i>
        </a>

        <div className="sidebar-content">
          <div className="sticky-sidebar">
            {/* Categories Widget */}
            <div className="widget widget-collapsible widget-categories ">
              <h3 className="widget-title">
                <span>All Categories</span>
              </h3>
              <ul className="widget-body filter-items search-ul space-y-2">
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <li key={category._id} className="mb-2">
                      <button
                        className={`category-button ${selectedCategory === category._id ? "active" : ""}`}
                        onClick={() => handleCategoryClick(category._id)}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))
                ) : (
                  <li>Loading categories...</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </aside>

      {/* Use ProductList Component */}
      <ProductList products={products} selectedCategory={selectedCategory} loading={loading} />
    </div>
  );
};

export default Category;




