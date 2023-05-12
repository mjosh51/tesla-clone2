import React, { useState } from 'react'
import { Tooltip } from '@mui/material'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import info from '../media/info.svg'
import AuthHeader from './AuthHeader'
import './CreateAccount.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { login } from '../features/user/userSlice'
import SecondaryButton from '../Button/SecondaryButton'
import PrimaryButton from '../Button/PrimaryButton'


function CreateAccount() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const dispatch = useDispatch();
  const history = useNavigate();
  const auth = getAuth();
  
  const createAccount = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
        updateProfile(userAuth.user, {
            displayName: fName
        }).then(() => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: fName
            }))

            history("/account")
        })
    }).catch(error => alert(error.message))
  }

  const theme = createTheme({
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: '1.3rem',
                    backgroundColor: '#fff',
                    color: '#5c5d61',
                    padding: '2rem 3rem',
                    minWidth: '40rem',
                    borderRadius: '1.2rem',
                    wordWrap: 'normal',
                    textAlign: 'justify',
                    border: 'transparent',
                    boxShadow: '0.4rem 0.4rem transparent',
                    zIndex: 5
                }
            }
        }
    }
});

  return (
    <div className='createAccountPage'>
      <AuthHeader />
      <form className='createAccountBody'>
        <p className='createAccountTitle'>Create Account</p>
        <label className='market' htmlFor="market">Select Market</label>
            {/* <a target="_blank" href="https://icons8.com/icon/63308/info">Info</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
        <div className='location'>
            <select name='location' id='location'>
                <option value="united states">United States</option>
                <option value="united states">Canada</option>
                <option value="united states">Mexico</option>
                <option value="united states">Puerto Rico</option>
            </select>
        </div>
        <div className='language'>
        <label htmlFor="language" id='language'>Select Language</label>
        <ThemeProvider theme={theme}>
            <Tooltip title={<div><p style={{ marginBottom: '2rem' }} className="toolTip">Please choose your preferred language for Tesla communications. Tesla will use this language when sending required emails.</p></div>} placement="bottom">
            <img src={info} alt="info" className='infoCreate' />
            </Tooltip>
            <CssBaseline />
        </ThemeProvider>
        </div>
        <div className='languageDiv'>
            <select className='languageSelector'>
                <option value='english'>English</option>
            </select>
        </div>
        <div className='firstNameDiv'>
            <label htmlFor="language" className='firstName'>First Name</label>
            <input type="type" className='firstNameInput' id='firstNameInput' value={fName} onChange={(e) => setFName(e.target.value)} required />
        </div>
        <div className='lastNameDiv'>
        <label htmlFor="language" className='lastName'>Last Name</label>
        <input type="text" className='lastNameInput' id='lastNameInput' value={lName} onChange={(e) => setLName(e.target.value)} required />
        </div>
        <div className='emailNewUserDiv'>
        <label htmlFor="language" className='emailNewUser'>Email Address</label>
        <input type="email" className='emailNewUserInput' id='emailInput' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='passwordNewUserDiv'>
        <label htmlFor="language" className='passwordNewUser'>Password</label>
        <input type="password" className='passwordNewUserInput' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <div className='newAccountRegBox'>
            <PrimaryButton name="create account" type="submit" onClick={createAccount} />
        </div>

        <Link to="/login"className="nextLink">
          <div className='toSignInDiv'>
            <SecondaryButton name="sign in" />
          </div>
        </Link>
        
        <div className='createAccountFooter'>
            <div>tesla &copy; 2022</div>
            <div>privacy &amp; legal</div>
            <div>contact</div>
        </div>
      </form>
    </div>
  )
}

export default CreateAccount
