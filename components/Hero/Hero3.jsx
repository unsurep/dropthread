'use client';
import Image from 'next/image';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';






const Hero3 = () => {
    return (
      <>
        <div className=" flex flex-col gap-5">
          {/* swiper section */}
          <h1 className="uppercase text-center font-black tracking-[5px] text-3xl pt-5">
            Trending Now
          </h1>

            {/* swiper js */}
           <div>
                <Swiper
             slidesPerView={4}
             spaceBetween={30}
             breakpoints={{
             640: { slidesPerView: 2 },
             768: { slidesPerView: 3 },
             1024: { slidesPerView: 4 },
             }}
 
             autoplay={{
               delay: 3000,
               disableOnInteraction: false,
             }}
 
             navigation={true}
             modules={[Autoplay, Navigation]}
          
            className="mySwiper">

            <SwiperSlide>
                <Image src='/tee.png' width={100} height={100} alt='image' className='w-full '/>
            </SwiperSlide>

            <SwiperSlide>
                <Image src='/tee.png' width={100} height={100} alt='image' className='w-full '/>
            </SwiperSlide>

             <SwiperSlide>
                <Image src='/tee.png' width={100} height={100} alt='image' className='w-full '/>
            </SwiperSlide>

             <SwiperSlide>
                <Image src='/tee.png' width={100} height={100} alt='image' className='w-full '/>
            </SwiperSlide>

             <SwiperSlide>
                <Image src='/tee.png' width={100} height={100} alt='image' className='w-full '/>
            </SwiperSlide>

             <SwiperSlide>
                <Image src='/tee.png' width={100} height={100} alt='image' className='w-full '/>
            </SwiperSlide>

             <SwiperSlide>
                <Image src='/tee.png' width={100} height={100} alt='image' className='w-full '/>
            </SwiperSlide>

             <SwiperSlide>
                <Image src='/tee.png' width={100} height={100} alt='image' className='w-full '/>
            </SwiperSlide>

             <SwiperSlide>
                <Image src='/tee.png' width={100} height={100} alt='image' className='w-full '/>
            </SwiperSlide>

                </Swiper>
           </div>

            {/* shop button */}
            <button className="relative px-6 w-fit mx-auto py-3 bg-black font-semibold my-5 border-2 border-white overflow-hidden group rounded-full cursor-pointer">
              <span className="absolute inset-0 bg-white translate-x-[-100%] border-2 group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
              <span className="relative z-10 text-white group-hover:text-black transition-colors duration-400">
                Shop
              </span>
            </button>
         
        </div>
      </>
    );


};
export default Hero3;