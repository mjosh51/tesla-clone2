import React, { useState } from 'react'
import './Login.css'
import info from '../media/info.svg'
import { Tooltip } from '@mui/material'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import AuthHeader from './AuthHeader'
import { Link, useNavigate } from 'react-router-dom';
import firebaseApp from '../config';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { login } from '../features/user/userSlice';
import SecondaryButton from '../Button/SecondaryButton';
import PrimaryButton from '../Button/PrimaryButton';



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

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useNavigate();
    const auth = getAuth();

    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password).then(userAuth => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName
        }))
        history("/account")
    }).catch(error => alert(error.message))
  }

    return (

        <div className='loginForm'>
            <AuthHeader />
            <form className='signIn'>
                <p className='signInTitle'>Sign In</p>
                <div className='emailHead'>
                    <label htmlFor='email' className='emailTitle'>Email address</label>
                    {/* <a target="_blank" href="https://icons8.com/icon/63308/info">Info</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                    <ThemeProvider theme={theme}>
                        <Tooltip title={<div><p style={{ marginBottom: '2rem' }} className="toolTip">If your account is linked to an email address you no longer have access to, please sign into your account and update your email address under account settings</p>
                                <p>If you have trouble signing in, please visit our <a href='#' className="tooltipLink">support page</a></p></div>} placement="bottom">
                                <img src={info} alt="info" className='info' />
                        </Tooltip>
                        <CssBaseline />
                    </ThemeProvider>
                </div>
                <div className='emailInputBox'>
                    <input type="email" className='loginEmailInput' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
        
                <div className='passwordBox'>
                    <span className='passwordTitle'>Password</span>
                    <input type="password" className='passwordInput' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div className='signInBox'>
                    <PrimaryButton name="sign in" type="submit" onClick={signIn} />
                </div>
                <div className='forgotLogin'>
                    <a href='#'>Forgot email?</a>
                    <span>|</span>
                    <a href='#'>Forgot password?</a>
                </div>
                <div className='lineDivider'>
                    <hr />
                    <span className='lineOR'>OR</span>
                    <hr />
                </div>
                <Link to="/signup" className='nextLink'>
                    <div className='createAccount--login'>
                    <SecondaryButton name="create account" />
                    </div>
                </Link>
                <div className='loginFooter'>
                    <div>tesla &copy; 2022</div>
                    <div>privacy &amp; legal</div>
                    <div>contact</div>
                </div>
            </form>
        </div>

    )
}

export default Login
