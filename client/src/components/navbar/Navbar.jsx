import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar__container'>
        <a href='#home' className='navbar__logo'>
            Flowy Poet
        </a>
        <ul className='navbar__list'>
            <li className='navbar__listItem'>
                <a href='#about' className='navbar__link'>
                    About
                </a>
            </li>
            <li className='navbar__listItem'>
                <a href='#poems' className='navbar__link'>
                    Poem Gallery
                </a>
            </li>
            <li className='navbar__listItem'>
                <a href='#dictionary' className='navbar__link'>
                    Dictionary
                </a>
            </li>
            <li className='navbar__listItem'>
                <a href='#contact' className='navbar__link'>
                    Contact Me
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar