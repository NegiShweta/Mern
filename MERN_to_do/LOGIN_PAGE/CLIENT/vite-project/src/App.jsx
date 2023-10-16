import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Home from "./Pages/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = '/' element={<Home />} />
      <Route path = '/Register' element={<Register />} />
      <Route path = '/Login' element={<Login />} />

    </Routes>
    </>
  )
}

export default App
