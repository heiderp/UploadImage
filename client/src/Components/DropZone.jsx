import { useDropzone } from 'react-dropzone'

const Dropzone = ({ accept, onDrop, images }) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({ onDrop, accept })
  const countImage = images.length
  return (
    <div {...getRootProps()} className='dropzone'>
      <input {...getInputProps()} />
      {
        isDragActive
          ? <p>Drop the files here ...</p>
          : <>
            <img src='https://img.icons8.com/clouds/100/undefined/pictures-folder.png' />
            <div>
              {countImage > 0
                ? <p>Posee{countImage}</p>
                : <p>Arrastra y suelta aqui, o haz un click</p>}
            </div>
          </>
      }
    </div>
  )
}

export default Dropzone
