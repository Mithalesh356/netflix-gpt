import React from 'react'
import MovieTitle from './MovieTitle'
import BackgroundMovie from './BackgroundMovie'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailorId } from '../utils/movieSlice'

const MainContainer = () => {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movie.movies);
    if (movies) {
        var { title, description } = movies[3]?.snippet?.localized;
        var movie = movies[3]
        dispatch(addTrailorId(movie.id));
    }
  return (
    <div>
          <MovieTitle title={title} description={description} />
          <BackgroundMovie />
    </div>
  )
}

export default MainContainer
