import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./index.css"
import ExpensesPage from './pages/ExpensesPage'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/expenses",
    element: <ExpensesPage />,
  },
  // {
  //   path: "/reports",
  //   element: < />,
  // },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
