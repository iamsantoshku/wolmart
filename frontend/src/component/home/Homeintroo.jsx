// import React from 'react'

// const Homeintroo = () => {
//   return (
//     <section className="intro-section">
//                 <div className="swiper-container swiper-theme nav-inner pg-inner swiper-nav-lg animation-slider pg-xxl-hide nav-xxl-show nav-hide"
//                     data-swiper-options="{
//                     'slidesPerView': 1,
//                     'autoplay': {
//                         'delay': 8000,
//                         'disableOnInteraction': false
//                     }
//                 }">
//                     <div className="swiper-wrapper">
//                         <div className="swiper-slide banner banner-fixed intro-slide intro-slide1"
//                             style="background-image: url(assets/images/demos/demo1/sliders/slide-1.jpg); background-color: #ebeef2;">
//                             <div className="container">
//                                 <figure className="slide-image skrollable slide-animate">
//                                     <img src="assets/images/demos/demo1/sliders/shoes.png" alt="Banner"
//                                         data-bottom-top="transform: translateY(10vh);"
//                                         data-top-bottom="transform: translateY(-10vh);" width="474" height="397"/>
//                                 </figure>
//                                 <div className="banner-content y-50 text-right">
//                                     <h5 className="banner-subtitle font-weight-normal text-default ls-50 lh-1 mb-2 slide-animate"
//                                         data-animation-options="{
//                                     'name': 'fadeInRightShorter',
//                                     'duration': '1s',
//                                     'delay': '.2s'
//                                 }">
//                                         Custom <span className="p-relative d-inline-block">Men’s</span>
//                                     </h5>
//                                     <h3 className="banner-title font-weight-bolder ls-25 lh-1 slide-animate"
//                                         data-animation-options="{
//                                     'name': 'fadeInRightShorter',
//                                     'duration': '1s',
//                                     'delay': '.4s'
//                                 }">
//                                         RUNNING SHOES
//                                     </h3>
//                                     <p className="font-weight-normal text-default slide-animate" data-animation-options="{
//                                     'name': 'fadeInRightShorter',
//                                     'duration': '1s',
//                                     'delay': '.6s'
//                                 }">
//                                         Sale up to <span className="font-weight-bolder text-secondary">30% OFF</span>
//                                     </p>

//                                     <a href="shop-list.html"
//                                         className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate"
//                                         data-animation-options="{
//                                     'name': 'fadeInRightShorter',
//                                     'duration': '1s',
//                                     'delay': '.8s'
//                                 }">SHOP NOW<i className="w-icon-long-arrow-right"></i></a>

//                                 </div>

//                             </div>

//                         </div>


//                         <div className="swiper-slide banner banner-fixed intro-slide intro-slide2"
//                             style="background-image: url(assets/images/demos/demo1/sliders/slide-2.jpg); background-color: #ebeef2;">
//                             <div className="container">
//                                 <figure className="slide-image skrollable slide-animate" data-animation-options="{
//                                     'name': 'fadeInUpShorter',
//                                     'duration': '1s'
//                                 }">
//                                     <img src="assets/images/demos/demo1/sliders/men.png" alt="Banner"
//                                         data-bottom-top="transform: translateX(10vh);"
//                                         data-top-bottom="transform: translateX(-10vh);" width="480" height="633"/>
//                                 </figure>
//                                 <div className="banner-content d-inline-block y-50">
//                                     <h5 className="banner-subtitle font-weight-normal text-default ls-50 slide-animate"
//                                         data-animation-options="{
//                                         'name': 'fadeInUpShorter',
//                                         'duration': '1s',
//                                         'delay': '.2s'
//                                     }">
//                                         Mountain-<span className="text-secondary">Climbing</span>
//                                     </h5>
//                                     <h3 className="banner-title font-weight-bolder text-dark mb-0 ls-25 slide-animate"
//                                         data-animation-options="{
//                                         'name': 'fadeInUpShorter',
//                                         'duration': '1s',
//                                         'delay': '.4s'
//                                     }">
//                                         Hot & Packback
//                                     </h3>
//                                     <p className="font-weight-normal text-default slide-animate" data-animation-options="{
//                                         'name': 'fadeInUpShorter',
//                                         'duration': '1s',
//                                         'delay': '.8s'
//                                     }">
//                                         Only until the end of this week.
//                                     </p>
//                                     <a href="shop-banner-sidebar.html"
//                                         className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate"
//                                         data-animation-options="{
//                                         'name': 'fadeInUpShorter',
//                                         'duration': '1s',
//                                         'delay': '1s'
//                                     }">
//                                         SHOP NOW<i className="w-icon-long-arrow-right"></i>
//                                     </a>
//                                 </div>
//                                 {/* <!-- End of .banner-content --> */}
//                             </div>
//                             {/* <!-- End of .container --> */}
//                         </div>
//                         {/* <!-- End of .intro-slide2 --> */}

//                         <div className="swiper-slide banner banner-fixed intro-slide intro-slide3"
//                             style="background-image: url(assets/images/demos/demo1/sliders/slide-3.jpg); background-color: #f0f1f2;">
//                             <div className="container">
//                                 <figure className="slide-image skrollable slide-animate" data-animation-options="{
//                                     'name': 'fadeInDownShorter',
//                                     'duration': '1s'
//                                 }">
//                                     <img src="assets/images/demos/demo1/sliders/skate.png" alt="Banner"
//                                         data-bottom-top="transform: translateY(10vh);"
//                                         data-top-bottom="transform: translateY(-10vh);" width="310" height="444"/>
//                                 </figure>
//                                 <div className="banner-content text-right y-50">
//                                     <p className="font-weight-normal text-default text-uppercase mb-0 slide-animate"
//                                         data-animation-options="{
//                                         'name': 'fadeInLeftShorter',
//                                         'duration': '1s',
//                                         'delay': '.6s'
//                                     }">
//                                         Top weekly Seller
//                                     </p>
//                                     <h5 className="banner-subtitle font-weight-normal text-default ls-25 slide-animate"
//                                         data-animation-options="{
//                                         'name': 'fadeInLeftShorter',
//                                         'duration': '1s',
//                                         'delay': '.4s'
//                                     }">
//                                         Trending Collection
//                                     </h5>
//                                     <h3 className="banner-title p-relative font-weight-bolder ls-50 slide-animate"
//                                         data-animation-options="{
//                                         'name': 'fadeInLeftShorter',
//                                         'duration': '1s',
//                                         'delay': '.2s'
//                                     }"><span className="text-white mr-4">Roller</span>-skate
//                                     </h3>
//                                     <div className="btn-group slide-animate" data-animation-options="{
//                                         'name': 'fadeInLeftShorter',
//                                         'duration': '1s',
//                                         'delay': '.8s'
//                                     }">
//                                         <a href="shop-list.html"
//                                             className="btn btn-dark btn-outline btn-rounded btn-icon-right">SHOP
//                                             NOW<i className="w-icon-long-arrow-right"></i></a>
//                                     </div>

//                                 </div>

//                             </div>
//                         </div>

//                     </div>
//                     <div className="swiper-pagination"></div>
//                     <button className="swiper-button-next"></button>
//                     <button className="swiper-button-prev"></button>
//                 </div>

//             </section>
//     // </div>
//   )
// }

// export default Homeintroo



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

//   // Auto-slide every 8 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 8000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   // Function to manually switch slides
//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const goToPrevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <section className="intro-section">
//       <div
//         className="banner banner-fixed intro-slide"
//         style={{
//           backgroundImage: `url(${slides[currentSlide].background})`,
//           backgroundColor: "#ebeef2",
//         }}
//       >
//         <div className="container">
//           <figure className="slide-image skrollable slide-animate">
//             <img src={slides[currentSlide].image} alt="Banner" width="474" height="397" />
//           </figure>
//           <div className="banner-content y-50 text-right">
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

//       {/* Navigation Buttons */}
//       <button className="swiper-button-prev" onClick={goToPrevSlide}></button>
//       <button className="swiper-button-next" onClick={goToNextSlide}></button>
//     </section>
//   );
// };

// export default Homeintroo;





import React, { useState, useEffect } from "react";


const slides = [
  {
    id: 1,
    background: "assets/images/demos/demo1/sliders/slide-1.jpg",
    image: "assets/images/demos/demo1/sliders/shoes.png",
    title: "RUNNING SHOES",
    subtitle: "Custom Men’s",
    description: "Sale up to 30% OFF",
    link: "shop-list.html",
  },
  {
    id: 2,
    background: "assets/images/demos/demo1/sliders/slide-2.jpg",
    image: "assets/images/demos/demo1/sliders/men.png",
    title: "Hot & Packback",
    subtitle: "Mountain-Climbing",
    description: "Only until the end of this week.",
    link: "shop-banner-sidebar.html",
  },
  {
    id: 3,
    background: "assets/images/demos/demo1/sliders/slide-3.jpg",
    image: "assets/images/demos/demo1/sliders/skate.png",
    title: "Roller-skate",
    subtitle: "Trending Collection",
    description: "Top weekly Seller",
    link: "shop-list.html",
  },
];

const Homeintroo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="intro-section">
      <div
        className="banner banner-fixed intro-slide"
        style={{
          backgroundImage: `url(${slides[currentSlide].background})`,
          backgroundColor: "#ebeef2",
        }}
      >
        {/* container */}
        <div className="container flex flex-col float-right gap-10">
          <div className="">
          <figure className="slide-image skrollable slide-animate ml-20">
            <img src={slides[currentSlide].image} alt="Banner" width="474" height="397" />
          </figure>
          </div>
         
          <div className="banner-content y-50 text-right mr-10">
            <h5 className="banner-subtitle font-weight-normal text-default ls-50 lh-1 mb-2 slide-animate">
              {slides[currentSlide].subtitle}
            </h5>
            <h3 className="banner-title font-weight-bolder ls-25 lh-1 slide-animate">
              {slides[currentSlide].title}
            </h3>
            <p className="font-weight-normal text-default slide-animate">
              {slides[currentSlide].description}
            </p>
            <a href={slides[currentSlide].link} className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate">
              SHOP NOW<i className="w-icon-long-arrow-right"></i>
            </a>
          </div>


        </div>
      </div>

      <button className="swiper-button-prev" onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}>
        &#10094;
      </button>
      <button className="swiper-button-next" onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}>
        &#10095;
      </button>
    </section>
  );
};

export default Homeintroo;



