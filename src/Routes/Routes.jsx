import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import HomePage from "../components/pages/Home/HomePage/HomePage";
import Instructors from "../components/pages/Instructors/Instructors";
import Login from "../components/pages/Login/Login";
import SignUp from "../components/pages/SignUp/SignUp";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <HomePage></HomePage>
        },
        {
            path: "instructors",
            element: <PrivateRoute><Instructors></Instructors></PrivateRoute>
        },
        {
            path:'login',
            element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);