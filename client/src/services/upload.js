import axios from 'axios'
const upload = async (data) => {
  try {
    /* const body = { files: data } */
    const body = data ?? 'datos'
    const res = await axios.post('http://localhost:3002/img', body)
    return res
  } catch (error) {
    return error
  }
}

export default upload
