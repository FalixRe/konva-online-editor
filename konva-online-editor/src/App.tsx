import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaintingApp from './components/PaintingApp'
import FalixFooter from './components/FalixFooter'



function App() {

  return (
    <>
      <div>
        <PaintingApp />
      </div>
      <footer>
        <FalixFooter />
      </footer>
    </>
  )
}

export default App
