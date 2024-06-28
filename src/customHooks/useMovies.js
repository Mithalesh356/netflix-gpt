import { YOUTUBE_VIDEO_API } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addMovies } from '../utils/movieSlice';
import React, { useEffect } from 'react'
const useMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchVideo();
    }, [])
    
    const fetchVideo = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        dispatch(addMovies(json.items))
    }
}

export default useMovies;