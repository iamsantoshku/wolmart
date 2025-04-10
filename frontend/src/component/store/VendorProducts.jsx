


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
//               <figure className="product-media" style={{ maxWidth: "100%", display: "flex", justifyContent: "center" }}>
//                 <a href={`/product/${product._id}`}>
//                   <img
//                     src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split('\\').pop()}`}
//                     alt={product.name}
//                     style={{ width: "300px", height: "200px", objectFit: "cover" }} // Explicit size increase
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
// import addToWishlist from "../../helpers/addToWishlist"; // Import the wishlist helper

// const VendorProducts = () => {
//   const { shopName } = useParams();
//   console.log("Shop Name:", shopName); // Debug log

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
//                   maxWidth: "100%",
//                   display: "flex",
//                   justifyContent: "center",
//                   position: "relative",
//                 }}
//               >
//                 <a href={`/product/${product._id}`}>
//                   <img
//                     src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split("\\").pop()}`}
//                     alt={product.name}
//                     style={{ width: "300px", height: "200px", objectFit: "cover" }}
//                   />
//                 </a>

//                 {/* Action buttons */}


{/* <div className="product-action-vertical">
                   <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                   <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist" onClick={(e) => addToWishlist(e, product._id)}></a>
                   <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></a>
                   <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View"></a>
                 </div> */}
//               </figure>

//               <div className="product-details mt-4">
//                 <h3 className="product-name font-semibold text-lg">
//                   <a href={`/product/${product._id}`}>{product.name}</a>
//                 </h3>

//                 <div className="ratings-container text-sm text-gray-600 mt-1">
//                   <div className="ratings-full">
//                     <span className="ratings" style={{ width: "100%" }}></span>
//                     <span className="tooltiptext tooltip-top"></span>
//                   </div>
//                   <a href={`/product/${product._id}`} className="rating-reviews ml-2">
//                     ({product.reviews?.length || 0} reviews)
//                   </a>
//                 </div>

//                 <div className="product-pa-wrapper mt-2">
//                   <div className="product-price text-lg font-medium text-gray-900">
//                     {product.discountedPrice ? (
//                       <>
//                         <ins className="new-price text-black mr-2">${product.discountedPrice}</ins>
//                         <del className="old-price text-gray-500">${product.price}</del>
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
import addToWishlist from "../../helpers/addToWishlist";

const VendorProducts = () => {
  const { shopName } = useParams();
  console.log("Shop Name:", shopName);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendorProducts = async () => {
      try {
        const encodedShopName = encodeURIComponent(shopName);
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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="product-wrap">
            <div className="product text-center">
              <figure
                className="product-media"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <a href={`/product/${product.name}`}>
                  <img
                    src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split("\\").pop()}`}
                    alt={product.name}

                    className="w-full sm:w-[300px] h-[250px] object-cover"
                  />
                </a>

                {/* Action buttons: vertical for all screens */}


                <div className="product-action-vertical absolute top-2 right-4 flex flex-col gap-2">
                  <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                  <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist" onClick={(e) => addToWishlist(e, product._id)}></a>

                </div>
              </figure>

              <div className="product-details mt-4">
                <h3 className="product-name font-semibold text-lg">
                  <a href={`/product/${product._id}`}>{product.name}</a>
                </h3>

                <div className="ratings-container text-sm text-gray-600 mt-1">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "100%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <a
                    href={`/product/${product.name}`}
                    className="rating-reviews ml-2"
                  >
                    ({product.reviews?.length || 0} reviews)
                  </a>
                </div>

                <div className="product-pa-wrapper mt-2">
                  <div className="product-price text-lg font-medium text-gray-900">
                    {product.discountedPrice ? (
                      <>
                        <ins className="new-price text-black mr-2">
                          ${product.discountedPrice}
                        </ins>
                        <del className="old-price text-gray-500">
                          ${product.price}
                        </del>
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
