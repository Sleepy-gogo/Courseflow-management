import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Login, Selector, Error, Navigation } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <Error />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/courses",
    element: <Selector />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
