import React from 'react'
import './PastWork.css'


function PastWork() {
  return (
    <div>
      <div className='past-works'>
        <div className='past-works-body'>
          <div className='visuals'>
            <img src='./Assets/Car.jpg' className='image' />
            <video className='small-video'>
              <source src='src="//videos.ctfassets.net/drid77jut33t/46CDqw6WR8EHudDQDqJ7kw/3a9b0b9240cb4ccb9d568b088aa55470/Hover_BMW_1.mp4"'/>
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
            <img src='./Assets/Dwight.jpg' className='image' />
            <video className='small-video'>
              <source />
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
            <img src='./Assets/Starburst.jpg' className='image' />
            <video className='small-video'>
              <source  />
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
