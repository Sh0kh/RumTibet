import React from 'react'
import '../Style/Hero.css'
import hero__icon from '../img/hero__logo3.png'
import hero__icon1 from '../img/hero__logo1.png'
import hero__icon2 from '../img/hero__logo2.png'
function Hero() {
  return (
    <section className='hero'>
       
            <div className='container'>
                <div className='hero__conten'>
                <div className='hero__bg'> </div>
                    <h1>
                    Accessible way to start your business
                    </h1>
                    <h3>
                      Simple. Customizable. Stylish.
                    </h3>
                    <button>
                        Get demo for free
                    </button>
                    <div className='hero__wrapper'>
                        <h4>
                            <div className='h4__colors'></div>watch full video
                        </h4>
                        <div className='hero__icon'>
                            <img src={hero__icon} alt="icon" />
                            <img src={hero__icon1} alt="icon" />
                            <img src={hero__icon2} alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
       
    </section>
  )
}

export default Hero