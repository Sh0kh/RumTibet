import React from 'react'
import '../Style/Slider.css'
import person1 from '../img/person1.png'
import person2 from '../img/person2 (1).png'
import person3 from '../img/person2 (2).png'
import person4 from '../img/person2 (3).png'
import person5 from '../img/person2 (4).png'
import person6 from '../img/person2 (5).png'
import person7 from '../img/person2 (6).png'
import person8 from '../img/person2 (7).png'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import SliderCard from './SliderCard';

function Slider1() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (  
   <section className='slider'>
        <div className='container'>
            <div className='slider__title__wrapper'>
                <div>
                    <h1>
                    Meet the team
                    </h1>
                    <h1>
                    Want to join?
                    </h1>
                </div>
                <div className='slider__btn'>
                    <button className='sbtn1'>
                        Join us
                    </button>
                    <button className='sbtn2'>
                         See all openings
                    </button>
                </div>
            </div>
            <div className='swipe__slider'>
                <Slider {...settings}>
                <div>
                    <SliderCard img={person1} title='Martin Fury' text='Co-Founder'/>
                    <SliderCard img={person2} title='Timoty Crash' text='Co-Founder'/>
                </div>
                <div><SliderCard img={person3} title='Miranda Loudy' text='Global HRD'/>
                <SliderCard img={person4} title='Jim Partners' text='Chief Product Officer'/>
                </div>
                <div><SliderCard img={person5} title='Joe Lee' text='Lead Product Designer'/>
                <SliderCard img={person6} title='Alex Sosnovskyi' text=' Senior Software Engineer'/>
                </div>
                <div><SliderCard img={person7} title='Andy Gupta' text='Marketing Operations'/>
                <SliderCard img={person8} title='Dan Wize-Nicon' text='UI/UX Designer'/>
                </div>
                 </Slider>
                 
            </div>
        </div>
   </section>
  )
}

export default Slider1