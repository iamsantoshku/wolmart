// import React from 'react'

// const Storesli = () => {
//   return (
//     <div class="store store-list mt-4">
//                         <div class="store-header">
//                             <a href="vendor-dokan-store.html">
//                                 <figure class="store-banner">
//                                     <img src="assets/images/vendor/dokan/1.jpg" alt="Vendor" 
//                                         width="400" height="188" style="background-color: #40475E" />
//                                 </figure>
//                             </a>
//                             <label class="featured-label">Featured</label>
//                         </div>
//                         <!-- End of Store Header -->
//                         <div class="store-content">
//                             <figure class="seller-brand">
//                                 <img src="assets/images/vendor/brand/1.jpg" alt="Brand" width="80" height="80" />
//                             </figure>
//                             <div class="seller-date">
//                                 <h4 class="store-title">
//                                     <a href="vendor-dokan-store.html">Vendor 1</a>
//                                 </h4>
//                                 <div class="ratings-container">
//                                     <div class="ratings-full">
//                                         <span class="ratings" style="width: 100%;"></span>
//                                         <span class="tooltiptext tooltip-top"></span>
//                                     </div>
//                                 </div>
//                                 <div class="store-address">
//                                     Steven Street, El Carjon
//                                     California, United States (US)
//                                 </div>
//                                 <a href="vendor-dokan-store.html" class="btn btn-dark btn-link btn-underline btn-icon-right btn-visit">
//                                     Visit Store<i class="w-icon-long-arrow-right"></i></a>
//                             </div>
//                         </div>
                       
//                     </div>
                   
//                     <div class="store store-list mt-4">
//                         <div class="store-header">
//                             <a href="vendor-dokan-store.html">
//                                 <figure class="store-banner">
//                                     <img src="assets/images/vendor/dokan/2.jpg" alt="Vendor" 
//                                         width="400" height="188" style="background-color: #5D5D5D" />
//                                 </figure>
//                             </a>
//                         </div>
                       
//                         <div class="store-content">
//                             <figure class="seller-brand">
//                                 <img src="assets/images/vendor/brand/2.jpg" alt="Brand" width="80" height="80" />
//                             </figure>
//                             <div class="seller-date">
//                                 <h4 class="store-title">
//                                     <a href="vendor-dokan-store.html">Vendor 2</a>
//                                 </h4>
//                                 <div class="ratings-container">
//                                     <div class="ratings-full">
//                                         <span class="ratings" style="width: 100%;"></span>
//                                         <span class="tooltiptext tooltip-top"></span>
//                                     </div>
//                                 </div>
//                                 <div class="store-address">
//                                     London, United Kingdom (UK)
//                                 </div>
//                                 <a href="vendor-dokan-store.html" class="btn btn-dark btn-link btn-underline btn-icon-right btn-visit">
//                                     Visit Store<i class="w-icon-long-arrow-right"></i></a>
//                             </div>
//                         </div>
                     
//                     </div>
//   )
// }

// export default Storesli



// import React, { useEffect, useState } from "react";

// import { BACKENDURL } from "../../config/config";

// const Storesli = () => {
//   const [stores, setStores] = useState([]);

//   useEffect(() => {
//     const fetchStores = async () => {
//       try {
//         const response = await fetch(BACKENDURL + "/api/v1/vendor/stores");
//         const data = await response.json();
//         if (response.ok) {
//           setStores(data.stores);
//         } else {
//           console.error("Failed to fetch stores:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching stores:", error);
//       }
//     };

//     fetchStores();
//   }, []);

//   return (
//     <>
//       {stores.length > 0 ? (
//         stores.map((store) => (
//           <div className="store store-list mt-4" key={store._id}>
//             <div className="store-header">
//               <a href={store.shopUrl}>
//                 <figure className="store-banner">
//                   <img
//                     src={store.bgimage}
//                     alt={store.shopName}
//                     width="400"
//                     height="188"
//                     style={{ backgroundColor: "#5D5D5D" }}
//                   />
//                 </figure>
//               </a>
//             </div>
//             {/* End of Store Header */}
//             <div className="store-content">
//               <figure className="seller-brand">
//                 <img src={store.logo} alt="Brand" width="80" height="80" />
//               </figure>
//               <div className="seller-date">
//                 <h4 className="store-title">
//                   <a href={store.shopUrl}>{store.shopName}</a>
//                 </h4>
//                 <div className="ratings-container">
//                   <div className="ratings-full">
//                     <span className="ratings" style={{ width: "100%" }}></span>
//                     <span className="tooltiptext tooltip-top"></span>
//                   </div>
//                 </div>
//                 <div className="store-address">
//                   {store.description}
//                 </div>
//                 <a
//                   href={store.shopUrl}
//                   className="btn btn-dark btn-link btn-underline btn-icon-right btn-visit"
//                 >
//                   Visit Store<i className="w-icon-long-arrow-right"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No stores available</p>
//       )}
//     </>
//   );
// };

// export default Storesli;



// import React, { useEffect, useState } from "react";
// import { BACKENDURL } from "../../config/config";

// const Storesli = () => {
//   const [stores, setStores] = useState([]);

//   useEffect(() => {
//     const fetchStores = async () => {
//       try {
//         const response = await fetch(BACKENDURL + "/api/v1/vendor/stores");
//         const data = await response.json();
//         if (response.ok) {
//           setStores(data.stores);
//         } else {
//           console.error("Failed to fetch stores:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching stores:", error);
//       }
//     };

//     fetchStores();
//   }, []);

//   return (
//     <>
//       {stores.length > 0 ? (
//         stores.map((store) => (
//           <div className="store store-list mt-4" key={store._id}>
//             <div className="store-header">
//               <a href={store.shopUrl}>
//                 <figure className="store-banner">
//                   <img
//                     src={`${BACKENDURL}${store.bgimage}`} // Correct image path
//                     alt={store.shopName}
//                     width="400"
//                     height="188"
//                     style={{ backgroundColor: "#5D5D5D" }}
//                   />
//                 </figure>
//               </a>
//             </div>
//             {/* End of Store Header */}
//             <div className="store-content">
//               <figure className="seller-brand">
//                 <img
//                   src={`${BACKENDURL}${store.logo}`} // Correct logo path
//                   alt="Brand"
//                   width="80"
//                   height="80"
//                 />
//               </figure>
//               <div className="seller-date">
//                 <h4 className="store-title">
//                   <a href={store.shopUrl}>{store.shopName}</a>
//                 </h4>
//                 <div className="ratings-container">
//                   <div className="ratings-full">
//                     <span className="ratings" style={{ width: "100%" }}></span>
//                     <span className="tooltiptext tooltip-top"></span>
//                   </div>
//                 </div>
//                 <div className="store-address">{store.description}</div>
//                 <a
//                   href="/vendor/:shopName"
//                 //   href={store.shopUrl}
//                   className="btn btn-dark btn-link btn-underline btn-icon-right btn-visit"
//                 >
//                   Visit Store<i className="w-icon-long-arrow-right"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No stores available</p>
//       )}
//     </>
//   );
// };

// export default Storesli;





import React, { useEffect, useState } from "react";
import { BACKENDURL } from "../../config/config";
import { Link } from "react-router-dom";

const Storesli = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(`${BACKENDURL}/api/v1/vendor/stores`);
        const data = await response.json();
        if (response.ok) {
          setStores(data.stores);
        } else {
          console.error("Failed to fetch stores:", data.message);
        }
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);

  return (
    <>
      {stores.length > 0 ? (
        stores.map((store) => (
          <div className="store store-list mt-4" key={store._id}>
            <div className="store-header">
              <a href={store.shopUrl}>
                <figure className="store-banner">
                  <img
                    src={`${BACKENDURL}${store.bgimage}`} 
                    alt={store.shopName}
                    width="400"
                    height="188"
                    style={{ backgroundColor: "#5D5D5D" }}
                  />
                </figure>
              </a>
            </div>
            <div className="store-content">
              <figure className="seller-brand">
                <img
                  src={`${BACKENDURL}${store.logo}`} 
                  alt="Brand"
                  width="80"
                  height="80"
                />
              </figure>
              <div className="seller-date">
                <h4 className="store-title">
                  <a href={store.shopUrl}>{store.shopName}</a>
                </h4>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "100%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                </div>
                <div className="store-address">{store.description}</div>
                <Link
                  to={`/vendor/${store.shopName}`} 
                  className="btn btn-dark btn-link btn-underline btn-icon-right btn-visit"
                >
                  Visit Store <i className="w-icon-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No stores available</p>
      )}
    </>
  );
};

export default Storesli;
