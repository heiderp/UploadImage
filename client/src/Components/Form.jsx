import React, { useCallback, useState } from 'react'
import DropZone from './DropZone'
import Button from './Button'
import upload from '../services/upload'

const Form = ({ handleLoading, handleUrlCompress }) => {
  const accept = 'image/*'
  const [images, setImages] = useState([])
  const handleDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(el => {
      /* setImages(prevState => [
        ...prevState, el]) */
        console.log(el.name)
        setImages([el])
    })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    handleLoading(true)
    console.log('cargando')

    const formData = new FormData()
    images.forEach(img => {
      formData.append('files', img)
    })
    console.log(formData)
    upload(formData)
      .then(res => {
        console.log(res.data)
        console.log('ready')
        handleUrlCompress(res.data.result)
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
