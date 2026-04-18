





// import React, { useState, useEffect } from "react";


// const slides = [
//   {
//     id: 1,
//     background: "assets/images/demos/demo1/sliders/slide-1.jpg",
//     image: "assets/images/demos/demo1/sliders/shoes.png",
//     title: "RUNNING SHOES",
//     subtitle: "Custom Men’s",
//     description: "Sale up to 30% OFF",
//     link: "shop-list.html",
//   },
//   {
//     id: 2,
//     background: "assets/images/demos/demo1/sliders/slide-2.jpg",
//     image: "assets/images/demos/demo1/sliders/men.png",
//     title: "Hot & Packback",
//     subtitle: "Mountain-Climbing",
//     description: "Only until the end of this week.",
//     link: "shop-banner-sidebar.html",
//   },
//   {
//     id: 3,
//     background: "assets/images/demos/demo1/sliders/slide-3.jpg",
//     image: "assets/images/demos/demo1/sliders/skate.png",
//     title: "Roller-skate",
//     subtitle: "Trending Collection",
//     description: "Top weekly Seller",
//     link: "shop-list.html",
//   },
// ];

// const Homeintroo = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="intro-section">
//       <div
//         className="banner banner-fixed intro-slide"
//         style={{
//           backgroundImage: `url(${slides[currentSlide].background})`,
//           backgroundColor: "#ebeef2",
//         }}
//       >
//         {/* container */}
//         <div className="container flex flex-col float-right gap-10">
//           <div className="">
//           <figure className="slide-image skrollable slide-animate ml-20">
//             <img src={slides[currentSlide].image} alt="Banner" width="474" height="397" />
//           </figure>
//           </div>
         
//           <div className="banner-content y-50 text-right mr-10">
//             <h5 className="banner-subtitle font-weight-normal text-default ls-50 lh-1 mb-2 slide-animate">
//               {slides[currentSlide].subtitle}
//             </h5>
//             <h3 className="banner-title font-weight-bolder ls-25 lh-1 slide-animate">
//               {slides[currentSlide].title}
//             </h3>
//             <p className="font-weight-normal text-default slide-animate">
//               {slides[currentSlide].description}
//             </p>
//             <a href={slides[currentSlide].link} className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate">
//               SHOP NOW<i className="w-icon-long-arrow-right"></i>
//             </a>
//           </div>


//         </div>
//       </div>

//       <button className="swiper-button-prev" onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}>
//         &#10094;
//       </button>
//       <button className="swiper-button-next" onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}>
//         &#10095;
//       </button>
//     </section>
//   );
// };

// export default Homeintroo;









import { useEffect, useState } from "react";

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
    title: "Big Sale",
    subtitle: "Up to 50% Off",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae",
    title: "New Arrivals",
    subtitle: "Latest Trends 2026",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f",
    title: "Exclusive Deals",
    subtitle: "Limited Time Offer",
  },
];

export default function Homeintroo() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Next / Prev
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden">
      
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute w-full h-full transition-all duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">
              {banner.title}
            </h2>
            <p className="mt-2 text-sm sm:text-lg md:text-xl">
              {banner.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}