import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Friends from './Friends';
import Friend from './Friend';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/friends",
        element:<Friends/>,
        loader:()=> fetch('http://localhost:4000/friends')
      },
      {
        path:"/friends/:id",
        element:<Friend/>,
        loader:({params})=> fetch(`http://localhost:4000/friends/${params.id}`)
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
