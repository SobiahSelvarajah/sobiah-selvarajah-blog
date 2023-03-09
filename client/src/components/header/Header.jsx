import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className='header__container'>
        <div className='header__wrapper'>
            <section className='header__text'>
                <h1 className='header__heading'>
                    The Flowy Poet
                </h1>
                <hr className='header__line'/>
                <h3 className='header__motto'>
                    Where the rivers of words flow through the soul
                </h3>
            </section>
        </div>
    </header>
  )
}

export default Header;