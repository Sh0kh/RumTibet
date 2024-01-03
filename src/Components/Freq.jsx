import React from 'react'
import '../Style/Freq.css'

import freq2 from '../img/freq2.svg'
function Freq() {
  return (
    <section className='freq'>
        <div className='container'>
            <div className='freq__title__wrapper'>
                <h1>
                Frequently asked questions
                </h1>
                <img className='freq__foto1' src={'	https://uploads-ssl.webflow.com/6384aa132a10246069befc63/6384aa132a102422a8befca5_faq-bg.png'} alt="foto" />
            </div>
            <ul>
                <li>
                    <img src={freq2} alt="icon" />
                    Make the FAQs easy to find
                </li>
                <li>
                    <img src={freq2} alt="icon" />
                    Keep answers short
                </li>
                <li>
                    <img src={freq2} alt="icon" />
                    Write the FAQ sheet in an actual question-and-answer format
                </li>
                <li>
                    <img src={freq2} alt="icon" />
                    Write questions from the point of view of your customer
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Freq