import React from 'react'
import '../Style/Media.css'
import media_foto1 from '../img/media (1).png'
import media_foto2 from '../img/media (2).png'
import media_foto3 from '../img/media (3).png'
import media_foto4 from '../img/media (4).png'
import media_foto5 from '../img/media (5).png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Media() {
   
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
  return (
    <section className='media'>
        <div className='container'>
            <div className='media__title__wrapper'>
                <h1>
                    In social media
                </h1>
                <button>
                    Go to Instagram
                </button>
            </div>
            <div className='media__wrapper'>
            <Slider {...settings}>
                <img src={media_foto1} alt="" />
                <img src={media_foto1} alt="" />
                <img src={media_foto2} alt="" />
                <img src={media_foto3} alt="" />
                <img src={media_foto4} alt="" />
                <img src={media_foto5} alt="" />
            </Slider>
            </div>
        </div>
    </section>
  )
}

export default Media