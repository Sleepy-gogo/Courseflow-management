import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Dashboard, Login, Selector, Error, Navigation } from "../pages";
import { AuthorizedUser, UnAuthorizedUser } from "./UserAuthRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthorizedUser>
        <Navigation />
      </AuthorizedUser>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "courses",
        element: <Selector />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <UnAuthorizedUser>
        <Login />
      </UnAuthorizedUser>
    ),
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
