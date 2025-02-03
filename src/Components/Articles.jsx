import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Articles.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Articles() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        freeMode={false}
        style={{ display: "flex" }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          enabled: false
        }}
        modules={[FreeMode, Pagination]}
        centeredSlides={false}
        className="mySwiper"
      >
        <SwiperSlide className='slide'>
          <div className='photo-div'>
          <img src='./Assets/adobestock_892449730.jpeg.avif' className='photo' />
          </div>
          <div className='Name-Date'>
            <p className='author'> John Doe</p>
            <p className='date'>18.10.2024</p>
          </div>
          <div className='body-text'>
            Agency Leaders Share Their Five-Year Plans for Future-Proofing
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className='photo-div'>
          <img src='./Assets/adobestock_892449730.jpeg.avif' className='photo' />
          </div>
          <div className='Name-Date'>
            <p className='author'> John Doe</p>
            <p className='date'>18.10.2024</p>
          </div>
          <div className='body-text'>
            Agency Leaders Share Their Five-Year Plans for Future-Proofing
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className='photo-div'>
          <img src='./Assets/adobestock_892449730.jpeg.avif' className='photo' />
          </div>
          <div className='Name-Date'>
            <p className='author'> John Doe</p>
            <p className='date'>18.10.2024</p>
          </div>
          <div className='body-text'>
            Agency Leaders Share Their Five-Year Plans for Future-Proofing
          </div>
        </SwiperSlide>
       
      


      </Swiper>
    </>
  );
}
