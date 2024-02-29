import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Page1 from './components/pages/Page1'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Page1/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App