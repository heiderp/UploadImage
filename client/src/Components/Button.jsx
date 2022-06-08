import React from 'react'

const Button = ({ images = 1, children = 'enviar', onclick = false }) => {
  return (
    <button
      onClick={onclick ? onclick : null}
      className='btn btn--submit'
      disabled={images.length === 0 && true}
      type='submit'>
      {children}
    </button>
  )
}

export default Button
