import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div className='Footer'>
      <div className='logo'>
        <img src='./Assets/CM-Logo-White.svg' />
      </div>
      <div className='sitemap'>
        <div>
          ©2025 Critical Mass. All Rights Reserved.
        </div>
        <div className='line'>
          |
        </div>
        <div>
          Cookie Policy
        </div>
        <div className='line'>
          |
        </div>
        <div>
          Privacy
        </div>
        <div className='line'>
          |
        </div>
        <div>
          terms & Conditions
        </div>
      </div>
      <div className='socials'>
        <div className='trailhead'>
          <img src='./Assets/trailhead-logo.svg' />
        </div>
        <div >
          <img src="./Assets/Linkedin-logo.svg" className='linkedin'/>
        </div>
        <div >
          <img src="./Assets/instagram-logo.svg" className='insta'/>
        </div>

      </div>

    </div>
  )
}

export default Footer
