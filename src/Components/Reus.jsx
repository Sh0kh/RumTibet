import React from 'react'
import '../Style/Reus.css'
import reus1 from '../img/reus1.png'
function Reus() {
  return (
    <section className='Reus'>
        <div className='container'>
            <h1>
             Reuse the sections
            </h1>
            <div className='reus__wrapper'>
                <div className='reus__content'>
                    <h2>
                    Easy to change
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet. Nulla viverra quam sit amet lacus accumsan, ac interdum nibh eleifend. Aliquam at elit at diam congue aliquam at eu felis. Vestibulum sed massa bibendum, porta ex consectetur, commodo tellus.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet. Nulla viverrum nibh eleifend. Aliquam at elit at diam congue aliquam at eu felis.
                    </p>
                    <span>
                        <div className='orange__box'>

                        </div>
                        learn more
                    </span>
                </div>
                <div className='reus__img'>
                    <img src={reus1} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reus