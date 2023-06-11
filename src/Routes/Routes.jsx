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
import MySelectedClasses from "../components/pages/DashBoard/StudentDashBoard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../components/pages/DashBoard/StudentDashBoard/MyEnrolledClasses/MyEnrolledClasses";
import StudentRoute from "./StudentRoute";
import Payment from "../components/pages/DashBoard/Payment/Payment";
import PaymentHistory from "../components/pages/DashBoard/StudentDashBoard/PaymentHistory/PaymentHistory";
import Feedback from "../components/pages/DashBoard/AdminDashBoard/Feedback";



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
        // instructor route
        {
          path: "addaclass",
          element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
        },
        {
          path:"myclasses",
          element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
        // admin route
        {
          path: "manageallusers",
          element: <AdminRoute><ManageAllUsers></ManageAllUsers></AdminRoute>
        },
        {
          path: "manageallclasses",
          element: <AdminRoute><ManageAllClasses></ManageAllClasses></AdminRoute>
        },
        {
          path: "feedback/:id",
          element: <AdminRoute><Feedback></Feedback></AdminRoute>
        },
        // student route
        {
          path: "selectedclasses",
          element: <StudentRoute><MySelectedClasses></MySelectedClasses></StudentRoute>
        },
        {
          path: "myenrolledclasses",
          element: <StudentRoute><MyEnrolledClasses></MyEnrolledClasses></StudentRoute>
        },
        {
          path: "payment",
          element: <StudentRoute><Payment></Payment></StudentRoute>
        },
        {
          path: 'paymenthistory',
          element: <PaymentHistory></PaymentHistory>
        }
      ]
    }
  ]);