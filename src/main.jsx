import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './componets/Root/Main.jsx';
import Home from './componets/Home/Home.jsx';
import Singin from './componets/Sing-in/Singin.jsx';
import Singup from './componets/singup/Singup.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/home",
        element:<Home></Home>
      },
      {
       path:'/singin',
       element:<Singin></Singin>
      },
      {
        path:'/singup',
        element:<Singup></Singup>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
