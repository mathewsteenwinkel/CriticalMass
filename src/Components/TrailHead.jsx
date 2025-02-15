import { useState } from 'react'
import React from 'react'
import './TrailHead.css'
import TrailHeadCursor from './TrailHeadCursor'



function TrailHead() {
  const [cursorVisible, setCursorVisible] = useState(false);

  const text = <>
    Our in-house development <br /> program for emerging talent.
  </>

  return (
    <div className='trailhead-div'>
      <TrailHeadCursor isVisible={cursorVisible} />
      <div
        className="trailhead-container"
        onMouseEnter={() => setCursorVisible(true)}
        onMouseLeave={() => setCursorVisible(false)}
      >
        <img src='./Assets/texture.jpg' className='texture' alt='' />
        <div className='Trail-left'>
          <div className='left-div'>
            <div className='Trail-info'>
              {text}
            </div>
            <div className='Trail-logo'>
              <img src='./Assets/Tralhead_logo_blue.png' className='Trail-logo' alt='' />
            </div>
            <div className='Trail-info'>
              No experience required
            </div>
          </div>
        </div>
        <div className='Trail-right'>
          <div className='photoOfMe'>
            <img src='./Assets/Me.png' className='photo-me'  alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrailHead
