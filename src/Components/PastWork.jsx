import React from 'react'
import './PastWork.css'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


function PastWork() {
  useGSAP(() => {
    gsap.fromTo(
      ".past-works-body",
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        scrollTrigger: {
          trigger: '.past-works-body',
          start:'top 75%',

        }
      }
    );
  });



  return (
    <div>
      <div className='past-works'>
        <div className='past-works-body'>
          <div className='visuals'>
            <img src='./Assets/Car.jpg' className='cover-photo' alt='' />
            <video className='small-video lagoon' autoPlay loop muted>
              <source src='./Assets/Lagoon.mp4' type='video/mp4' />
            </video>
          </div>
          <div className='past-works-text'>
            <div className='brand-title'>
              BMW.
            </div>
            <div className='brand-subheading'>
              Worthy of the name.
            </div>
            <div className='brand-description'>
              STRATEGY / BRAND & CAMPAIGN / ARTIFICIAL INTELLIGENCE
            </div>
          </div>

        </div>

        <div className='past-works-body'>
          <div className='visuals'>
            <img src='./Assets/Dwight.jpg' className='cover-photo' alt='' />
            <video className='small-video shower' autoPlay loop muted>
              <source src='./Assets/Shower.mp4'/>
            </video>

          </div>
          <div className='past-works-text'>
            <div className='brand-title'>
              AT&T
            </div>
            <div className='brand-subheading'>
              Funny business.
            </div>
            <div className='brand-description'>
              BRAND & CAMPAIGN / ARTIFICIAL INTELLIGENCE / MEDIA / PERFORMANCE
            </div>
          </div>

        </div>


        <div className='past-works-body'>
          <div className='visuals'>
            <img src='./Assets/Starburst.jpg' className='cover-photo' alt='' />
            <video className='small-video snowboarding' autoPlay loop muted>
              <source src='./Assets/Snowboarding.mp4'/>
            </video>

          </div>
          <div className='past-works-text'>
            <div className='brand-title'>
              Starburst
            </div>
            <div className='brand-subheading'>
              Different every time.
            </div>
            <div className='brand-description'>
              STRATEGY / BRAND & CAMPAIGN / ARTIFICIAL INTELLIGENCE
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default PastWork
