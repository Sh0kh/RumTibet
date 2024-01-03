import React from 'react'
import '../Style/Need.css'
import need__img from '../img/need1.png'
function Need() {
  return (
    <section className='Need'>
        <div className='container'>
            <h1>
                No need to know any technologies
            </h1>
            <div className='need__wrapper'>
                <div  className='need__img'>
                    <img src={need__img} alt="img" />
                </div>
                <div className='need__content'>
                    <h2>
                         Easy to understand
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet. Nulla viverra quam sit amet lacus accumsan, ac interdum nibh eleifend. Aliquam at elit at diam congue aliquam at eu felis. Vestibulum sed massa bibendum, porta ex consectetur, commodo tellus.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet. Nulla viverra quam sit amet lacus accumsan, ac interdum nibh eleifend. Aliquam at elit at diam congue aliquam at eu felis.
                    </p>
                    <span>
                        <div className='orange__box'>

                        </div>
                        learn more
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Need