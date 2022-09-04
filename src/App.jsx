import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Heading from './components/Heading';
import Navbar from './layouts/public/navbar/Navbar';
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Dashboard from './pages/admin/Dashboard';

function App() {
  
  const routes = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/admin',
      children: [
        {path: 'dashboard', element: <Dashboard/>},
        {path: 'manage', element: <Dashboard/>},
        {path: 'manage/user/:userId', element: <Dashboard/>},
        {path: 'settings', element: <Dashboard/>},
      ]
    }

  ])

  return (
    <div>

        {routes}
        {/* <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='contact' element={<Contact/>} />

          <Route path="/admin">

            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='manage' element={<Dashboard/>} />
            <Route path='manage/user/:userId' element={<Dashboard/>} />
            <Route path='settings' element={<Dashboard/>} />
          </Route>

        </Routes> */}
          
     
    </div>
  )
}

export default App
