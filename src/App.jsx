import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Component/Menu.jsx'
import Posts from './Component/Posts.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="flex">
        <Menu />
        <div className="flex-1 p-6">
          <div className='mb-4 flex items-center justify-between'>
            <h1 className='text-2xl font-semibold text-gray-900'>Hello Evano 👋🏼,</h1>
            <input className='mt-2 p-2 border border-gray-300 rounded-lg' type="text" placeholder="Type something..." />
          </div>
          <Posts /> 
        </div>
      </div>
    </>
  )
}


export default App
