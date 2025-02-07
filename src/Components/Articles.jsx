import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Articles.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

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
            <p className='author'> Jennifer faull</p>
            <p className='date'>18.10.2024</p>
          </div>
          <div className='body-text'>
            Agency Leaders Share Their Five-Year Plans for Future-Proofing
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className='photo-div'>
            <img src='./Assets/Handshake.jpg' className='photo' />
          </div>
          <div className='Name-Date'>
            <p className='author'> Dan Murphy</p>
            <p className='date'>21.08.2024</p>
          </div>
          <div className='body-text'>
            B2B with a Human Heart: How Digital Experiences Can Show Buyers You Understand Them
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className='photo-div'>
            <img src='./Assets/Cerave.jpg' className='photo' />
          </div>
          <div className='Name-Date'>
            <p className='author'> Bailey Calfee</p>
            <p className='date'>27.06.2024</p>
          </div>
          <div className='body-text'>
            Winning Cannes Work Put the Focus on Commercial Creativity
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className='photo-div'>
            <img src='./Assets/Starburst_Possibilities.png' className='photo' />
          </div>
          <div className='Name-Date'>
            <p className='author'> Tim Nudd</p>
            <p className='date'>07.05.2024</p>
          </div>
          <div className='body-text'>
            Starbust Jumps Into Generative AI With 'Different Every Time' Brand Campaign
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className='photo-div'>
            <img src='./Assets/MandM.webp' className='photo' />
          </div>
          <div className='Name-Date'>
            <p className='author'> </p>
            <p className='date'>28.05.2024</p>
          </div>
          <div className='body-text'>
            Mars and Omnicon on Embracing Generative AI: 'This is a wild West Tool'
          </div>
        </SwiperSlide>



      </Swiper>
    </>
  );
}
