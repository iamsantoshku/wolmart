



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { BACKENDURL } from '../../config/config';
// import addToWishlist from '../../helpers/addToWishlist';

// const Tab1 = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(BACKENDURL + "/api/v1/product/allproduct");
//         const data = await response.json();

//         if (data.success) {
//           setProducts(data.data);
//         } else {
//           console.error("Failed to fetch products:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="tab-pane active pt-4" id="tab1-1">
//       {loading ? (
//         <p>Loading products...</p>
//       ) : (
//         <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
//           {products.map((product) => (
//             <div className="product-wrap" key={product._id}>
//               <div className="product text-center">
//                 <figure className="product-media">
//                   <Link to={`/product/${product._id}`}>
//                     {product.images.length > 0 && (
//                       <img
//                         src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split('\\').pop()}`}
//                         alt="Product"
//                         width="300"
//                         height="300"
//                         style={{ objectFit: 'cover', width: '300px', height: '338px' }}
//                       />
//                     )}
//                   </Link>
//                   <div className="product-action-vertical">
//                     <button
//                       className="btn-product-icon btn-cart w-icon-cart"
//                       title="Add to cart"
//                     ></button>
//                     <button
//                       className="btn-product-icon btn-wishlist w-icon-heart"
//                       title="Add to wishlist"
//                       onClick={(e) => addToWishlist(e, product._id)}
//                     ></button>
//                     <button
//                       className="btn-product-icon btn-quickview w-icon-search"
//                       title="Quickview"
//                     ></button>
//                     <button
//                       className="btn-product-icon btn-compare w-icon-compare"
//                       title="Add to Compare"
//                     ></button>
//                   </div>
//                   {product.discount && (
//                     <div className="product-label-group">
//                       <label className="product-label label-discount">{product.discount}</label>
//                     </div>
//                   )}
//                 </figure>
//                 <div className="product-details">
//                   <h4 className="product-name">
//                     <Link to={`/product/${product._id}`}>{product.name}</Link>
//                   </h4>
//                   <div className="ratings-container">
//                     <div className="ratings-full">
//                       <span className="ratings" style={{ width: `${product.rating}%` }}></span>
//                       <span className="tooltiptext tooltip-top"></span>
//                     </div>
//                     <a href="product-default.html" className="rating-reviews">
//                       ({product.reviews} reviews)
//                     </a>
//                   </div>
//                   <div className="product-price">
//                     <ins className="new-price">{product.price}</ins>
//                     {product.oldPrice && <del className="old-price">{product.oldPrice}</del>}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Tab1;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { BACKENDURL } from '../../config/config';
// import addToWishlist from '../../helpers/addToWishlist';

// const Tab1 = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(`${BACKENDURL}/api/v1/product/allproduct`);
//         const data = await response.json();

//         if (data.success) {
//           setProducts(data.data);
//         } else {
//           console.error("Failed to fetch products:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="tab-pane active pt-4" id="tab1-1">
//       {loading ? (
//         <p>Loading products...</p>
//       ) : (
//         <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
//           {products.map((product) => (
//             <div className="product-wrap" key={product._id}>
//               <div className="product text-center">
//                 <figure className="product-media">
//                   <Link to={`/product/${product._id}`}>
//                     {product.images.length > 0 && (
//                       <img
//                         src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split('\\').pop()}`}
//                         alt="Product"
//                         width="300"
//                         height="300"
//                         style={{ objectFit: 'cover', width: '300px', height: '338px' }}
//                       />
//                     )}
//                   </Link>
//                   <div className="product-action-vertical">
//                     <button
//                       className="btn-product-icon btn-cart w-icon-cart"
//                       title="Add to cart"
//                     ></button>
//                     <button
//                       className="btn-product-icon btn-wishlist w-icon-heart"
//                       title="Add to wishlist"
//                       onClick={(e) => addToWishlist(e, product._id)}
//                     ></button>

//                   </div>
//                   {product.discount && (
//                     <div className="product-label-group">
//                       <label className="product-label label-discount">{product.discount}</label>
//                     </div>
//                   )}
//                 </figure>
//                 <div className="product-details">
//                   <h4 className="product-name">
//                     <Link to={`/product/${product._id}`}>{product.name}</Link>
//                   </h4>
//                   <div className="ratings-container">
//                     <div className="ratings-full">
//                       <span className="ratings" style={{ width: `${product.rating}%` }}></span>
//                       <span className="tooltiptext tooltip-top"></span>
//                     </div>
//                     <a href="product-default.html" className="rating-reviews">
//                       ({product.reviews} reviews)
//                     </a>
//                   </div>
//                   <div className="product-price">
//                     <ins className="new-price">{product.price}</ins>
//                     {product.oldPrice && <del className="old-price">{product.oldPrice}</del>}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Tab1;



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { BACKENDURL } from "../../config/config";
// import addToWishlist from "../../helpers/addToWishlist";

// const Tab1 = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(`${BACKENDURL}/api/v1/product/allproduct`);
//         const data = await response.json();

//         if (data.success) {
//           setProducts(data.data);
//         } else {
//           console.error("Failed to fetch products:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="tab-pane active pt-4">
//       {loading ? (
//         <p className="text-center text-lg font-semibold">Loading products...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//           {products.map((product) => (
//             <div key={product._id} className="bg-white shadow-md rounded-lg p-4 transition-all hover:shadow-lg">
//               <div className="relative group">
//                 <Link to={`/product/${product._id}`} className="block">
//                   {product.images.length > 0 && (
//                     <img
//                       src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split("\\").pop()}`}
//                       alt="Product"
//                       className="w-full h-[260px] object-cover rounded-lg"
//                     />
//                   )}
//                 </Link>

//                 {/* Action Buttons - Always visible on mobile, shown on hover for desktop */}
//                 <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
//                   <button
//                     className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
//                     title="Add to cart"
//                   >
//                     🛒
//                   </button>
//                   <button
//                     className="bg-gray-200 p-2 rounded-full shadow hover:bg-red-400"
//                     title="Add to wishlist"
//                     onClick={(e) => addToWishlist(e, product._id)}
//                   >
//                     ❤️
//                   </button>
//                 </div>

//                 {product.discount && (
//                   <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
//                     {product.discount}
//                   </div>
//                 )}
//               </div>

              
              

//               <div className="product-details text-center">
//                 <h4 className="product-name">
//                   <Link to={`/product/${product._id}`}>{product.name}</Link>
//                 </h4>
            

//                 <div className="product-price">
//                   <ins className="new-price">{product.price}</ins>
//                   {product.oldPrice && <del className="old-price">{product.oldPrice}</del>}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Tab1;




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BACKENDURL } from "../../config/config";
import addToWishlist from "../../helpers/addToWishlist";

const Tab1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Helper function to get 15 random products
  const getRandomProducts = (productArray, count) => {
    const shuffled = [...productArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BACKENDURL}/api/v1/product/allproduct`);
        const data = await response.json();

        if (data.success) {
          const random15 = getRandomProducts(data.data, 15);
          setProducts(random15);
        } else {
          console.error("Failed to fetch products:", data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="tab-pane active pt-4">
      {loading ? (
        <p className="text-center text-lg font-semibold">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white shadow-md rounded-lg p-4 transition-all hover:shadow-lg">
              <div className="relative group">
                <Link to={`/product/${product.name}`} className="block">
                  {product.images.length > 0 && (
                    <img
                      src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split("\\").pop()}`}
                      alt="Product"
                      className="w-full h-[260px] object-cover rounded-lg"
                    />
                  )}
                </Link>

                {/* Action Buttons - Always visible on mobile, shown on hover for desktop */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <button
                    className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
                    title="Add to cart"
                  >
                    🛒
                  </button>
                  
 
 <button
                       className="btn-product-icon btn-wishlist w-icon-heart rounded-full"
                       title="Add to wishlist"
                      onClick={(e) => addToWishlist(e, product._id)}
                     ></button> 
                </div>

                {product.discount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
                    {product.discount}
                  </div>
                )}
              </div>

              <div className="product-details text-center mt-3">
                

<h4 className="product-name">
                   {/* <Link to={`/product/${product._id}`}>{product.name}</Link> */}
                   <Link to={`/product/${product.name}`}>{product.name}</Link>
                  
                 </h4>
            

                 <div className="product-price">
                   <ins className="new-price">{product.price}</ins>
                   {product.oldPrice && <del className="old-price">{product.oldPrice}</del>}
                 </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tab1;
