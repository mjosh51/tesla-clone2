import React, { useState, useEffect } from "react";
// import "./App.css";
import Header from "./Home/Header";
import Footer from "./Home/Footer"
// import "./responsive.css"
import Section from "./Home/Section";
import Login from "./Auth/Login";
import CreateAccount from "./Auth/CreateAccount";
import UserAccount from "./Account/UserAccount";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import {login, logout, selectUser } from './features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import Auth from "./Auth/Auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";



function App() {
  const [isMenuOpen, setMenuState] = useState(false);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  

  return (
    <BrowserRouter>
      <div className="appPage">
       <Routes>
        <Route exact path="/"
          element={
          <>
          <Header isMenuOpen={isMenuOpen} setMenuState={setMenuState} />
          <Section />
          <Footer />
          </>} 
        />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<CreateAccount />} />
        <Route exact path="/account" element={<UserAccount isMenuOpen={isMenuOpen} setMenuState={setMenuState} />} />
       </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App;
