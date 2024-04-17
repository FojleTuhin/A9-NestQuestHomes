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
import FirebaseProvider from './Firebase/FirebaseProvider';
import PrivateRoute from './Pages/PrivateRoute';
import UpdateProfile from './Pages/UpdateProfile';
import { HelmetProvider } from 'react-helmet-async';
import Agent from './Pages/Agent';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
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
        path: '/viewDetails',
        element: <ViewDetails></ViewDetails>
      },
      {
        path: '/details/:id',
        loader: () => fetch('../FakeData.json'),
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
      },
      {
        path: '/updateProfile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path:'/agent',
        element:<Agent></Agent>
      }

    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <FirebaseProvider>
        <RouterProvider router={router} />
      </FirebaseProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
