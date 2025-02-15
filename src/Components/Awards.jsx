import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

import './Awards.css';



function Awards() {
  const swiperRef = useRef(null);




  return (
    <div className='awards'>
      <div className='border'/>
      <div className='awards-body'>
      <div className='awards-header'>
        RECENT WINS
      </div>
      <div className='awards-swiper'>
      <div className='buttons'>
      <button
        className="back"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <div class="arrow-back"> ←</div>
      </button>

      <button
        className="forward"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <div class="arrow-forward"> ←</div>
      </button>
      </div>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                <img src='./Assets/awards/FastCompany.jpg' alt='award1' className='logo'/>
              </div>
              <div className='award-info'>
                <p className='award-place'>GOLD</p>
                <p className='award-name'>Fast Company's 100 Best Workplaces for Innovators</p>
                <p className='award-date'>SEP 2024</p>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='award-slide'>
            <div className='award-div'>
              <div className='image-div'>
                <img src='./Assets/awards/CannesLions.png' alt='award1' className='logo' />
              </div>
              <div className='award-info'>
                <p className='award-place'>SILVER</p>
                <p className='award-name'>AT&T Business' Sleep with Rain</p>
                <p className='award-date'>SEP 2024</p>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='award-slide'>
            <div className='award-div'>
              <div className='image-div'>
                <img src='./Assets/awards/D&ADawards.jpg' alt='award1' className='logo' />
              </div>
              <div className='award-info'>
                <p className='award-place'>GRAPHITE</p>
                <p className='award-name'>Courageous Conversation Global Foundation's Driving While Black</p>
                <p className='award-date'>JUN 2024</p>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='award-slide'>
            <div className='award-div'>
              <div className='image-div'>
                <img src='./Assets/awards/PHNX.png' alt='award1' className='logo' />
              </div>
              <div className='award-info'>
                <p className='award-place'>GOLD</p>
                <p className='award-name'>Alpheya</p>
                <p className='award-date'>MAY 2024</p>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='award-slide'>
            <div className='award-div'>
              <div className='image-div'>
                <img src='./Assets/awards/Effieaward.jpg' alt='award1' className='logo'/>
              </div>
              <div className='award-info'>
                <p className='award-place'>BRONZE</p>
                <p className='award-name'>INFINITI's The Shift from Value to Valuable</p>
                <p className='award-date'>MAY 2024</p>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='award-slide'>
            <div className='award-div'>
              <div className='image-div'>
                <img src='./Assets/awards/Effieaward.jpg' alt='award1' className='logo' />
              </div>
              <div className='award-info'>
                <p className='award-place'>GOLD</p>
                <p className='award-name'>M&M's Spokescandies on Pause</p>
                <p className='award-date'>MAY 2024</p>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='award-slide'>
            <div className='award-div'>
              <div className='image-div'>
                <img src='./Assets/awards/CLIO.jpg' alt='award1' className='logo' />
              </div>
              <div className='award-info'>
                <p className='award-place'>GRAND</p>
                <p className='award-name'>Courageous Conversation Global Foundation's Driving While Black</p>
                <p className='award-date'>APR 2024</p>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='award-slide'>
            <div className='award-div'>
              <div className='image-div'>
                <img src='./Assets/awards/Digitalawards.png' alt='award1' className='logo' />
              </div>
              <div className='award-info'>
                <p className='award-place'>GOLD</p>
                <p className='award-name'>Digiday's Most Innovative Agency</p>
                <p className='award-date'>SEP 2023</p>

              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      </div>
      <div className='border' />
    </div>
  )
}

export default Awards
