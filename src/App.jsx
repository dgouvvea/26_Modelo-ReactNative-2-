import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponents from './components/ClassComponents'
import PropsExample from './components/PropsExample'
//Funçao principal
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Alô mundo</h1>
   
    <FunctionalComponent />
    <ClassComponents />
    <PropsExample nome="Donizete" disciplina="Progamação Mobile" />
    </>
  )
}

export default App
