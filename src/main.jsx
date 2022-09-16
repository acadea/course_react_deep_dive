import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:windi.css';
import './index.css'
import { BrowserRouter, createBrowserRouter, HashRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Dashboard from './pages/admin/Dashboard';
import SettingIndex from './pages/admin/settings/SettingIndex';
import SettingGeneral from './pages/admin/settings/SettingGeneral';
import SettingSite from './pages/admin/settings/SettingSite';
import SettingTheme from './pages/admin/settings/SettingTheme';

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
      { path: 'manage/user/:userId', element: <Dashboard /> },
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
