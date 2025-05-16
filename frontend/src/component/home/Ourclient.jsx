// import React from 'react'

// const Ourclient = () => {
//   return (
//     <div>
//         <h2 className="title title-underline mb-4 ls-normal appear-animate">Our Clients</h2>
//                 <div className="swiper-container swiper-theme brands-wrapper mb-9 appear-animate" data-swiper-options="{
//                     'spaceBetween': 0,
//                     'slidesPerView': 2,
//                     'breakpoints': {
//                         '576': {
//                             'slidesPerView': 3
//                         },
//                         '768': {
//                             'slidesPerView': 4
//                         },
//                         '992': {
//                             'slidesPerView': 5
//                         },
//                         '1200': {
//                             'slidesPerView': 6
//                         }
//                     }
//                 }">
//                     <div className="swiper-wrapper row gutter-no cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
//                         <div className="swiper-slide brand-col">
//                             <figure className="brand-wrapper">
//                                 <img src="assets/images/demos/demo1/brands/1.png" alt="Brand" width="410"
//                                     height="186" />
//                             </figure>
//                             <figure className="brand-wrapper">
//                                 <img src="assets/images/demos/demo1/brands/2.png" alt="Brand" width="410"
//                                     height="186" />
//                             </figure>
//                         </div>
//                         <div className="swiper-slide brand-col">
//                             <figure className="brand-wrapper">
//                                 <img src="assets/images/demos/demo1/brands/3.png" alt="Brand" width="410"
//                                     height="186" />
//                             </figure>
//                             <figure className="brand-wrapper">
//                                 <img src="assets/images/demos/demo1/brands/4.png" alt="Brand" width="410"
//                                     height="186" />
//                             </figure>
//                         </div>
//                         <div className="swiper-slide brand-col">
//                             <figure className="brand-wrapper">
//                                 <img src="assets/images/demos/demo1/brands/5.png" alt="Brand" width="410"
//                                     height="186" />
//                             </figure>
//                             <figure className="brand-wrapper">
//                                 <img src="assets/images/demos/demo1/brands/6.png" alt="Brand" width="410"
//                                     height="186" />
//                             </figure>
//                         </div>
//                         <div className="swiper-slide brand-col">
//                             <figure className="brand-wrapper">
//                                 <img src="assets/images/demos/demo1/brands/7.png" alt="Brand" width="410"
//                                     height="186" />
//                             </figure>
//                             <figure className="brand-wrapper">
//                                 <img src="assets/images/demos/demo1/brands/8.png" alt="Brand" width="410"
//                                     height="186" />
//                             </figure>
//                         </div>
//                         <div className="swiper-slide brand-col">
//                             <figure className="brand-wrapper">
//                                 <img src="assets/images/demos/demo1/brands/9.png" alt="Brand" width="410"
//                                     height="186" />
//                             </figure>
//                             <figure className="brand-wrapper">
//                                 <img src="assets/images/demos/demo1/brands/10.png" alt="Brand" width="410"
//                                     height="186" />
//                             </figure>
//                         </div>
//                         <div className="swiper-slide brand-col">
//                             <figure className="brand-wrapper">
//                                 <img src="assets/images/demos/demo1/brands/11.png" alt="Brand" width="410"
//                                     height="186" />
//                             </figure>
//                             <figure className="brand-wrapper">
//                                 <img src="assets/images/demos/demo1/brands/12.png" alt="Brand" width="410"
//                                     height="186" />
//                             </figure>
//                         </div>
//                     </div>
//                 </div>
      
//     </div>
//   )
// }

// export default Ourclient






import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

const Ourclient = () => {
  return (
    <div>
      <h2 className="title title-underline mb-4 ls-normal appear-animate">Our Clients</h2>
      <Swiper
        spaceBetween={0}
        slidesPerView={2}
        breakpoints={{
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
          1200: { slidesPerView: 6 },
        }}
        className="swiper-container swiper-theme brands-wrapper mb-9 appear-animate"
      >
        <div className="swiper-wrapper row gutter-no cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
          {[...Array(12)].map((_, index) => (
            <SwiperSlide key={index} className="swiper-slide brand-col">
              <figure className="brand-wrapper">
                <img src={`assets/images/demos/demo1/brands/${index + 1}.png`} alt="Brand" width="410" height="186" />
              </figure>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Ourclient;
