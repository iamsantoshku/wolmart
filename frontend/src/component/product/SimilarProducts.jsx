



// import { useEffect, useState } from "react";
// import { BACKENDURL } from "../../config/config";

// const SimilarProducts = ({ productId }) => {
//   const [similarProducts, setSimilarProducts] = useState([]);

//   useEffect(() => {
//     if (!productId) {
//       console.error("❌ No productId provided to SimilarProducts component.");
//       return;
//     }

//     const fetchSimilarProducts = async () => {
//       try {
//         // console.log("✅ Fetching similar products for productId:", productId);

//         const response = await fetch(
//           `${BACKENDURL}/api/v1/product/products/${productId}/similar`
//         );

//         const data = await response.json();
//         // console.log("✅ API Response:", data);

//         if (data.success && Array.isArray(data.data)) {
//           setSimilarProducts(data.data);
//         } else {
//           console.warn("⚠️ Unexpected API response format:", data);
//           setSimilarProducts([]);
//         }
//       } catch (error) {
//         console.error("❌ Error fetching similar products:", error);
//       }
//     };

//     fetchSimilarProducts();
//   }, [productId]);

//   return (
//     <div className="p-6 bg-gray-100 rounded-lg">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Similar Products</h2>
//       {similarProducts.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {similarProducts.map((product) => (
//             <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//               {/* <img
//                 src={
//                   product.images?.length > 0 && product.images[0].urls.length > 0
//                     ? `/uploads/product/${product.images[0].urls[0].split("\\").pop()}`
//                     : "https://via.placeholder.com/300"
//                 }
//                 alt={product.name}
//                 className="w-full h-40 object-cover"
//               /> */}

//               <img
//                                     src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split("\\").pop()}`}
//                                     alt="Product"
//                                     className="w-full h-[260px] object-cover rounded-lg"
//                                   />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
//                 <p className="text-gray-600">Price: ₹{product.price}</p>
//                 <p className="text-gray-500 text-sm">Stock: {product.stock} available</p>
//                 <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//                   View Product
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-600">No similar products found.</p>
//       )}
//     </div>
//   );
// };

// export default SimilarProducts;



import { useEffect, useState } from "react";
import { BACKENDURL } from "../../config/config";
import { Link } from "react-router-dom";

const SimilarProducts = ({ name }) => {
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    if (!name) {
      console.error("❌ No productId provided to SimilarProducts component.");
      return;
    }

    const fetchSimilarProducts = async () => {
      try {
        // console.log("✅ Fetching similar products for productId:", productId);

        const response = await fetch(
          `${BACKENDURL}/api/v1/product/products/${name}/similar`
        );

        const data = await response.json();
        // console.log("✅ API Response:", data);

        if (data.success && Array.isArray(data.data)) {
          setSimilarProducts(data.data);
        } else {
          console.warn("⚠️ Unexpected API response format:", data);
          setSimilarProducts([]);
        }
      } catch (error) {
        console.error("❌ Error fetching similar products:", error);
      }
    };

    fetchSimilarProducts();
  }, [name]);

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Similar Products</h2>
      {similarProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <Link to={`/product/${product.name}`} className="block">
              <img
                src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split("\\").pop()}`}
                alt="Product"
                className="w-full h-[260px] object-cover rounded-lg"
              />

              </Link>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                <p className="text-gray-600">Price: ₹{product.price}</p>
                <p className="text-gray-500 text-sm">Stock: {product.stock} available</p>
                <Link to={`/product/${product.name}`} className="block">
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  View Product
                </button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No similar products found.</p>
      )}
    </div>
  );
};

export default SimilarProducts;
