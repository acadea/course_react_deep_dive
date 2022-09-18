import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:windi.css';
import './index.css'
import { BrowserRouter, createBrowserRouter, HashRouter, json, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Dashboard from './pages/admin/Dashboard';
import SettingIndex from './pages/admin/settings/SettingIndex';
import SettingGeneral from './pages/admin/settings/SettingGeneral';
import SettingSite from './pages/admin/settings/SettingSite';
import SettingTheme from './pages/admin/settings/SettingTheme';
import UserDetails from './pages/admin/UserDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/admin',
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'manage', element: <Dashboard /> },
      { 
        path: 'manage/user/:userId', 
        element: <UserDetails />,
        loader({params, request}){
          // console.log({params})
          // console.log({request})
          
          // fetch user
          // return result
          // return fetch('/api/users/' + params.userId);
          // return {
          //   hey: 'abc',
          // }
          // return new Response(JSON.stringify({
          //   hey: 'abc'
          // }));
          return json({
            hey: 'abc',
          })

        }
      },
      {
        path: 'settings',
        element: <SettingIndex />,
        children: [
          { path: 'general', element: <SettingGeneral /> },
          { path: 'site', element: <SettingSite /> },
          { path: 'theme', element: <SettingTheme /> },
        ]
      },
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
