import { useDropzone } from 'react-dropzone'

const Dropzone = ({ accept, onDrop, images }) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({ onDrop, accept, multiple: false })
  const countImage = images.length
  const nameImage = images.length > 0 ? images[0].name : ''
  return (
    <div {...getRootProps()} className='dropzone'>
      <input {...getInputProps()} />
      {
        isDragActive
          ? <p>Suelta la imagen aqui...</p>
          : <>
            <img src='https://img.icons8.com/clouds/100/undefined/pictures-folder.png' />
            <div>
              {countImage > 0
                ? <p>{nameImage}</p>
                : <p>Arrastra y suelta aqui, o haz un click</p>}
            </div>
          </>
      }
    </div>
  )
}

export default Dropzone
