import React from 'react'

const Carrousel = ({ imgList }) => {
  return (
    <div className='carrousel'>
        {imgList.map((image,i )=> (
          <Image key={i} src={image.src} alt={image.title} />
        ))}
    </div>
  )
}

export default Carrousel

const Image = ({ src, alt }) => {
  return (
    <div className='carrousel__slider'>
      <img src={src} alt={alt} />
    </div>
  )
}
