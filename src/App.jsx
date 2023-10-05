import { useState } from 'react'

import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Home/>
     <Footer/>
      
    </>
  )
}

export default App
