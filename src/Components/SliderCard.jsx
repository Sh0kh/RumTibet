import React from 'react'
import '../Style/SliderCard.css'
function SliderCard({img,title,text}) {
  return (
    <div className='SliderCard'>
        <img className='person1' src={img} alt="foto" />
        <h2>
            {title}
        </h2>
        <p>
            {text}
        </p>
    </div>
  )
}

export default SliderCard