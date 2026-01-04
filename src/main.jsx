import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { router } from './Router/Routes.jsx'
import Authprovider from './Context/Authprovider.jsx'
import ThemeProvider from './Context/ThemeProvider.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Authprovider>
        <RouterProvider router={router}></RouterProvider>
      </Authprovider>
      <ToastContainer></ToastContainer>
    </ThemeProvider>
  </StrictMode>,
)
