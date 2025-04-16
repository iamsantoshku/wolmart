// import React from 'react'

// const Storebanner = () => {
//   return (
//     <div class="store store-banner mb-4">
//     <figure class="store-media">
//         <img src="assets/images/vendor/dokan/1.jpg" alt="Vendor" width="930" height="446"
//             style="background-color: #414960;" />
//     </figure>
//     <div class="store-content">
//         <figure class="seller-brand">
//             <img src="assets/images/vendor/brand/1.jpg" alt="Brand" width="80"
//                 height="80" />
//         </figure>
//         <h4 class="store-title">Vendor 1</h4>
//         <ul class="seller-info-list list-style-none mb-6">
//             <li class="store-address">
//                 <i class="w-icon-map-marker"></i>
//                 Steven Street, El Carjon
//                 California, United States (US)
//             </li>
//             <li class="store-phone">
//                 <a href="tel:1234567890">
//                     <i class="w-icon-phone"></i>
//                     1234567890
//                 </a>
//             </li>
//             <li class="store-rating">
//                 <i class="w-icon-star-full"></i>
//                 4.33 rating from 3 reviews
//             </li>
//             <li class="store-open">
//                 <i class="w-icon-cart"></i>
//                 Store Open
//             </li>
//         </ul>
//         <div class="social-icons social-no-color border-thin">
//             <a href="#" class="social-icon social-facebook w-icon-facebook"></a>
//             <a href="#" class="social-icon social-google w-icon-google"></a>
//             <a href="#" class="social-icon social-twitter w-icon-twitter"></a>
//             <a href="#" class="social-icon social-pinterest w-icon-pinterest"></a>
//             <a href="#" class="social-icon social-youtube w-icon-youtube"></a>
//             <a href="#" class="social-icon social-instagram w-icon-instagram"></a>
//         </div>
//     </div>
// </div>
//   )
// }

// export default Storebanner



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKENDURL } from "../../config/config";

const StoreBanner = () => {
  const { shopName } = useParams(); // Get shop name from URL params
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        const encodedShopName = encodeURIComponent(shopName);
        const response = await axios.get(`${BACKENDURL}/api/v1/vendor/store/${encodedShopName}`);
        
        setStore(response.data.data);
      } catch (err) {
        setError("Failed to load store details");
      } finally {
        setLoading(false);
      }
    };

    fetchStoreDetails();
  }, [shopName]);

  if (loading) return <div className="text-center text-lg mt-10">Loading store details...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;
  if (!store) return <div className="text-center text-gray-500 mt-10">Store not found</div>;

  return (
    <div className="store store-banner mb-4">
      <figure className="store-media">
        <img
          src={store.bannerImage || "/assets/images/vendor/dokan/1.jpg"}
          alt={store.shopName}
          width="930"
          height="446"
          style={{ backgroundColor: "#414960" }}
        />
  
      </figure>
      <div className="store-content">
        <figure className="seller-brand">
          
          <img
                            src={`${BACKENDURL}${store.logo}`} 
                            alt="Brand"
                            width="80"
                            height="80"
                          />
        </figure>
        <h4 className="store-title">{store.shopName}</h4>
        <ul className="seller-info-list list-style-none mb-6">
          <li className="store-address">
            <i className="w-icon-map-marker"></i>
            {store.address || "Address not available"}
          </li>
          <li className="store-phone">
            <a href={`tel:${store.phone || "N/A"}`}>
              <i className="w-icon-phone"></i>
              {store.phone || "9876654333"}
            </a>
          </li>
          <li className="store-rating">
            <i className="w-icon-star-full"></i>
            {store.rating ? `${store.rating} rating from ${store.reviews} reviews` : "No ratings yet"}
          </li>
         
        </ul>
        <div className="social-icons social-no-color border-thin">
          {store.socialLinks?.facebook && (
            <a href={store.socialLinks.facebook} className="social-icon social-facebook w-icon-facebook"></a>
          )}
          {store.socialLinks?.google && (
            <a href={store.socialLinks.google} className="social-icon social-google w-icon-google"></a>
          )}
          {store.socialLinks?.twitter && (
            <a href={store.socialLinks.twitter} className="social-icon social-twitter w-icon-twitter"></a>
          )}
          {store.socialLinks?.pinterest && (
            <a href={store.socialLinks.pinterest} className="social-icon social-pinterest w-icon-pinterest"></a>
          )}
          {store.socialLinks?.youtube && (
            <a href={store.socialLinks.youtube} className="social-icon social-youtube w-icon-youtube"></a>
          )}
          {store.socialLinks?.instagram && (
            <a href={store.socialLinks.instagram} className="social-icon social-instagram w-icon-instagram"></a>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreBanner;
