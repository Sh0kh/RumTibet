import React from 'react'
import '../Style/Footer.css'
import footer1 from '../img/footer_1.png'
import footer2 from '../img/footer_2.png'
function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='footer__wrapper'>
                <div className='footer__content'>
                    <img src={footer1} alt="logo" />
                    <h4>
                    Kyiv, Ukraine
                    </h4>
                    <h3>
                     hello.craftengine@gmail.com
                    </h3>
                    <h5>
                        Made with ❤️ by <span>Craftengine </span>
                    </h5>
                    <h6>
                    © Swipe. All rights reserved. Powered by <span>
                    Webflow
                    </span>
                    </h6>
                </div>
                <div className='footer__ul'>
                    <ul>
                        <li><a href="!#">About</a></li>
                        <li><a href="!#">Features</a></li>
                        <li><a href="!#">Pricing</a></li>
                        <li><a href="!#">Team</a></li>
                    </ul>
                    <ul>
                        <li><a href="!#">FAQ</a></li>
                        <li><a href="!#">Feedback</a></li>
                        <li><a href="!#">Blog</a></li>
                        <li><a href="!#">Contact</a></li>
                    </ul>
                    <ul>
                        <li><a href="!#">Twitter</a></li>
                        <li><a href="!#">Facebook</a></li>
                        <li><a href="!#">Instagram</a></li>
                        <li><a href="!#">Licensing</a></li>
                    </ul>
                    <div className='footernn'>
                    </div>
                    <div className='footernn'></div>
                    <div className='footernn'></div>
                </div>
            </div>
            <img className='footer__foto1' src={footer2} alt="foto" />
        </div>
    </footer>
  )
}

export default Footer