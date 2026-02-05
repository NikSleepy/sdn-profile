import React, { StrictMode } from 'react'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import router from './router/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
); 
