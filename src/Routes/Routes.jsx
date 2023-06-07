import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import HomePage from "../components/pages/Home/HomePage/HomePage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <HomePage></HomePage>
        }
      ]
    },
  ]);