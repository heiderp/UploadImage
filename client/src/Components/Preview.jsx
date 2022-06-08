import React from 'react'
import Button from './Button'

const Preview = ({ urlCompress, handleUrlCompress }) => {
  const handleClick = () => {
    handleUrlCompress(false)
  }
  return (
    <div className='preview'>
        <div className="preview__image">
          <img src={urlCompress} alt="result" />
        </div>
        <input className='preview__input' type="text" value={urlCompress} readOnly />
        <Button onclick={handleClick}>volver</Button>
    </div>
  )
}

export default Preview
