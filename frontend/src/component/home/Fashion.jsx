




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";
// import addToWishlist from "../../helpers/addToWishlist";

// const Fashion = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchFashionProducts = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/product/allproduct`);
//         setProducts(response.data.data);
//       } catch (err) {
//         setError("Failed to fetch products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFashionProducts();
//   }, []);

//   return (
//     <div className="col-lg-9 col-sm-8 hidden lg:block">
      
//         <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-2">
//           {loading ? (
//             <p>Loading products...</p>
//           ) : error ? (
//             <p className="text-danger">{error}</p>
//           ) : products.length === 0 ? (
//             <p>No products found in this category.</p>
//           ) : (
//             products.slice(-4).map((product) => (
//               <div key={product._id} className="swiper-slide product-col">
//                 <div className="product-wrap product text-center">
//                   <figure className="product-media">
//                     <a href={`/${product.name.replace(/\s+/g, "-")}/`}>
//                       <img
//                         src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split("\\").pop()}`}
//                         alt={product.name}
//                         width="216"
//                         height="243"
//                         style={{ objectFit: "cover", width: "216px", height: "243px" }}
//                       />
//                     </a>
//                     <div className="product-action-vertical">
//                       <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
//                       <a
//                         href="#"
//                         onClick={(e) => addToWishlist(e, product._id)}
//                         className="btn-product-icon btn-wishlist w-icon-heart"
//                         title="Add to wishlist"
//                       ></a>
//                     </div>
//                   </figure>
//                   <div className="product-details">
//                     <h4 className="product-name">
//                       <a href="product-default.html">{product.name}</a>
//                     </h4>

//                     <div className="flex justify-center items-center mt-1">
//                       <div className="text-orange-400 text-3xl">
//                         {"★".repeat(product.averageRating || 0)}
//                         {"☆".repeat(5 - (product.averageRating || 0))}
//                       </div>
//                       <span className="ml-1 text-sm text-gray-500">({product.totalReviews || 0})</span>
//                     </div>

//                     <div className="product-price">
//                       {product.price != null ? (
//                         <ins className="new-price">${product.price.toFixed(2)}</ins>
//                       ) : (
//                         <ins className="new-price">Price not available</ins>
//                       )}
//                       {product.oldPrice != null && (
//                         <del className="old-price">${product.oldPrice.toFixed(2)}</del>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//         <div className="swiper-pagination"></div>
//       </div>
//     // </div>
//   );
// };

// export default Fashion;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";
// import addToWishlist from "../../helpers/addToWishlist";

// const Fashion = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchFashionProducts = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/product/allproduct`);
//         setProducts(response.data.data.slice(-8)); // Get the last 8 products
//       } catch (err) {
//         setError("Failed to fetch products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFashionProducts();
//   }, []);

//   return (
//     <div className="col-lg-9 col-sm-8 hidden lg:block">
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : error ? (
//           <p className="text-danger">{error}</p>
//         ) : products.length === 0 ? (
//           <p>No products found in this category.</p>
//         ) : (
//           products.map((product) => (
//             <div key={product._id} className="product-col bg-white rounded-lg shadow-sm p-3 transition-transform transform hover:scale-105">
//               <div className="product-wrap product text-center">
//                 <figure className="product-media">
//                   <a href={`/${product.name.replace(/\s+/g, "-")}/`}>
//                     <img
//                       src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split("\\").pop()}`}
//                       alt={product.name}
//                       width="216"
//                       height="243"
//                       className="w-full h-60 object-cover rounded-md"
//                     />
//                   </a>
//                   <div className="product-action-vertical mt-2 space-x-2 flex justify-center">
//                     <button
//                       className="btn-product-icon btn-cart w-icon-cart text-blue-500 hover:text-blue-600"
//                       title="Add to cart"
//                     ></button>
//                     <button
//                       onClick={(e) => addToWishlist(e, product._id)}
//                       className="btn-product-icon btn-wishlist w-icon-heart text-red-500 hover:text-red-600"
//                       title="Add to wishlist"
//                     ></button>
//                   </div>
//                 </figure>
//                 <div className="product-details mt-3">
//                   <h4 className="product-name text-lg font-semibold">
//                     <a href={`/${product.name.replace(/\s+/g, "-")}/`}>{product.name}</a>
//                   </h4>
//                   <div className="flex justify-center items-center mt-1 text-orange-400 text-2xl">
//                     {"★".repeat(product.averageRating || 0)}
//                     {"☆".repeat(5 - (product.averageRating || 0))}
//                     <span className="ml-1 text-sm text-gray-500">({product.totalReviews || 0})</span>
//                   </div>
//                   <div className="product-price mt-2">
//                     {product.price != null ? (
//                       <ins className="new-price text-blue-600 font-semibold">${product.price.toFixed(2)}</ins>
//                     ) : (
//                       <ins className="new-price text-gray-500">Price not available</ins>
//                     )}
//                     {product.oldPrice != null && (
//                       <del className="old-price text-gray-400 ml-2">${product.oldPrice.toFixed(2)}</del>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Fashion;






import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config";
import addToWishlist from "../../helpers/addToWishlist";

const Fashion = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFashionProducts = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/product/allproduct`);
        setProducts(response.data.data.slice(-8)); // Get the last 8 products
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchFashionProducts();
  }, []);

  return (
    <div className="col-lg-9 col-sm-8 hidden lg:block">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : products.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className="product-col bg-white rounded-lg shadow-sm p-3 transition-transform transform hover:scale-105"
            >
              <div className="product-wrap product text-center">
                <figure className="product-media">
                  <a href={`/${product.name.replace(/\s+/g, "-")}/`}>
                    <div className="w-full h-[250px] mx-auto overflow-hidden rounded-md">
                      <img
                        src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split("\\").pop()}`}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="product-action-vertical mt-2 space-x-2 flex justify-center">
                    {/* <button
                      className="btn-product-icon btn-cart w-icon-cart text-blue-500 hover:text-blue-600"
                      title="Add to cart"
                    ></button> */}
                    <button
                      onClick={(e) => addToWishlist(e, product._id)}
                      className="btn-product-icon btn-wishlist w-icon-heart text-gray-400 hover:text-gray-500"
                      title="Add to wishlist"
                    ></button>
                  </div>
                </figure>
                

                <div className="product-details mt-0 sm:mt-3">
  <h4 className="product-name text-lg font-semibold mb-3 -mt-4">
    <a href={`/${product.name.replace(/\s+/g, "-")}/`}>{product.name}</a>
  </h4>
  <div className="flex justify-center items-center mt-1 text-orange-400 text-2xl">
    {"★".repeat(product.averageRating || 0)}
    {"☆".repeat(5 - (product.averageRating || 0))}
    <span className="ml-1 text-sm text-gray-500">
      ({product.totalReviews || 0})
    </span>
  </div>
  <div className="product-price mt-2">
    {product.price != null ? (
      <ins className="new-price text-blue-600 font-semibold">
        ${product.price.toFixed(2)}
      </ins>
    ) : (
      <ins className="new-price text-gray-500">Price not available</ins>
    )}
    {product.oldPrice != null && (
      <del className="old-price text-gray-400 ml-2">
        ${product.oldPrice.toFixed(2)}
      </del>
    )}
  </div>
</div>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Fashion;
