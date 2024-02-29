import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Reset from './components/Reset'
import ValidateOtp from './components/ValidateOtp'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='reset' element={<Reset />} />
          <Route path='/validateOtp' element={<ValidateOtp />} />
          <Route path='*' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App