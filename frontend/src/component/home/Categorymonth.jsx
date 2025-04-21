


import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 

// ✅ Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Categorymonth = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
        setCategories(response.data); // 🔹 API should return an array of categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    // ✅ Ensure Wolmart script is initialized after the component loads
    if (window.Wolmart) {
      window.Wolmart.init();
    }
  }, []);

  return (
    <section className="category-section top-category bg-grey pt-10 pb-10 appear-animate">
      <div className="container pb-2">
        <h2 className="title justify-content-center pt-1 ls-normal mb-5">
          Top Categories Of The Month
        </h2>

        {/* ✅ Fixed Swiper settings */}
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            576: { slidesPerView: 3 },
            768: { slidesPerView: 5 },
            992: { slidesPerView: 6 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]} // ✅ Corrected Swiper module usage
        >
          {categories.length > 0 ? (
            categories.map((category) => {
              // Construct valid image URL
              const imageUrl = category.logo
                ? `${BACKENDURL}${category.logo}`
                : "/assets/images/shop/default-category.jpg"; // 🔹 Default image if logo is missing

              return (
                <SwiperSlide key={category._id}>
                  <div className="swiper-slide category category-classic category-absolute overlay-zoom br-xs">
                    <a href={`/category/${category._id}`} className="category-media">
                      <img
                        src={imageUrl}
                        alt={category.name}
                        className="category-image"
                        onError={(e) => {
                          e.target.src = "/assets/images/shop/default-category.jpg";
                        }} // 🔹 Fallback if image is broken
                        style={{
                          width: "200px", // 🔹 Ensures uniform width
                          height: "200px", // 🔹 Ensures uniform height
                          objectFit: "cover", // 🔹 Prevents stretching/distortion
                          borderRadius: "10px", // 🔹 Optional: Adds a slight border-radius
                        }}
                      />
                    </a>
                    <div className="category-content">
                      <h4 className="category-name">{category.name}</h4>
                      <a href={`/category/${category._id}`} className="btn btn-primary btn-link btn-underline">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          ) : (
            <p>Loading categories...</p>
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Categorymonth;
