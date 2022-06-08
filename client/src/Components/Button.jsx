import React from 'react'

const Button = ({ images }) => {
  return (
    <button className='btn btn--submit' disabled={images.length === 0 && true} type='submit'>Enviar</button>
  )
}

export default Button
