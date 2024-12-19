import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddJob from "../pages/AddJob";
import AllJobs from "../pages/AllJobs";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-job",
        element: <AddJob />,
      },
      {
        path: "/jobs",
        element: <AllJobs />,
      },
      {
        path: "/my-posted-jobs",
        element: <MyPostedJobs />,
      },
      {
        path: "/update/:id",
        element: <UpdateJob />,
      },
    ],
  },
]);

export default router;
