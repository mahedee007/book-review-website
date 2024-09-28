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
import { Toaster } from 'react-hot-toast';

import Root from './Root/Root.jsx';
import BookDetails from './Components/BookDetails.jsx';

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
        path: "/book/:bookId",
        element: <BookDetails/>,
        loader: () => fetch('/books.json' )
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
    <Toaster/>
      
  </StrictMode>,
)
