import React, { useEffect, useState } from 'react'
import Card from './components/card'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h2 className='font-medium text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>LOADING...</h2>

  if(userData.length>0){
    printUserData = userData.map((elem,idx)=>{
      return (
        <div key={idx}>
          <Card elem={elem}/>
        </div>
      )
    })
  }
  
  return (
    <div className='bg-black overflow-auto h-screen p-10 text-white'>
      <h1 className='fixed bg-gray-200 text-black text-6xl'>{index}</h1>
      <div className='flex flex-wrap gap-5 pb-10'>
        {printUserData}
      </div>
      <div className='flex justify-center items-center gap-5 p-4'>
        <button className='bg-gray-600 font-bold text-white px-5 py-5 rounded cursor-pointer active:scale-95' onClick={()=>{
          if(index>1){
            setIndex(index=>index-1)
            setUserData([])
          }
        }}>Prev</button>
        <button className='bg-gray-600 font-bold text-white px-5 py-5 rounded cursor-pointer active:scale-95' onClick={()=>{
          setIndex(index=>index+1)
          setUserData([])
        }}>Next</button>
      </div>
    </div>
  )
}

export default App