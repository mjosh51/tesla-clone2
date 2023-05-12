import React, { useState } from 'react'
import './Auth.css'
import info from '../media/info.svg'
import { Tooltip } from '@mui/material'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import AuthHeader from '../Auth/AuthHeader'
import { Link } from 'react-router-dom';
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

function Auth() {
    const [email, setEmail] = useState('');
    
    return (

        <div className='login'>
            <AuthHeader />
            <form className='signIn'>
                <p className='signInTitle'>Sign In</p>
                <label className='label'>
                    <span className='email'>Email address</span>
                    {/* <a target="_blank" href="https://icons8.com/icon/63308/info">Info</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                    <ThemeProvider theme={theme}>
                        <Tooltip title={<div><p style={{ marginBottom: '2rem' }} className="toolTip">If your account is linked to an email address you no longer have access to, please sign into your account and update your email address under account settings</p>
                            <p>If you have trouble signing in, please visit our <a href='#' className="tooltipLink">support page</a></p></div>} placement="bottom">
                            <img src={info} alt="info" className='info' />
                        </Tooltip>
                        <CssBaseline />
                    </ThemeProvider>
                </label>

                <div className='loginAction'>
                    <input type="email" className='emailInput' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Link to="/login" className='nextLink'><PrimaryButton name="next" value={email} /></Link>
                </div>
                <div className='forgotDetails'>
                    <a href='#'>Forgot email?</a>
                    <span>|</span>
                    <a href='#'>Forgot password?</a>
                </div>
                <div className='lineDiv'>
                    <hr />
                    <span className='lineOR'>OR</span>
                    <hr />
                </div>
                <Link to="/signup" className='nextLink'>
                    <SecondaryButton name="create account" />
                </Link>

                <div className='accountFooter'>
                    <div>tesla &copy; 2022</div>
                    <div>privacy &amp; legal</div>
                    <div>contact</div>
                </div>
            </form>
        </div>

    )
}

export default Auth
