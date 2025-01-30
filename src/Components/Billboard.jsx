import React from 'react';
import './Billboard.css'
import Leaf from '../Assets/Mapleleaf.png'


function Billboard() {
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
                <img src={Leaf} className='leaf'/> 
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
