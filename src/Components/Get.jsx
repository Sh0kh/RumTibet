import React from 'react'
import '../Style/Get.css'
import GetCard from './GetCard'
import get__icon1 from '../img/gicon1.png'
import get__icon2 from '../img/gicon2.png'
import get__icon3 from '../img/gicon3.png'
import get__icon4 from '../img/gicon4.png'
import get__icon5 from '../img/gicon5.png'
import get__icon6 from '../img/gicon6.png'
import get__icon7 from '../img/gicon7.png'
import get__icon8 from '../img/gicon8.png'
import get__icon9 from '../img/gicon9.png'
function Get() {
  return (
    <section className='get'>
        <div className='container'>
            <div className='get__wrapper'>
                <h1>
                Get to know our main features
                </h1>
                <button>Buy now</button>
            </div>
            <div className='get__card__wrapper__bg'>
                <div className='get__card__wrapper'>
                    <GetCard title='Simple' text='Here you will not find complex technological solutions that will baffle you.' img1={get__icon1}span1='Save your resources on development'img2={get__icon2} span2='Easy to understand' img3={get__icon3} span3='User friendly' />
                    <GetCard title='Customizable' text='You can reuse blocks and individual elements to create something unique on your website.' img1={get__icon4}span1='Reuse the sections and create your own style'img2={get__icon5}span2='Save your time' img3={get__icon6} span3='Save your resources on development' img4={get__icon7} span4='Unique design'/>
                    <GetCard title='Stylish' text='Right and without unnecessary tinsel, just scroll through this template and you will see.' img1={get__icon7}span1='Unique design'img2={get__icon8}span2='Unforgettable 3D elements and trendy glass-effect' img3={get__icon9 }span3='Design that drives an industry' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Get