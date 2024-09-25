import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tictac from './components/tic-tac'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Tictac/>
      
    </>
  )
}

export default App
