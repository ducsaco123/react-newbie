import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/users',
    element: <h1>Hello Users</h1>
  },
  {
    path: '/products',
    element: <h1>Hello Products</h1>
  },
  {
    path: '/login',
    element: <h1>Login page</h1>
  },
  {
    path: '/register',
    element: <h1>Register page</h1>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
