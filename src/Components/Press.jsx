import React from 'react'
import '../Style/Press.css'
import PressCard from './PressCard'
import press1 from '../img/press1.png'
import press2 from '../img/press2.png'
import press3 from '../img/press3.png'
function Press() {
  return (
    <section className='press'>
        <div className='container'>
            <div className='press__title__wrapper'>
                <h1>
                In the press
                </h1>
                <button>
                View more
                </button>
            </div>
            <div className='Press__wrapper'>
                <PressCard img={press1} span1='Must to read'text='Newsletters template: blog posts, articles, features, sales'span2='read more' />
                <PressCard img={press2} span1='New'text='Nextgen - new temlate about games and industry'span2='read more' />
                <PressCard img={press3} span1='Must to read'text='Enigma Software for startups is the best choice'span2='read more' />
            </div>
        </div>
    </section>
  )
}

export default Press