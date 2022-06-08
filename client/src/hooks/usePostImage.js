import { useEffect, useState } from 'react'
import upload from '../services/upload'

/* const usePostImage = (state, listImage) => {
  const [loading, setLoading ] = useState(false)
  const [compressImage, setCompressImage ] = useState(null)
  useEffect(() => {
    if (listImage.length > 0) {
      console.log('use', listImage[0].byteLength)
      listImage.forEach(element => {
        console.log(element.byteLength)
      })
      const form = {
        arrayBuffer: listImage[0].byteLength
      }
      state.length > 0 &&
      upload(form)
        .then(res => console.log(res.data))
        .catch(error => console.error(error))
    }
  }, [state])
  return { loading, compressImage }
} */

const usePostImage = async (state) => {
  const [loading, setLoading ] = useState(false)
  const [compressImage, setCompressImage] = useState(null)
  const formData = new FormData()
  formData.append('files', state)
  if (state !== undefined) {
    upload(formData)
      .then(res => {
        setCompressImage(res.data)
      })
      .catch(error => console.log(error))
  }
}

export default usePostImage
