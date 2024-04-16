import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Error from './Pages/Error';
import ViewDetails from './Pages/ViewDetails';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path:'/viewDetails',
        element:<ViewDetails></ViewDetails>
      },
      {
        path:'/details/:id',
        loader:()=>fetch('../FakeData.json'),
        element:<ViewDetails></ViewDetails>
      },
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
