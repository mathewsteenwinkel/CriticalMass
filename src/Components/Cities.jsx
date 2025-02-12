import React from 'react'
import './Cities.css'

function Cities() {
  return (
    <div className='Cities-div'>
      <div className='Citie-container'>
        <div className='Seperator' />
        <div className='City'>
          <div className='City-name'>
            Calgary, AB
          </div>
          <div className='Address'>
            <img src='./Assets/Calgary.webp' className='City-photo' />
            <div className='Address-city'>
              <p className='address-street'>1011 9th Ave SE</p>
              <p className='address-street'> Suite 300</p>
              <p className='address-street'> Calgary, AB</p>
              <p className='address-street'> T2G 0H7, Canada</p>
            </div>
          </div>
          <div className='location-jobs'>
            <div className='location-opening'>
              9
            </div>
            <div className='loaction-arrow'>
              Jobs
              <img src='./Assets/Arrow.svg' className='arrow' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cities
