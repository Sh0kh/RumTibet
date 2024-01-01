import React from 'react'
import '../Style/GetCard.css'
function GetCard({title,text,img1,img2,img3,img4,span1,span2,span3,span4}) {
  return (
    <div className='get__card'>
        <h2>
            {title}
        </h2>
        <p>
            {text}
        </p>
        <div className='card__grid'>
            <img src={img1} alt="icon" />
            <h4>{span1}</h4>
        </div>
        <div className='card__grid'>
            <img src={img2} alt="icon" />
            <h4>{span2}</h4>
        </div>
        <div className='card__grid'>
            <img src={img3} alt="icon" />
            <h4>{span3}</h4>
        </div>
        <div className='card__grid'>
            <img src={img4} alt="" />
            <h4>{span4}</h4>
        </div>
    </div>
  )
}

export default GetCard