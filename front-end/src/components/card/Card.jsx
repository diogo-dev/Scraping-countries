import React from 'react'
import './Card.css'

const Card = ({ name, cardClick }) => {
  return (
    <div className='card-conteiner' onClick={cardClick}>
      <p className='card-country-name'>Name: <span>{name}</span></p>
    </div>
  )
}

export default Card