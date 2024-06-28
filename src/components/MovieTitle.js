import React from 'react'

const MovieTitle = ({title,description}) => {
  return (
    <div className='w-screen aspect-video pt-32 pl-20 absolute text-white bg-gradient-to-br from-black'>
          <p className='pb-6 text-3xl font-bold'>{title}</p>
          <p className='w-[580px]'>{description}</p>
          <div className='mt-5'>
              <button className='px-8 py-2 bg-white mr-5 rounded-xl text-black hover:border-gray-400'><i class="fa-solid fa-play"></i> Play</button>
              <button className='px-5 py-2 bg-slate-400 rounded-xl'><i class="fa-solid fa-circle-info"></i> More Info</button>
          </div>
    </div>
  )
}

export default MovieTitle
