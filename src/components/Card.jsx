import React from 'react'

const Card = ({ name, image, rating, count }) => {
  return (
    <div className='card'>
      <div className='title'>{name}</div>
      <img src={image} className='img' alt='pizza' width={200} height={200} />
      <div className='ratAndCount'>Rating: {rating}</div>
      <div className='ratAndCount'>Count:{count}</div>
    </div>
  )
}

export default Card
