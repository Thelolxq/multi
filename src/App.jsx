import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Page1 from './components/pages/Page1'
import Iniciar from './components/pages/Iniciar'
import Register from './components/pages/Register'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Iniciar/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Inicio' element={<Page1/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App