import React from 'react'
import './error-indicator.css'
import icon from './error.png'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img className="error-img" src={icon} alt="error icon" />
      <span>Oops!</span>
      <span>Something has gone wrong</span>
    </div>
  )
}

export default ErrorIndicator