import React, { useCallback } from 'react';
import './Header.css';
import Menu from '../SideNavigation/Menu';
import { Link } from 'react-router-dom';
import logo from '../media/tesla_logo.svg';


function Header({isMenuOpen, setMenuState}) {
  const Blur = () => {
    const blur = document.querySelector('.blurOverlay')
    blur.classList.toggle('is-active')
  }

  // const lockScroll = useCallback(() => {
  //   document.body.style.overflow = 'hidden';
  // }, [])

  const lockScroll = () => {
    if (!isMenuOpen) {
      document.body.style.overflowY = "hidden"
    }

    else {
      document.body.style.overflowY = "scroll"
    }
  }


  const OpenMenu = () => {
    Blur();
    lockScroll();
    ToggleMenu();
  }

  const ToggleMenu = () => {
    setMenuState(!isMenuOpen)
  }

  
  return (
    <div>
      <div class="blurOverlay"></div>
      <div className="top__block">
        <a className="top__blockText" href="#">Read Tesla's 2021 Impact Report</a>
      </div>
      <div className='header'>
        <div className='header__brand'>
          <Link to='/'>
            <img 
              className='header__brandImage' src={logo}
              alt='Tesla logo' 
            />
          </Link>
        </div>
        <div className='header__middleLinks'>
          <Link to='/' className="headerBtn">Model S</Link>
          <Link to='/' className="headerBtn">Model 3</Link>
          <Link to='/' className="headerBtn">Model X</Link>
          <Link to='/' className="headerBtn">Model Y</Link>
          <Link to='/' className="headerBtn">Solar Roof</Link>
          <Link to='/' className="headerBtn">Solar Panels</Link>
        </div>
        <div className='header__right'>
          <Link to='/' className="headerBtn hide">Shop</Link>
          <Link to='/auth' className="headerBtn hide">Account</Link>
          <div onClick={OpenMenu} className="headerBtn homeMenu" tabIndex="0">{isMenuOpen ? <Menu /> : "Menu"}</div>
        </div>
      </div>
    </div>
  )
}

export default Header
