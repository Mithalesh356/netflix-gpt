import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondryContainer = () => {
    const popularMovies = useSelector(store => store.movie.movies);
  return (
    <div className='bg-black text-white'>
          <div className='-mt-52 z-20 relative'>
            <MovieList title="Popular Movies" popularMovies={popularMovies} />
          <MovieList title="Now Playing Movies" popularMovies={popularMovies} />
          <MovieList title="Latest Movies" popularMovies={popularMovies} />
          <MovieList title="UpComing Movies" popularMovies={popularMovies}  />
          </div>
    </div>
  )
}

export default SecondryContainer
