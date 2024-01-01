import React from 'react'
import '../Style/PressCard.css'
function PressCard({img, span1, text, span2}) {
  return (
    <div className='PressCard'>
        <img src={img} alt="foto" />
        <h4>
            {span1}
        </h4>
        <p>
            {text}
        </p>
        <span>
            <div className='orange__box'>

            </div>
            {span2}
        </span>
    </div>
  )
}

export default PressCard