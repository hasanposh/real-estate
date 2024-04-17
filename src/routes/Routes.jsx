import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import UpdateProfile from "../pages/UpdateProfile";
import CardDetails from "../components/CardDetails";
import PrivateRoutes from "./PrivateRoutes";
import BlogPage from "../pages/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/estatesData.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoutes>
            <BlogPage />
          </PrivateRoutes>
        ),
        loader: () => fetch("/blogs.json"),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoutes>
            <UpdateProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/cardDetails/:id",
        element: (
          <PrivateRoutes>
            <CardDetails />
          </PrivateRoutes>
        ),

        loader: () => fetch("/estatesData.json"),
      },
    ],
  },
]);

export default router;
