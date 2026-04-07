import React from 'react'

const Card = ({elem}) => {
  return (
    <a href={elem.url} target='_blank' rel='noopener noreferrer'>
        <div className='h-55 w-55 bg-white rounded-2xl'>
        <img className='h-full w-full object-cover rounded-2xl' src={elem.download_url} alt="" />
        </div>
        <h2 className='font-bold'>{elem.author}</h2>
    </a>
  )
}

export default Card