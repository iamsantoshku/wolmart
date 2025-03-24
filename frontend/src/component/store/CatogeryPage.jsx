import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKENDURL } from "../../config/config";
import ProductList from "./ProductList";
// import ProductList from "./Productlist";
import Categorynav from "../category/Categorynav";
import CategoryBanner from "../home/CategoryBanner";
import Categorybanner from "../category/Categorybanner";
import Shopcategory from "../category/Shopcategory";

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get category name from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BACKENDURL}/api/v1/product/products/${encodeURIComponent(categoryName)}`);
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

    fetchProductsByCategory();
  }, [categoryName]);

  return (
    <>
    <Categorynav/>
    <div class="page-content">
                <div class="container">
                  <Categorybanner/>
                  <Shopcategory/>
                  
     <h2>Products in {categoryName}</h2>
<ProductList products={products} loading={loading} />
                </div>
        </div>         
     <div className="category-page">

</div>
    </>
   
  );
};

export default CategoryPage;










// import React from "react";
// import { BACKENDURL } from "../../config/config";

// const ProductList = ({ products, categoryName, loading }) => {
//   return (
//     <div>
//       <h2 className="text-center mb-4">
//         {categoryName ? `Products in ${categoryName}` : "Select a category to view products"}
//       </h2>

//       {loading ? (
//         <p className="text-center">Loading products...</p>
//       ) : products.length > 0 ? (
//         <div className="product-wrapper row cols-xl-4 cols-lg-4 cols-md-3 cols-sm-2 cols-2">
//           {products.map((product) => {
//             // Construct Image URL
//             const imageUrl = product.images?.[0]?.urls?.[0]
//               ? `${BACKENDURL}/uploads/product/${product.images[0].urls[0].split("\\").pop()}`
//               : "/assets/images/shop/default-product.jpg"; // Fallback image

//             return (
//               <div key={product._id} className="product-wrap">
//                 <div className="product text-center">
//                   <figure className="product-media">
//                     <a href={`/product/${product._id}`}>
//                       <img
//                         src={imageUrl}
//                         alt={product.name}
//                         width="300"
//                         height="338"
//                         style={{
//                           width: "300px",
//                           height: "338px",
//                           objectFit: "cover",
//                           backgroundColor: "#f5f5f5",
//                         }}
//                         onError={(e) => { e.target.src = "/assets/images/shop/default-product.jpg"; }} 
//                       />
//                     </a>
//                     <div className="product-action-horizontal">
//                       <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
//                       <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></a>
//                       <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></a>
//                       <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View"></a>
//                     </div>
//                   </figure>
//                   <div className="product-details">
//                     <div className="product-cat">
//                       <a href={`/category/${categoryName}`}>{categoryName || "Category"}</a>
//                     </div>
//                     <h3 className="product-name">
//                       <a href={`/product/${product._id}`}>{product.name}</a>
//                     </h3>
//                     <div className="ratings-container">
//                       <div className="ratings-full">
//                         <span className="ratings" style={{ width: `${(product.rating / 5) * 100}%` }}></span>
//                         <span className="tooltiptext tooltip-top"></span>
//                       </div>
//                       <a href={`/product/${product._id}`} className="rating-reviews">
//                         ({product.reviews?.length || 0} reviews)
//                       </a>
//                     </div>
//                     <div className="product-pa-wrapper">
//                       <div className="product-price">
//                         {product.discountedPrice ? (
//                           <>
//                             <ins className="new-price">${product.discountedPrice}</ins>
//                             <del className="old-price">${product.price}</del>
//                           </>
//                         ) : (
//                           `$${product.price}`
//                         )}
//                       </div>
//                     </div>
//                     <p>Stock: {product.stock}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="text-center">No products found for this category.</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;
