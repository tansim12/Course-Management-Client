import { createBrowserRouter } from "react-router-dom";
import HomeRoute from "./HomeRoute";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import AllCourses from "../Page/All Courses/AllCourses";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element:<HomeRoute /> , 
    children: [
      {
        index: true,
        element:<Home />,
      },
      {
        path:"/allCourse",
        element:<AllCourses />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
