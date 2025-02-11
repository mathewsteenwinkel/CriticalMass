import { useState } from 'react'
import React from 'react'
import './TrailHead.css'
import TrailHeadCursor from './TrailHeadCursor'



function TrailHead() {
  const [cursorVisible, setCursorVisible] = useState(false);



  return (
    <div className='trailhead-div'>
      <TrailHeadCursor isVisible={cursorVisible} />
      <div
        className="trailhead-container"
        onMouseEnter={() => setCursorVisible(true)}
        onMouseLeave={() => setCursorVisible(false)}
      >
        <img src='./Assets/texture.jpg' className='texture' />
        <div className='Trail-right'>

        </div>
        <div className='Trail-Left'>

        </div>
      </div>
    </div>
  )
}

export default TrailHead
