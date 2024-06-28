import React from 'react'
import { useSelector } from 'react-redux'

const BackgroundMovie = () => {
    const trailorid = useSelector(store => store.movie.trailorId);
  return (
    <div>
        <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${trailorid}?si=BUP-g29NcxL6y8qb`+`&mute=1&autoplay=1`} title="YouTube video player"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default BackgroundMovie
    