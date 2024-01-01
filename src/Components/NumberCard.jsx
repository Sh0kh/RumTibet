import React from 'react'
import '../Style/NumberCard.css'
function NumberCard({title,text,num}) {
  return (
    <div className='number__card'>
        <div className='number__card__wrapper'>
            <div>
                <h2>
                    {title}
                </h2>
                <p>
                    {text}
                </p>
            </div>
            <h1>
                {num}
            </h1>
        </div>
    </div>
  )
}

export default NumberCard