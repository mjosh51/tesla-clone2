import React from "react"
import './AuthHeader.css'
import { Link } from 'react-router-dom'
import globe from '../media/globe.png'
import logo from '../media/tesla_logo.svg'

function AuthHeader () {
    return (
        <div className='loginHeader'>
                <div className='header__brand'>
                    <Link to='/auth'>
                        <img
                            className='loginBrandImage' src={logo}
                            alt='Tesla logo'
                        />
                    </Link>
                </div>

                <div className='headerRight'>
                    {/* <a href="https://www.flaticon.com/free-icons/globe" title="globe icons">Globe icons created by srip - Flaticon</a> */}
                    <img src={globe} className="globe_icon" alt="globe_icon" />
                    <span className="langBtn">
                        en-US
                    </span>
                </div>
        </div>
    )
}

export default AuthHeader;