import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import UsersPage from './pages/user';
import ProductsPage from './pages/products';

import './styles/global.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path : "/login",
    element: <LoginPage/>
  },
  {
    path : "/register",
    element: <RegisterPage/>
  },
  {
    path : "/users",
    element: <UsersPage/>
  },
  {
    path : "/products",
    element: <ProductsPage/>
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
