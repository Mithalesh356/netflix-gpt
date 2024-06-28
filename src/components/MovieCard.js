import React from 'react'

const MovieCard = ({ popularMovie }) => {
    const { url } = popularMovie?.snippet?.thumbnails?.medium;
    console.log(popularMovie)
  return (
    <div className="flex-shrink-0 w-60" >
      <img alt='thumbnail' className='w-[480px] h-[200px]'  src={url}></img>
    </div>
  )
}

export default MovieCard
