import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.tsx';
import AddArtist from './pages/AddArtist/AddArtist.tsx';
import Artists from './pages/Artists/Artists.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>

      },
      {
        path:"addArtist",
        element:<AddArtist/>

      },
      {
        path:"artists",
        element:<Artists/>

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
 
  </React.StrictMode>,
)
