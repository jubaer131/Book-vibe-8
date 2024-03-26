import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root';
import Home from './Pages/Home';
import ListedBooks from './Pages/ListedBooks';
import PagesToRead from './Pages/PagesToRead';
import ErrorPage from './Pages/ErrorPage';
import BookDetails from './Pages/BookDetails'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pages",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('pakage.json') // do not load all data. load only what you need
      },


    ]


  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
