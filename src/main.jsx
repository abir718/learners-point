import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import HomeContent from './pages/HomeContent'
import Courses from './pages/Courses'
import AboutUs from './pages/AboutUs'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <HomeContent />
      },
      {
        path: "/courses",
        element: <Courses />
      },
      {
        path: "/about",
        element: <AboutUs />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
