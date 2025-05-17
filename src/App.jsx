import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ciclo1 from './components/Ciclo1.jsx'
import Ciclo2 from './components/Ciclo2.jsx'
import Ciclo3 from './components/Ciclo3.jsx'
import Ciclo4 from './components/Ciclo4.jsx'
import Ciclo5 from './components/Ciclo5.jsx'
import Ciclo6 from './components/Ciclo6.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ciclo1 />
      <Ciclo2 />
      <Ciclo3 />
      <Ciclo4 />
      <Ciclo5 />
      <Ciclo6 />
    </>
  )
}

export default App
