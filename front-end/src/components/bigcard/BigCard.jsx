import React from 'react'
import './BigCard.css'

const BigCard = ({ name, capital, population, area, handleClose }) => {
  return (
    <div className='bigcard-conteiner'>
      <p className='bigcard-country-name'>Name: <span>{name}</span></p>
      <p className='card-country-capital'>Capital: <span>{capital}</span></p>
      <p className='bigcard-country-population'>Population: <span>{population}</span></p>
      <p className='bigcard-country-area'>Area: <span>{area} km²</span></p>
      <button className='bigcard-close-button' onClick={handleClose}>Close</button>
    </div>
  )
}

export default BigCard