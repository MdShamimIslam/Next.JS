import React from 'react'
import PhotoCrad from './PhotoCrad'

const PhotoList = ({photos}) => {
  return (
    <div className='img-grid'>
       {
        photos.map(photo => <PhotoCrad key={photo.id} photo={photo}/>)
       } 
    </div>
  )
}

export default PhotoList