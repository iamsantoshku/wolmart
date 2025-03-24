// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";

// const Shopcategory = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div className="shop-default-category category-ellipse-section mb-6">
//       <div className="swiper-container swiper-theme shadow-swiper"
//         data-swiper-options="{
//           'spaceBetween': 20,
//           'slidesPerView': 2,
//           'breakpoints': {
//             '480': { 'slidesPerView': 3 },
//             '576': { 'slidesPerView': 4 },
//             '768': { 'slidesPerView': 6 },
//             '992': { 'slidesPerView': 7 },
//             '1200': { 'slidesPerView': 8, 'spaceBetween': 30 }
//           }
//         }"
//       >
//         <div className="swiper-wrapper row gutter-lg cols-xl-8 cols-lg-7 cols-md-6 cols-sm-4 cols-xs-3 cols-2">
//           {categories.length > 0 ? (
//             categories.map((category) => {
//               // Construct image URL or fallback
//               const imageUrl = category.logo
//                 ? `${BACKENDURL}${category.logo}`
//                 : "/assets/images/shop/default-category.jpg"; 

//               return (
//                 <div key={category._id} className="swiper-slide category-wrap">
//                   <div className="category category-ellipse">
//                     <figure className="category-media">
//                       <a href={`/category/${category._id}`}>
//                         <img
//                           src={imageUrl}
//                           alt={category.name}
//                           width="190"
//                           height="190"
//                           style={{ objectFit: "cover", backgroundColor: "#f5f5f5", borderRadius: "50%" }}
//                           onError={(e) => { e.target.src = "/assets/images/shop/default-category.jpg"; }} 
//                         />
//                       </a>
//                     </figure>
//                     <div className="category-content">
//                       <h4 className="category-name">
//                         <a href={`/category/${category._id}`}>{category.name}</a>
//                       </h4>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           ) : (
//             <p>Loading categories...</p>
//           )}
//         </div>
//         <div className="swiper-pagination"></div>
//       </div>
//     </div>
//   );
// };

// export default Shopcategory;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";

// const Shopcategory = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div className="shop-default-category category-ellipse-section mb-6">
//       <div
//         className="swiper-container swiper-theme shadow-swiper"
//         data-swiper-options="{
//           'spaceBetween': 20,
//           'slidesPerView': 2,
//           'breakpoints': {
//             '480': { 'slidesPerView': 3 },
//             '576': { 'slidesPerView': 4 },
//             '768': { 'slidesPerView': 6 },
//             '992': { 'slidesPerView': 7 },
//             '1200': { 'slidesPerView': 8, 'spaceBetween': 30 }
//           }
//         }"
//       >
//         <div className="swiper-wrapper row gutter-lg cols-xl-8 cols-lg-7 cols-md-6 cols-sm-4 cols-xs-3 cols-2">
//           {categories.length > 0 ? (
//             categories.map((category) => {
//               const imageUrl = category.logo
//                 ? `${BACKENDURL}${category.logo}`
//                 : "/assets/images/shop/default-category.jpg";

//               return (
//                 <div key={category._id} className="swiper-slide category-wrap">
//                   <div className="category category-ellipse">
//                     <figure className="category-media">
//                       <a href={`/category/${category._id}`}>
//                         <img
//                           src={imageUrl}
//                           alt={category.name}
//                           width="190"
//                           height="190"
//                           style={{
//                             width: "190px",
//                             height: "190px",
//                             objectFit: "cover",
//                             borderRadius: "50%",
//                             backgroundColor: "#f5f5f5"
//                           }}
//                           onError={(e) => { e.target.src = "/assets/images/shop/default-category.jpg"; }} 
//                         />
//                       </a>
//                     </figure>
//                     <div className="category-content">
//                       <h4 className="category-name">
//                         <a href={`/category/${category._id}`}>{category.name}</a>
//                       </h4>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           ) : (
//             <p>Loading categories...</p>
//           )}
//         </div>
//         <div className="swiper-pagination"></div>
//       </div>
//     </div>
//   );
// };

// export default Shopcategory;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";

// const Shopcategory = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div className="shop-default-category category-ellipse-section mb-6">
//       <div
//         className="swiper-container swiper-theme shadow-swiper"
//         data-swiper-options="{
//           'spaceBetween': 20,
//           'slidesPerView': 2,
//           'breakpoints': {
//             '480': { 'slidesPerView': 3 },
//             '576': { 'slidesPerView': 4 },
//             '768': { 'slidesPerView': 6 },
//             '992': { 'slidesPerView': 7 },
//             '1200': { 'slidesPerView': 8, 'spaceBetween': 30 }
//           }
//         }"
//       >
//         <div className="swiper-wrapper row gutter-lg cols-xl-8 cols-lg-7 cols-md-6 cols-sm-4 cols-xs-3 cols-2">
//           {categories.length > 0 ? (
//             categories.map((category) => {
//               const imageUrl = category.logo
//                 ? `${BACKENDURL}${category.logo}`
//                 : "/assets/images/shop/default-category.jpg";

//               return (
//                 <div key={category._id} className="swiper-slide category-wrap">
//                   <div className="category category-ellipse">
//                     <figure className="category-media">
//                       <a href={`/category/${category._id}`}>
//                         <img
//                           src={imageUrl}
//                           alt={category.name}
//                           width="190"
//                           height="190"
//                           style={{
//                             width: "190px",
//                             height: "190px",
//                             objectFit: "cover",
//                             borderRadius: "50%",
//                             backgroundColor: "#f5f5f5"
//                           }}
//                           onError={(e) => { e.target.src = "/assets/images/shop/default-category.jpg"; }} 
//                         />
//                       </a>
//                     </figure>
//                     <div className="category-content">
//                       <h4 className="category-name">
//                         <a href={`/category/${category._id}`}>{category.name}</a>
//                       </h4>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           ) : (
//             <p>Loading categories...</p>
//           )}
//         </div>
//         <div className="swiper-pagination"></div>
//       </div>
//     </div>
//   );
// };

// export default Shopcategory;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";

// const ShopCategory = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div className="container mx-auto py-8">
//       <h2 className="text-2xl font-semibold text-center mb-6">Shop by Category</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 px-4">
//         {categories.length > 0 ? (
//           categories.map((category) => {
//             const imageUrl = category.logo
//               ? `${BACKENDURL}${category.logo}`
//               : "/assets/images/shop/default-category.jpg";

//             return (
//               <div key={category._id} className="flex flex-col items-center">
//                 <a
//                   href={`/category/${category._id}`}
//                   className="group block w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-gray-200 shadow-md transition-transform transform hover:scale-110"
//                 >
//                   <img
//                     src={imageUrl}
//                     alt={category.name}
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.target.src = "/assets/images/shop/default-category.jpg";
//                     }}
//                   />
//                 </a>
//                 <h4 className="mt-2 text-sm md:text-base font-medium text-center">
//                   <a
//                     href={`/category/${category._id}`}
//                     className="text-gray-700 hover:text-blue-500 transition-colors"
//                   >
//                     {category.name}
//                   </a>
//                 </h4>
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">Loading categories...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ShopCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Shop by Category</h2>
      {categories.length > 0 ? (
        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={20}
          navigation
          breakpoints={{
            320: { slidesPerView: 2 }, 
            480: { slidesPerView: 3 }, 
            768: { slidesPerView: 4 }, 
            1024: { slidesPerView: 5 }, 
            1280: { slidesPerView: 6 }
          }}
          className="relative"
        >
          {categories.map((category) => {
            const imageUrl = category.logo
              ? `${BACKENDURL}${category.logo}`
              : "/assets/images/shop/default-category.jpg";

            return (
              <SwiperSlide key={category._id} className="flex flex-col items-center">
                <a
                  href={`/category/${category._id}`}
                  className="group block w-44 h-44 md:w-37 md:h-37 rounded-full overflow-hidden border border-gray-200 shadow-md transition-transform transform hover:scale-110"
                >
                  <img
                    src={imageUrl}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/assets/images/shop/default-category.jpg";
                    }}
                  />
                </a>
                <h4 className="mt-2 text-sm md:text-base font-medium text-center">
                  <a
                    href={`/category/${category._id}`}
                    className="text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    {category.name}
                  </a>
                </h4>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500">Loading categories...</p>
      )}
    </div>
  );
};

export default ShopCategory;
