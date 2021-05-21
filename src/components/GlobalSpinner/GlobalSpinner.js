import React from 'react'
import './globalSpinner.css'
import { useGlobalSpinnerContext } from '../../context/GlobalSpinnerContext'

const GlobalSpinner = () => {
  const isGlobalSpinnerOn = useGlobalSpinnerContext()
  return isGlobalSpinnerOn ? (
    <div className="global-spinner-overlay">
      <p>Loading...</p>
    </div>
  ) : null
}

export default GlobalSpinner