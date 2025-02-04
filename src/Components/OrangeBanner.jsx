import React from 'react'
import './OrangeBanner.css'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function OrangeBanner() {
  const message = (
    <>
      WE CREATE CONNECTED DIGITAL <br/>
      ECOSYSTEMS THROUGH DESIGN <br/>
      AND TECHNOLOGY.
    </>
  );


  useGSAP(() => {
    gsap.fromTo('.orange-banner-content-copy', 
      { opacity: 1, y: 100,
        scrollTrigger: {
          trigger: '.orange-banner-content-copy-heading', // Correct selector
          start: 'top bottom', // Start when the top of the element hits 80% of the viewport height
          end: 'bottom 20%', // Optional: When the bottom of the element reaches 20% of the viewport height
          scrub: true,
        }
       },
      {opacity: 1,
        y: 0, 
        duration: 1, 
        delay: 1,
       
      })}
    )






  return (
    <div className='orange-banner'>
      <div className='orange-banner-content-copy'>
        <div className='orange-banner-content-copy-heading'>
          HELLO, WE'RE CM.
        </div>
        <div className='orange-banner-content-copy-paragraph'>
          {message}
        </div>

      </div>

    </div>
  )
}

export default OrangeBanner
