import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div className='Footer'>
      <div className='left-footer'>
        <div className='logo'>
          <img src='./Assets/CM-Logo-White.svg' alt='' />
        </div>
        <div className='sitemap'>
          <div>
            ©2025 Critical Mass. All Rights Reserved.
          </div>
          <div className='line'>
            |
          </div>
          <div className='underline'>
            Cookie Policy
          </div>
          <div className='line'>
            |
          </div>
          <div className='underline'>
            Privacy
          </div>
          <div className='line'>
            |
          </div>
          <div className='underline'>
            terms & Conditions
          </div>
        </div>
      </div>
      <div className='socials'>
        <div className='trailhead'>
          <img src='./Assets/trailhead-logo.svg' alt='' />
        </div>
        <div >
          <img src="./Assets/Linkedin-logo.svg" className='linkedin' alt='' />
        </div>
        <div >
          <img src="./Assets/instagram-logo.svg" className='insta' alt='' />
        </div>

      </div>

    </div>
  )
}

export default Footer
