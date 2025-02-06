import React from 'react'
import './Nike.css'
import NikeText from './NikeText'
import PastWork from './PastWork'

function Nike() {
  return (
    <>
      <div className='nike-container'>
        <div className='nike-body' >
          <div className='nike-header'>
            <div className='nike-content'>
              <img src='./Assets/Nike.jpg' alt="Nike" className="nike" />
              <video className="nike-video nike" autoPlay loop muted >
                <source src='./Assets/DoWhatYouCant.mp4' type='video/mp4' />
              </video>
            </div>
            <NikeText />
          </div>
          <PastWork />
        </div>
      </div>
    </>
  )
}

export default Nike
