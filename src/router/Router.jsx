import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddJob from "../pages/AddJob";
import AllJobs from "../pages/AllJobs";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";
import JobDetails from "../components/JobDetails";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";

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
        loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`),
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`),
      },
      {
        path: "my-bids",
        element: <MyBids />,
      },
      {
        path: "/bid-requests",
        element: <BidRequests />,
      },
    ],
  },
]);

export default router;
