import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../features/user/userSlice';
import { getAuth, signOut } from 'firebase/auth';
import './UserAccount.css'
import { Link } from 'react-router-dom'
import logo from '../media/tesla_logo.svg'
import UserCar from './UserCar'
import Menu from '../SideNavigation/Menu';
import modelS from '../media/modelS.avif'
import modelX from '../media/modelX.avif'


function UserAccount({isMenuOpen, setMenuState}) {
  const OpenMenu = () => {
    setMenuState(!isMenuOpen)
}

const user = useSelector(selectUser);
const auth = getAuth();
const dispatch = useDispatch();
const history = useNavigate();

const logoutOfAccount = () => {
  signOut(auth)
    .then(() => {
      dispatch(logout())
      history('/')
    })
    .catch(error => alert(error.message));
}

return (
  <div>
    <div className='uaHeader'>
      <div className='uaHeader__brand'>
        <Link to='/'>
          <img 
            className='uaHeader__brandImage' src={logo}
            alt='Tesla logo' 
          />
        </Link>
      </div>
      <div className='uaHeader__middleLinks'>
        <Link to='/account' className="uaHeaderBtn hide">Model S</Link>
        <Link to='/account' className="uaHeaderBtn hide">Model 3</Link>
        <Link to='/account' className="uaHeaderBtn hide">Model X</Link>
        <Link to='/account' className="uaHeaderBtn hide">Model Y</Link>
        <Link to='/account' className="uaHeaderBtn hide">Solar Roof</Link>
        <Link to='/account' className="uaHeaderBtn hide">Solar Panels</Link>
        <Link to='/account' className="uaHeaderBtn hide">Shop</Link>
        <Link to='/account' className="uaHeaderBtn hide">Account</Link>
        <Link to='/' className="uaHeaderBtn hide" onClick={logoutOfAccount}>Log Out</Link>
        <div onClick={OpenMenu} className="uaHeaderBtn uaMenu">{isMenuOpen ? <Menu /> : "Menu"}</div>
      </div>
    </div>

    <div className='uaInfo'>
        <div className='userName'>
          <h4>{user?.displayName + "'s"} Tesla</h4>
        </div>
        <div className='uaInfoRight'>
          <Link to="/account" className='uaInfoRight btn'>Home</Link>
          <Link to="/account" className='uaInfoRight btn'>Account</Link>
          <Link to="/account" className='uaInfoRight btn'>History</Link>
          <Link to="/" onClick={logoutOfAccount} className='uaInfoRight btn'>Sign out</Link>
        </div>
      </div>
      <div className='userCar'>
        <div className='userCar One'>
        <UserCar
          imgSrc={modelS}
          model='model s'
          testDrive
        />
        </div>
        <div className='userCar Two'>
        <div className='divider'></div>
        <UserCar
          imgSrc={modelX}
          model='model x'
        />
        </div>
      </div>
  </div>
)
}

export default UserAccount
