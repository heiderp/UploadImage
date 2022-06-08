import React from 'react'

const List = ({ imgList }) => {
  return (
    <div className='list_image'>
        {imgList.map((img,i) => (
          <Image
            key={i}
            urlImg={img.src}
            titleImg={img.title}
          />
        ))}
    </div>
  )
}

export default List

const Image = ({ urlImg, titleImg }) => {
  return (
    <img src={urlImg} alt={titleImg} />
  )
}
