import React from 'react'
import '../Style/SwipeLogo.css'
import swLogo__1 from '../img/swLogo4.png'
import swLogo__2 from '../img/swLogo3.png'
function SwipeLogo() {
  return (
    <section className='swipe__logo'>
        <div className='container'>
            <div className='swl__wrapper'>
                <img src={swLogo__1} alt="logo" />
                <img src={swLogo__2} alt="logo" />
                <img src={swLogo__1} alt="logo" />
                <img src={swLogo__2} alt="logo" />
            </div>
        </div>
    </section>
  )
}

export default SwipeLogo