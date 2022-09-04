import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Heading from './components/Heading';
import Navbar from './layouts/public/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Dashboard from './pages/admin/Dashboard';

function App() {
  
  

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='contact' element={<Contact/>} />

          <Route path="/admin">

            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='manage' element={<Dashboard/>} />
            <Route path='manage/user/:userId' element={<Dashboard/>} />
            <Route path='settings' element={<Dashboard/>} />
          </Route>

        </Routes>
      
      </BrowserRouter>
      
     
    </div>
  )
}

export default App
