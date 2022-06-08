import React from 'react'
import useByteToString from '../hooks/useByteToString'
import Button from './Button'

const Preview = ({ urlCompress, handleUrlCompress }) => {
  const handleClick = () => {
    handleUrlCompress(false)
  }
  const { result, compress } = urlCompress
  const { toBytesInput, toBytesOutput } = compress
  const inputByteString = useByteToString({ bytes: toBytesInput, espacio: 3 })
  const outputByteString = useByteToString({ bytes: toBytesOutput, espacio: 3 })

  return (
    <div className='preview'>
      <div className='preview__image'>
        <img className='image__display' src={result} alt='result' />
      </div>
      <input className='preview__input' type='text' value={result} readOnly />
      <table className='preview__data'>
        <thead>
          <tr className='table__row table--header'>
            <td>Entrada</td>
            <td>Salida</td>
          </tr>
        </thead>
        <tbody>
          <tr className='table__row'>
            <td className='table__cell'>{inputByteString}</td>
            <td className='table__cell'>{outputByteString}</td>
          </tr>
        </tbody>
      </table>
      <Button onclick={handleClick}>volver</Button>
    </div>
  )
}

export default Preview
