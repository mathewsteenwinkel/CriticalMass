import React from 'react'
import './BackgroundVideo.css'

function BackgroundVideo() {


  return (
    <div className='video-container'>
      <video autoPlay muted loop id="myVideo" className='background-video'>
        <source src='/Assets/MakeItCount.mp4' type="video/mp4" />
      </video>
    </div>
  )
}

export default BackgroundVideo
