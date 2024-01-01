import React, { useState } from 'react'
// import React from 'react'
import '../Style/Header.css'
import header__logo from '../img/haeder__logo.png'
import Hamburger from 'hamburger-react'
function Header() {

    const [isIdAdded, setIdAdded] = useState(false);
    const handleClick = () => {
      setIdAdded(!isIdAdded);
      console.log('ok');
    };
    const idName = isIdAdded ? 'my-element-id' : '';
    const idName2 = isIdAdded ? 'my-element-id2' : '';

  return (
    <header>
        <div className='container'>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <img src={header__logo} alt="" />
                </div>
                <nav className='header__nav'>
                    <ul className='header__list'>
                        <li><a href="!#">About</a></li>
                        <li><a href="!#">Features</a></li>
                        <li><a href="!#">Pricing</a></li>
                        <li><a href="!#">Team</a></li>
                        <li><a href="!#">FAQ</a></li>
                        <li><a href="!#">Feedback</a></li>
                        <li><a href="!#">Blog</a></li>
                        <li><a href="!#">Contact</a></li>
                        <li className='header__btn'>
                            <button>
                            Buy now
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className='header__button'>
                    <button>
                         Buy now
                    </button>
                </div>
                <div id={idName2} onClick={handleClick} className='hamburger'>
                <Hamburger  onToggle={toggled => {
                    if (toggled) {
                        
                        
                    } else {
                        // close a menu
                    }
                    }} />
                </div>
            </div>
            <div className='modal__medu' id={idName}>
            <ul className='madal__list'>
                        <li><a href="!#">About</a></li>
                        <li><a href="!#">Features</a></li>
                        <li><a href="!#">Pricing</a></li>
                        <li><a href="!#">Team</a></li>
                        <li><a href="!#">FAQ</a></li>
                        <li><a href="!#">Feedback</a></li>
                        <li><a href="!#">Blog</a></li>
                        <li><a href="!#">Contact</a></li>
                        <li >
                            <button className='madal__btn'>
                            Buy now
                            </button>
                        </li>
                    </ul>
            </div>
        </div>
    </header>
  )
}

export default Header