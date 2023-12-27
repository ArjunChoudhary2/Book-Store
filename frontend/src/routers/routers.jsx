import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { Shop } from "../pages/Shop";
import About from '../pages/About'
import { Blog } from "../pages/Blog";
import SingleBook from "../pages/SingleBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book/:id",
        element : <SingleBook/>,
        loader : (({params}) => fetch(`http://localhost:5000/book/${params.id}`)),
      }
    ],
  },
]);

export default router;
