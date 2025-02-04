import React from 'react'
import './OrangeBanner.css'

function OrangeBanner() {
  const message = (
    <>
      WE CREATE CONNECTED DIGITAL <br/>
      ECOSYSTEMS THROUGH DESIGN <br/>
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
