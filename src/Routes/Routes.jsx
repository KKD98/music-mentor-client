import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import HomePage from "../components/pages/Home/HomePage/HomePage";
import Instructors from "../components/pages/Instructors/Instructors";
import Login from "../components/pages/Login/Login";
import SignUp from "../components/pages/SignUp/SignUp";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AllClasses from "../components/pages/AllClasses/AllClasses";
import DashBoard from "../Layouts/DashBoard/DashBoard";
import AddAClass from "../components/pages/DashBoard/InstructorDashBoard/AddAClass";
import MyClasses from "../components/pages/DashBoard/InstructorDashBoard/MyClasses";
import ManageAllUsers from "../components/pages/DashBoard/AdminDashBoard/ManageAllUsers/ManageAllUsers";
import ManageAllClasses from "../components/pages/DashBoard/AdminDashBoard/ManageAllClasses/ManageAllClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";



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
            element: <Instructors></Instructors>
        },
        {
          path: "allclasses",
          element: <AllClasses></AllClasses>
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
    {
      path: 'dashboard',
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path: "addaclass",
          element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
        },
        {
          path:"myclasses",
          element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
        {
          path: "manageallusers",
          element: <AdminRoute><ManageAllUsers></ManageAllUsers></AdminRoute>
        },
        {
          path: "manageallclasses",
          element: <AdminRoute><ManageAllClasses></ManageAllClasses></AdminRoute>
        }
      ]
    }
  ]);