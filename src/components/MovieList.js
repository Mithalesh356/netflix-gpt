import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, popularMovies }) => {
    
    return (
        <div>
            <span className='text-2xl font-bold pl-4'>{title}</span>
            <div className="flex overflow-x-auto space-x-4 p-4 pt-1 hide-scrollbar ">
                {popularMovies&& popularMovies.map((popularMovie,index)=><MovieCard popularMovie={popularMovie} />)}
            
            </div>
        </div>
    );
}

export default MovieList
