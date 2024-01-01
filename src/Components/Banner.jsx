import React from 'react'
import '../Style/Baner.css'
import banner__1 from '../img/banner_1.png'
import banner__2 from '../img/banner2.svg'
import banner__3 from '../img/banner3.svg'
import banner__4 from '../img/banner4.svg'
import banner__5 from '../img/banner5.svg'
import banner_bg1 from '../img/banner_bg1.png'
import banner_bg2 from '../img/banner_bg2.png'
function Banner() {
  return (
    <section className='banner'>
        <div className='container'>
            <h1>
             People talk about us
            </h1>
            <div className='Banner'>
                <div className='banner__img'>
                    <img src={banner__1} alt="foto" />
                    <div className='banner__img__wrapper'>
                        <img src={banner__2} alt="icon" />
                        <img src={banner__3} alt="icon" />
                        <img src={banner__4} alt="icon" />
                    </div>
                </div>
                <div className='banner__content'>
                    <div className='banner__content__wrapper'>
                        <div className='banner__title'>
                            <h2>
                                Joe Smith
                            </h2>
                            <span>CEO at Flatty</span>
                        </div>
                        <img src={banner__5} alt="icon" />
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet. Nulla viverra quam sit amet lacus accumsan, ac interdum nibh eleifend.
                    </p>
                </div>
            </div>
            <img className='banner__bg1' src={banner_bg1} alt="foto" />
            <img className='banner__bg2' src={banner_bg2} alt="foto" />
        </div>
    </section>
  )
}

export default Banner