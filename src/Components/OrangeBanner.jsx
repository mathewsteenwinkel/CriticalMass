import React from 'react'
import './OrangeBanner.css'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


function OrangeBanner() {

  useGSAP(() => {
    gsap.fromTo(
      ".orange-banner-content-copy",
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        scrollTrigger: {
          trigger: '.orange-banner-content-copy',
          start:'top 75%',

        }
      }
    );
  });



  const message = (
    <>
      WE CREATE CONNECTED DIGITAL <br />
      ECOSYSTEMS THROUGH DESIGN <br />
      AND TECHNOLOGY.
    </>
  );

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
