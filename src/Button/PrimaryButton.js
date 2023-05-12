import React from 'react'
import './PrimaryButton.css'

function PrimaryButton({type, name, onClick}) {
  return (
    <button type={type} className="primaryBtn" name={name} onClick={onClick}>
      {name}
    </button>
  )
}

export default PrimaryButton
