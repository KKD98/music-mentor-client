import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import HomePage from "../components/pages/Home/HomePage/HomePage";
import Instructors from "../components/pages/Instructors/Instructors";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <HomePage></HomePage>
        },
        {
            path: "instructors",
            element: <Instructors></Instructors>
        }
      ]
    },
  ]);