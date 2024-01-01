import React from 'react'
import '../Style/Prise.css'
import prise1 from '../img/prise1.svg'
import prise2 from '../img/prise2.png'
import prise3 from '../img/prise3.png'
function Prise() {
  return (
    <section className='prise'>
        <div className='container'>
            <h1>
                Price plans
            </h1>
            <div className='prise__wrapper'>
                <div className='prise__card1'>
                    <h2>
                      Basic
                    </h2>
                    <ul>
                      <li>
                          <img src={prise1} alt="icon" />
                          Free 30-days trial period
                      </li>
                      <li>
                          <img src={prise1} alt="icon" />
                          Professional design and guidelines for customization
                      </li>
                      <li>
                          <img src={prise1} alt="icon" />
                          Unlimited amount of pages to change
                      </li>
                      <li id='prise__opasite'>
                          <img src={prise1} alt="icon" />
                          24/7 technical support
                      </li>
                      <li id='prise__opasite'>
                          <img src={prise1} alt="icon" />
                          Advenced security components
                      </li>
                    </ul>
                    <div className='prise__card__grid'>
                        <div>
                            <h3>
                              $29
                            </h3>
                            <span>
                              / month
                            </span>
                        </div>
                        <button>
                          Buy now
                        </button>
                    </div>
                </div>
                <div className='prise__card2'>
                    <div className='card__title'>
                        <h2>
                          Pro
                        </h2>
                        <h4>
                          Best value
                        </h4>
                        </div>
                        <ul>
                          <li>
                            <img src={prise1} alt="icon" />
                            Free 30-days trial period
                          </li>
                          <li>
                            <img src={prise1} alt="icon" />
                            Professional design and guidelines for customization
                          </li>
                          <li>
                            <img src={prise1} alt="icon" />
                            Unlimited amount of pages to change
                          </li>
                          <li>
                            <img src={prise1} alt="icon" />
                            24/7 technical support
                          </li>
                          <li>
                            <img src={prise1} alt="icon" />
                            Advenced security components
                          </li>
                        </ul>
                        <div className='prise__card__grid'>
                            <div>
                              <h3>
                                $39
                              </h3>
                                <span>
                                  / month
                                </span>
                            </div>
                            <button>
                              Buy now
                            </button>
                        </div>
                </div>
            </div>
            <img className='prise_foto1' src={prise2} alt="foto" />
            <img className='prise_foto2' src={prise3} alt="foto" />
        </div>
    </section>
  )
}

export default Prise