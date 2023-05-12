import React from 'react'
import './Section.css'
import '../responsive.css'

function Section() {
  return (
    <>
    <div className='section one'>
      <div className='section__content'>
        <h1 className='section__content--title'>Model 3</h1>
        <h4 className='section__content--subtitle'>Order Online for <a href='#'>Touchless Delivery</a></h4>
      </div>
      <div className='section__actions'>
        <a className='section__actions--btn custom__btn'>custom order</a>
        <a className='section__actions--btn existing__btn'>existing inventory</a>
      </div>
    </div>
    <div className="section two">
        <div className="section__content">
          <h1 className="section__content--title">model y</h1>
          <h2 className="section__content--subtitle">order online <a href="">touchless delivery</a></h2>
        </div>
        <div className="section__actions">
          <a className="section__actions--btn custom__btn">custom order</a>
          <a className="section__actions--btn existing__btn">existing inventory</a>
        </div>
      </div>
      <div className="section three">
        <div className="section__content">
          <h1 className="section__content--title">model s</h1>
          <h2 className="section__content--subtitle">order online <a href="">touchless delivery</a></h2>
        </div>
        <div className="section__actions">
          <a className="section__actions--btn custom__btn">custom order</a>
          <a className="section__actions--btn existing__btn">existing inventory</a>
        </div>
      </div>
      <div className="section four">
        <div className="section__content">
          <h1 className="section__content--title">model x</h1>
          <h2 className="section__content--subtitle">order online <a href="">touchless delivery</a></h2>
        </div>
        <div className="section__actions">
          <a className="section__actions--btn custom__btn">custom order</a>
          <a className="section__actions--btn existing__btn">existing inventory</a>
        </div>
      </div>
      <div className="section five">
        <div className="section__content">
          <h1 className="section__content--title">solar panels</h1>
          <h2 className="section__content--subtitle">order online <a href="">touchless delivery</a></h2>
        </div>
        <div className="section__actions">
          <a className="section__actions--btn custom__btn">custom order</a>
          <a className="section__actions--btn existing__btn">existing inventory</a>
        </div>
      </div>
      <div className="section six">
        <div className="section__content">
          <h1 className="section__content--title">solar roof</h1>
          <h2 className="section__content--subtitle">order online <a href="">touchless delivery</a></h2>
        </div>
        <div className="section__actions">
          <a className="section__actions--btn custom__btn">custom order</a>
          <a className="section__actions--btn existing__btn">existing inventory</a>
        </div>
      </div>
      <div className="section seven">
        <div className="section__content">
          <h1 className="section__content--title">accessories</h1>
        </div>
        <div className="section__actions">
          <a className="section__actions--btn custom__btn">shop now</a>
        </div>
      </div>
      </>
  )
}

export default Section
