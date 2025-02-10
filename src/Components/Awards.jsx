import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

import './Awards.css';



function Awards() {
  return (
    <div className='awards'>
      <div className='border'/>
      <div className='awards-body'>
      <div className='awards-header'>
        RECENT WINS
      </div>
      <div>
        <Swiper
          slidesPerView={4}
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
          <SwiperSlide className='award-slide'>
            <div className='award-div'>
              <div className='image-div'>
              </div>
              <div className='award-info'>
                <p className='award-place'>GOLD</p>
                <p className='award-name'>Fast Company's 100 Best Workplaces for Innovators</p>
                <p className='award-date'>SEP 2024</p>

              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='border' />
      </div>
    </div>
  )
}

export default Awards
