import React from 'react'
import './SecondaryButton.css'

function SecondaryButton({type, name, onClick}) {
  return (
    <button className="secondaryBtn" name={name} type={type} onClick={onClick}>
      {name}
    </button>
  )
}

export default SecondaryButton
