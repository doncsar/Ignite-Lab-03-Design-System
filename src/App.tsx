import { useState } from 'react'
import './styles/global.css'



export function App () {
  const [count, setCount] = useState(0)

  return (
     <div className='bg-black mx-10 my-10'>
        <h1 className=' font-bold text-2xl text-gray-100'>Hello World</h1>
        <h3 className='text-gray-200'>Carpe that fucking diem</h3>
        <button className='button-prymary align-middle text-gray-100 bg-cyan-500 font-medium px-4 py-2 rounded hover:bg-cyan-300 hover:text-white'>
           Enviar
        </button>
     </div>
  )
}


