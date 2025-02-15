import React from 'react';
import './Billboard.css'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

function Billboard() {

  useGSAP(() => {
    gsap.fromTo('.name', 
      {opacity: 0, y: 100}, 
      {opacity: 1, y: 0, duration: 1, delay: 0.5})}
    )

  useGSAP(() => {
    gsap.fromTo('.subHeading', 
    {opacity: 0, y: 100}, 
    {opacity: 1, y: 0, duration: 1.5, delay: .6})}
  )


  return (
    <div className='header-container'>
      <a>
        <div className='name'> Critical Mass.
          <div className='subHeading'>
            <div className='left-side'>
              Welcome.
              <div>Digital is our home.</div>
            </div>
            <div className='right-side'>
                <img src="/Assets/Mapleleaf.png" className='leaf' alt=''/> 
              <div className='wordings-right'>
              Canada + the World
                <div>
                Since '96
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Billboard
