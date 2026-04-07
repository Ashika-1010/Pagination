import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import PrevNext from './components/PrevNext'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`
    )
    setUserData(response.data)
  }

  useEffect(() => {
    getData()
  }, [index])

  let printUserData = (
    <h2 className='text-gray-500 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      Loading...
    </h2>
  )

  if (userData.length > 0) {
    printUserData = userData.map((elem) => (
      <Card key={elem.id} elem={elem} />
    ))
  }

  return (
    <div className='bg-black h-screen text-white flex flex-col'>

      <div className='h-[82%] overflow-auto p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {printUserData}
      </div>

      <PrevNext index={index} setIndex={setIndex} setUserData={setUserData} />

    </div>
  )
}

export default App