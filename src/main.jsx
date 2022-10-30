import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:windi.css';
import './index.css'
import { BrowserRouter, createBrowserRouter, createHashRouter, HashRouter, json, RouterProvider } from 'react-router-dom';
import { publicRoutes } from './routes/public-routes';
import { adminRoutes } from './routes/admin-routes';

const router = createHashRouter([
  ...publicRoutes,
  ...adminRoutes,
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
