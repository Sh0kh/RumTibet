import React from 'react'
import '../Style/Video.css'
import video from '../img/video.png'
function Video() {
  return (
    <section className='video'>
        <div className='container'>
            <h1>
                 Watch video to discover advantages
            </h1>
            <img src={video}alt="foto" />
            <div className='video__paly'></div>
        </div>
    </section>
  )
}

export default Video