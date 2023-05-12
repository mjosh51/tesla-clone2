import React from 'react'
import './UserCar.css'
import PrimaryButton from '../Button/PrimaryButton'
import SecondaryButton from '../Button/SecondaryButton'
import {modelS} from '../media/modelS.avif'


function UserCar({imgSrc, model, testDrive}) {
 
  return (
    <div className='car'>
      <div className='carImage'>
        <img src={imgSrc} alt='car' className='imgOfCar' />
      </div>
      <div className='carInfoBody'>
      <h2 className='carModel'>{model}</h2>
      <div className='carActions'>
        <PrimaryButton name='order' />
        {testDrive && <SecondaryButton name='test drive' />}
      </div>
      <p className='carInfo'>
        <span>Request a Call</span> to speak with a product specialist, value
        your trade-in or apply for leasing
      </p>
    </div>
    </div>
  )
}

export default UserCar
