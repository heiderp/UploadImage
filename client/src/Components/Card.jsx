import React from 'react'

const Card = ({ children }) => {
  return (
    <div className='card'>
      <div className='card__container'>
        <h2 className='card__title'>Compress your Image</h2>
        {children}
      </div>
    </div>
  )
}

export default Card
