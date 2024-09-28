import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Listed from './Pages/Listed.jsx';
import Pages from './Pages/Pages.jsx';
import Banner from './Components/Banner.jsx';
import Books from './Components/Books.jsx';
import Root from './Root/Root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: ([
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/listed",
        element: <Listed/>,
      },
      {
        path: "/pages",
        element: <Pages/>
      }
    ])
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
      
  </StrictMode>,
)
