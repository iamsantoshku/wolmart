

// const fetchVendorProducts = async () => {
    //   try {
    //     const response = await axios.get(`${BACKENDURL}/api/v1/vendor/${shopName}`);
    //     console.log("Products response:", response.data); // Debug log
    //     setProducts(response.data.data);
    //   } catch (err) {
    //     setError("Failed to load products");
    //   } finally {
    //     setLoading(false);
    //   }
    // };




// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";

// const VendorProducts = () => {
//   const { shopName } = useParams();
//   console.log("Shop Name:", shopName); // Debug log

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
    
//     const fetchVendorProducts = async () => {
//       try {
//         const encodedShopName = encodeURIComponent(shopName); // Encode spaces and special characters
//         const response = await axios.get(`${BACKENDURL}/api/v1/product/vendor/${encodedShopName}`);
        
//         setProducts(response.data.data);
//       } catch (err) {
//         setError("Failed to load products");
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchVendorProducts();
//   }, [shopName]);

//   if (loading) return <div className="text-center text-lg mt-10">Loading products...</div>;
//   if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;
//   if (products.length === 0) return <div className="text-center text-gray-500 mt-10">No products found for this vendor.</div>;

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{shopName} - Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="bg-white shadow-md rounded-lg p-4">
//             <img
//               src={product.images?.[0]?.urls?.[0] || "/placeholder.jpg"} 
//               alt={product.name}
//               className="w-full h-48 object-cover rounded-md"
//             />
//             <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
//             <p className="text-gray-500">{product.description.substring(0, 60)}...</p>
//             <div className="flex justify-between items-center mt-3">
//               <span className="text-lg font-bold text-blue-600">${product.price}</span>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VendorProducts;



// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";

// const VendorProducts = () => {
//   const { shopName } = useParams();
//   console.log("Shop Name:", shopName); // Debug log

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchVendorProducts = async () => {
//       try {
//         const encodedShopName = encodeURIComponent(shopName); // Encode spaces and special characters
//         const response = await axios.get(
//           `${BACKENDURL}/api/v1/product/vendor/${encodedShopName}`
//         );

//         setProducts(response.data.data);
//       } catch (err) {
//         setError("Failed to load products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVendorProducts();
//   }, [shopName]);

//   if (loading)
//     return <div className="text-center text-lg mt-10">Loading products...</div>;
//   if (error)
//     return <div className="text-center text-red-500 mt-10">{error}</div>;
//   if (products.length === 0)
//     return (
//       <div className="text-center text-gray-500 mt-10">
//         No products found for this vendor.
//       </div>
//     );

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//         {shopName} - Products
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="product-wrap">
//             <div className="product text-center">
//               <figure className="product-media">
//                 <a href={`/product/${product._id}`}>
//                   <img
//                     // src={product.images?.[0]?.urls?.[0] || "/placeholder.jpg"}
//                     // src = {`${BACKENDURL}${product.images?.urls?.[0]}`} 
//                     src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split('\\').pop()}`}

//                     alt={product.name}
//                     width="400"
//                     height="538"
//                   />
//                 </a>
//                 <div className="product-action-vertical">
//                   <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
//                   <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></a>
//                   <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></a>
//                   <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View"></a>
//                 </div>
//               </figure>
//               <div className="product-details">
//                 <h3 className="product-name">
//                   <a href={`/product/${product._id}`}>{product.name}</a>
//                 </h3>
//                 <div className="ratings-container">
//                   <div className="ratings-full">
//                     <span className="ratings" style={{ width: "100%" }}></span>
//                     <span className="tooltiptext tooltip-top"></span>
//                   </div>
//                   <a href={`/product/${product._id}`} className="rating-reviews">
//                     ({product.reviews?.length || 0} reviews)
//                   </a>
//                 </div>
//                 <div className="product-pa-wrapper">
//                   <div className="product-price">
//                     {product.discountedPrice ? (
//                       <>
//                         <ins className="new-price">${product.discountedPrice}</ins>
//                         <del className="old-price">${product.price}</del>
//                       </>
//                     ) : (
//                       `$${product.price}`
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VendorProducts;


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKENDURL } from "../../config/config";

const VendorProducts = () => {
  const { shopName } = useParams();
  console.log("Shop Name:", shopName); // Debug log

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendorProducts = async () => {
      try {
        const encodedShopName = encodeURIComponent(shopName); // Encode spaces and special characters
        const response = await axios.get(
          `${BACKENDURL}/api/v1/product/vendor/${encodedShopName}`
        );

        setProducts(response.data.data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchVendorProducts();
  }, [shopName]);

  if (loading)
    return <div className="text-center text-lg mt-10">Loading products...</div>;
  if (error)
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  if (products.length === 0)
    return (
      <div className="text-center text-gray-500 mt-10">
        No products found for this vendor.
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {shopName} - Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="product-wrap">
            <div className="product text-center">
              <figure className="product-media" style={{ maxWidth: "100%", display: "flex", justifyContent: "center" }}>
                <a href={`/product/${product._id}`}>
                  <img
                    src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split('\\').pop()}`}
                    alt={product.name}
                    style={{ width: "300px", height: "200px", objectFit: "cover" }} // Explicit size increase
                  />
                </a>
                <div className="product-action-vertical">
                  <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                  <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></a>
                  <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></a>
                  <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View"></a>
                </div>
              </figure>
              <div className="product-details">
                <h3 className="product-name">
                  <a href={`/product/${product._id}`}>{product.name}</a>
                </h3>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "100%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <a href={`/product/${product._id}`} className="rating-reviews">
                    ({product.reviews?.length || 0} reviews)
                  </a>
                </div>
                <div className="product-pa-wrapper">
                  <div className="product-price">
                    {product.discountedPrice ? (
                      <>
                        <ins className="new-price">${product.discountedPrice}</ins>
                        <del className="old-price">${product.price}</del>
                      </>
                    ) : (
                      `$${product.price}`
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorProducts;



// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";

// const VendorProducts = () => {
//   const { shopName } = useParams();
//   console.log("Shop Name:", shopName); // Debug log

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchVendorProducts = async () => {
//       try {
//         const encodedShopName = encodeURIComponent(shopName); // Encode spaces and special characters
//         const response = await axios.get(
//           `${BACKENDURL}/api/v1/product/vendor/${encodedShopName}`
//         );

//         setProducts(response.data.data);
//       } catch (err) {
//         setError("Failed to load products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVendorProducts();
//   }, [shopName]);

//   if (loading)
//     return <div className="text-center text-lg mt-10">Loading products...</div>;
//   if (error)
//     return <div className="text-center text-red-500 mt-10">{error}</div>;
//   if (products.length === 0)
//     return (
//       <div className="text-center text-gray-500 mt-10">
//         No products found for this vendor.
//       </div>
//     );

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//         {shopName} - Products
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="product-wrap">
//             <div className="product text-center">
//               <figure className="product-media" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
//                 <a href={`/product/${product._id}`} style={{ width: "100%" }}
//                   <img
//                     src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split('\\').pop()}`}
//                     alt={product.name}
//                     style={{
//                       width: "100%",  // Expands to full width of parent
//                       maxWidth: "400px", // Prevents over-expansion
//                       height: "200px", // Increased height
//                       objectFit: "cover",
//                     }}
//                   />
//                 </a>
//                 <div className="product-action-vertical">
//                   <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
//                   <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></a>
//                   <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></a>
//                   <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View"></a>
//                 </div>
//               </figure>
//               <div className="product-details">
//                 <h3 className="product-name">
//                   <a href={`/product/${product._id}`}>{product.name}</a>
//                 </h3>
//                 <div className="ratings-container">
//                   <div className="ratings-full">
//                     <span className="ratings" style={{ width: "100%" }}></span>
//                     <span className="tooltiptext tooltip-top"></span>
//                   </div>
//                   <a href={`/product/${product._id}`} className="rating-reviews">
//                     ({product.reviews?.length || 0} reviews)
//                   </a>
//                 </div>
//                 <div className="product-pa-wrapper">
//                   <div className="product-price">
//                     {product.discountedPrice ? (
//                       <>
//                         <ins className="new-price">${product.discountedPrice}</ins>
//                         <del className="old-price">${product.price}</del>
//                       </>
//                     ) : (
//                       `$${product.price}`
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VendorProducts;




// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";

// const VendorProducts = () => {
//   const { shopName } = useParams();
//   console.log("Shop Name:", shopName);

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchVendorProducts = async () => {
//       try {
//         const encodedShopName = encodeURIComponent(shopName);
//         const response = await axios.get(
//           `${BACKENDURL}/api/v1/product/vendor/${encodedShopName}`
//         );

//         setProducts(response.data.data);
//       } catch (err) {
//         setError("Failed to load products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVendorProducts();
//   }, [shopName]);

//   if (loading)
//     return <div className="text-center text-lg mt-10">Loading products...</div>;
//   if (error)
//     return <div className="text-center text-red-500 mt-10">{error}</div>;
//   if (products.length === 0)
//     return (
//       <div className="text-center text-gray-500 mt-10">
//         No products found for this vendor.
//       </div>
//     );

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//         {shopName} - Products
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="product-wrap">
//             <div className="product text-center">
//               <figure
//                 className="product-media"
//                 style={{
//                   width: "100%", // Ensures full width
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <a href={`/product/${product._id}`} style={{ width: "100%" }}>
//                   <img
//                     src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split('\\').pop()}`}
//                     alt={product.name}
//                     style={{
//                       width: "500px", // Increase width
//                       maxWidth: "100%", // Ensures responsiveness
//                       height: "300px", // Adjusted height
//                       objectFit: "cover",
//                       display: "block",
//                     }}
//                   />
//                 </a>
//                 <div className="product-action-vertical">
//                   <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
//                   <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></a>
//                   <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></a>
//                   <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View"></a>
//                 </div>
//               </figure>
//               <div className="product-details">
//                 <h3 className="product-name">
//                   <a href={`/product/${product._id}`}>{product.name}</a>
//                 </h3>
//                 <div className="ratings-container">
//                   <div className="ratings-full">
//                     <span className="ratings" style={{ width: "100%" }}></span>
//                     <span className="tooltiptext tooltip-top"></span>
//                   </div>
//                   <a href={`/product/${product._id}`} className="rating-reviews">
//                     ({product.reviews?.length || 0} reviews)
//                   </a>
//                 </div>
//                 <div className="product-pa-wrapper">
//                   <div className="product-price">
//                     {product.discountedPrice ? (
//                       <>
//                         <ins className="new-price">${product.discountedPrice}</ins>
//                         <del className="old-price">${product.price}</del>
//                       </>
//                     ) : (
//                       `$${product.price}`
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VendorProducts;
