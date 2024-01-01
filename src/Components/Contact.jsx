import React from 'react'
import '../Style/Contact.css'
import conntact_bg1 from '../img/prise2.png'
import conntact_bg2 from '../img/prise3.png'
function Contact() {
  return (
    <section className='contact'>
        <div className='container'>
            <h1>
                Contact us
            </h1>
            <div className='contact__wrapper'>
                <div className='contact__content'>
                    <p>
                    The most popular questions are listed in the FAQs section. We are happy to help you with any of your questions, wishes and objections.
                    </p>
                    <span>
                    Support service will contact you within 48 hours.
                    </span>
                </div>
                <form className='contact__form' >
                    <label htmlFor="">
                        How can we call you? <br />
                        <input required  type="text" placeholder="Enter your name" />
                    </label>

                    <label htmlFor="">
                       How can we contact you? <br />
                        <input required  type="text" placeholder='Enter your email' />
                    </label>

                    <label htmlFor="">
                    How can we help you? <br />
                        <input id='con__inp' required  type="text" placeholder='Enter your message' />
                    </label>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
            <img className='con__bg1' src={conntact_bg1} alt=" foto" />
            <img className='con_bg2' src={conntact_bg2} alt="foto" />
        </div>
    </section>
  )
}

export default Contact