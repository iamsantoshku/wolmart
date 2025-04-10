// import React from 'react'

// const Categorybanner = () => {
//   return (
//     <div>
//         <div className="shop-default-banner banner d-flex align-items-center mb-5 br-xs"
//                         style="background-image: url(assets/images/shop/banner1.jpg); background-color: #FFC74E;">
//                         <div className="banner-content">
//                             <h4 className="banner-subtitle font-weight-bold">Accessories Collection</h4>
//                             <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-normal">Smart Wrist
//                                 Watches</h3>
//                             <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded btn-icon-right">Discover
//                                 Now<i className="w-icon-long-arrow-right"></i></a>
//                         </div>
//                     </div>
//                     {/* <!-- End of Shop Banner --> */}

//                     <div className="shop-default-brands mb-5">
//                         <div className="brands-swiper swiper-container swiper-theme "
//                             data-swiper-options="{
//                                 'slidesPerView': 2,
//                                 'breakpoints': {
//                                     '576': {
//                                         'slidesPerView': 3
//                                     },
//                                     '768': {
//                                         'slidesPerView': 4
//                                     },
//                                     '992': {
//                                         'slidesPerView': 6
//                                     },
//                                     '1200': {
//                                         'slidesPerView': 7
//                                     }
//                                 },
//                                 'autoplay': {
//                                     'delay': 4000,
//                                     'disableOnInteraction': false
//                                 }
//                             }">
//                             <div className="swiper-wrapper row gutter-no cols-xl-7 cols-lg-6 cols-md-4 cols-sm-3 cols-2">
//                                 <div className="swiper-slide">
//                                     <figure>
//                                         <img src="assets/images/brands/category/1.png" alt="Brand" width="160" height="90" />
//                                     </figure>
//                                 </div>
//                                 <div className="swiper-slide">
//                                     <figure>
//                                         <img src="assets/images/brands/category/2.png" alt="Brand" width="160" height="90" />
//                                     </figure>
//                                 </div>
//                                 <div className="swiper-slide">
//                                     <figure>
//                                         <img src="assets/images/brands/category/3.png" alt="Brand" width="160" height="90" />
//                                     </figure>
//                                 </div>
//                                 <div className="swiper-slide">
//                                     <figure>
//                                         <img src="assets/images/brands/category/4.png" alt="Brand" width="160" height="90" />
//                                     </figure>
//                                 </div>
//                                 <div className="swiper-slide">
//                                     <figure>
//                                         <img src="assets/images/brands/category/5.png" alt="Brand" width="160" height="90" />
//                                     </figure>
//                                 </div>
//                                 <div className="swiper-slide">
//                                     <figure>
//                                         <img src="assets/images/brands/category/6.png" alt="Brand" width="160" height="90" />
//                                     </figure>
//                                 </div>
//                                 <div className="swiper-slide">
//                                     <figure>
//                                         <img src="assets/images/brands/category/7.png" alt="Brand" width="160" height="90" />
//                                     </figure>
//                                 </div>
//                             </div>
//                             <div className="swiper-pagination"></div>
//                         </div>
//                     </div>      
//     </div>
//   )
// }

// export default Categorybanner



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";
// // import "./Categorybanner.css"; // 🔹 Import CSS for styling

// const Categorybanner = () => {
//   const [stores, setStores] = useState([]);

//   useEffect(() => {
//     const fetchStores = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/vendor/stores`);
//         setStores(response.data.stores); // 🔹 Ensure API returns an array of stores
//       } catch (error) {
//         console.error("Error fetching stores:", error);
//       }
//     };

//     fetchStores();
//   }, []);

//   return (
//     <div>
//       {/* 🔹 Shop Banner Section */}
//       <div
//         className="shop-default-banner banner d-flex align-items-center mb-5 br-xs"
//         style={{
//           backgroundImage: `url(${BACKENDURL}/assets/images/shop/banner1.jpg)`,
//           backgroundColor: "#FFC74E",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="banner-content">
//           <h4 className="banner-subtitle font-weight-bold">Accessories Collection</h4>
//           <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-normal">
//             Smart Wrist Watches
//           </h3>
//           <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded btn-icon-right">
//             Discover Now <i className="w-icon-long-arrow-right"></i>
//           </a>
//         </div>
//       </div>

//       {/* 🔹 Store Brands Swiper */}
//       <div className="shop-default-brands mb-5">
//         <div className="brands-swiper swiper-container swiper-theme">
//           <div className="swiper-wrapper row gutter-no cols-xl-7 cols-lg-6 cols-md-4 cols-sm-3 cols-2">
//             {stores.length > 0 ? (
//               stores.map((store) => {
//                 const imageUrl = store.logo
//                   ? `${BACKENDURL}${store.logo}`
//                   : "/assets/images/shop/default-brand.png"; // 🔹 Default image if logo is missing

//                 return (
//                   <div key={store._id} className="swiper-slide">
//                     <figure>
//                       <img
//                         src={imageUrl}
//                         alt={store.name}
//                         width="160"
//                         height="90"
//                         className="brand-image"
//                         onError={(e) => {
//                           e.target.src = "/assets/images/shop/default-brand.png"; // 🔹 Fallback for broken images
//                         }}
//                       />
//                     </figure>
//                   </div>
//                 );
//               })
//             ) : (
//               <p>Loading stores...</p>
//             )}
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categorybanner;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CategoryBanner = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/vendor/stores`);
        setStores(response.data.stores || []); // Ensure an array is returned
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);

  return (
    <div className="container mx-auto py-8">
      {/* 🔹 Banner Section */}
      <div
        className="relative flex items-center justify-center bg-yellow-400 h-60 md:h-72 lg:h-80 rounded-md shadow-md overflow-hidden"
        style={{
          backgroundImage: `/assets/images/shop/banner1.jpg`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        // style="background-image: url(assets/images/shop/banner1.jpg); background-color: #FFC74E;">
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h4 className="text-lg md:text-xl font-semibold">Accessories Collection</h4>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
            Smart Wrist Watches
          </h3>
          <a
            href="shop-banner-sidebar.html"
            className="mt-4 inline-block px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition"
          >
            Discover Now →
          </a>
        </div>
      </div>

      {/* 🔹 Store Brands Slider */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-center mb-6">Top Brands</h2>
        {stores.length > 0 ? (
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
              1280: { slidesPerView: 6 },
            }}
            className="relative"
          >
            {stores.map((store) => {
              const imageUrl = store.logo
                ? `${BACKENDURL}${store.logo}`
                : "/assets/images/shop/default-brand.png"; // Default image

              return (
                <SwiperSlide key={store._id} className="flex justify-center">
                  <figure className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center border border-gray-200 rounded-md shadow-md bg-white hover:shadow-lg transition">
                    <a href={`/vendor/${store.shopName}`}>
                    <img
                      src={imageUrl}
                      alt={store.name}
                                    
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = "/assets/images/shop/default-brand.png";
                      }}
                    />
                    </a>
                    {/* <img
                      src={imageUrl}
                      alt={store.name}
                     
                
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = "/assets/images/shop/default-brand.png";
                      }}
                    /> */}
                  </figure>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500">Loading stores...</p>
        )}
      </div>
    </div>
  );
};

export default CategoryBanner;
