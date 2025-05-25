import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import HomeContent from './pages/HomeContent'
import Courses from './pages/Courses'
import AboutUs from './pages/AboutUs'
import './index.css'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import Dashtext from './Dashboard/Dashtext'
import Dashboard from './Dashboard/Dashboard'

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
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy />
      }
    ]
  }, 
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard',
        element: <Dashtext />,
      },
      {
        path: 'add-course',
        element: <Dashtext />,
      },
      {
        path: 'admin-alluser',
        element: <Dashtext />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
