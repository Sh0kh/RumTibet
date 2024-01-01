import React from 'react'
import '../Style/Media.css'
import media_foto1 from '../img/media (1).png'
import media_foto2 from '../img/media (2).png'
import media_foto3 from '../img/media (3).png'
import media_foto4 from '../img/media (4).png'
import media_foto5 from '../img/media (5).png'
import { Navigation,  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Media() {
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
            <Swiper
                // install Swiper modules
                modules={[Navigation,  A11y]}
                spaceBetween={50}
                slidesPerView={4}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <img src={media_foto1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={media_foto2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={media_foto3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={media_foto4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={media_foto5} alt="" />
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Media