import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'
import HomePage from './Pages/Home.tsx'
import ErrorPage from './Pages/Error.tsx';
import Contact from './Pages/Contact.tsx';
import { Login } from './Pages/Login.tsx';
import { Register } from './Pages/Register.tsx';
import { DashBoard } from './Pages/DashBoard.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "auth/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "contact/",
    element: <Contact />,
  },
  {
    path: "dashboard",
    element: <DashBoard />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
