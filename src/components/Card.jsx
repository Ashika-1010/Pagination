import React from 'react'

const Card = ({ elem }) => {
  return (
    <a href={elem.url} target='_blank' rel='noopener noreferrer'>
      
      <div className='bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:scale-105 transition duration-300'>
        
        <img 
          className='w-full h-48 object-cover'
          src={elem.download_url} 
          alt=""
        />

        <div className='p-2'>
          <h2 className='text-sm font-semibold text-white truncate'>
            {elem.author}
          </h2>
        </div>

      </div>

    </a>
  )
}

export default Card