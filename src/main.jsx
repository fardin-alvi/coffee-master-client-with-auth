import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './component/AddCoffee.jsx';
import Updatecoffee from './component/Updatecoffee.jsx';
import Errorpage from './component/Errorpage.jsx';
import ViewCard from './component/ViewCard.jsx';
import Signin from './component/Signin.jsx';
import AuthProvider from './AuthProvider.jsx';
import Login from './component/Login.jsx';
import Users from './component/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Errorpage/>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: 'addcoffee',
    element:<AddCoffee/>
  },
  {
    path: '/updatecoffee/:id',
    element: <Updatecoffee />,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: '/viewmore/:id',
    element: <ViewCard />,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: '/users',
    element: <Users />,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: '/signin',
    element:<Signin/>
  },
  {
    path: '/login',
    element:<Login/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
