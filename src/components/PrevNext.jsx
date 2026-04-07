import React from 'react'

const PrevNext = ({ index, setIndex, setUserData }) => {
  return (
    <div className='h-[18%] bg-zinc-900 border-t border-zinc-700 flex justify-center items-center gap-6'>

      <button
        className='bg-zinc-700 hover:bg-zinc-600 px-6 py-2 rounded-lg transition disabled:opacity-40'
        disabled={index === 1}
        onClick={() => {
          setIndex(prev => prev - 1)
          setUserData([])
        }}
      >
        Prev
      </button>

      <h3 className='text-lg font-semibold'>Page {index}</h3>

      <button
        className='bg-zinc-700 hover:bg-zinc-600 px-6 py-2 rounded-lg transition'
        onClick={() => {
          setIndex(prev => prev + 1)
          setUserData([])
        }}
      >
        Next
      </button>

    </div>
  )
}

export default PrevNext