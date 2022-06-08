import React, { useCallback, useState } from 'react'
import DropZone from './DropZone'
import Button from './Button'
import upload from '../services/upload'

const Form = ({ handleLoading, handleUrlCompress }) => {
  const accept = 'image/*'
  const [images, setImages] = useState([])
  const handleDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(el => {
      setImages([el])
    })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    handleLoading(true)
    const formData = new FormData()
    images.forEach(img => {
      formData.append('files', img)
    })
    upload(formData)
      .then(res => {
        handleUrlCompress(res.data)
        handleLoading(false)
      })
      .catch(err => console.log(err))
  }
  return (
    <form className='compress__form' onSubmit={handleSubmit}>
      <DropZone accept={accept} onDrop={handleDrop} images={images} />
      <Button images={images} />
    </form>
  )
}

export default Form
