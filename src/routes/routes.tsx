import App from "@/App";
import DisplayError from "@/pages/Shared/DisplayError";
import NotFound from "@/pages/Shared/NotFound";
import About from "@/pages/Home/About";
import Contact from "@/pages/Home/Contact";
import Login from "@/pages/Home/Login";

import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "@/components/Layout/ProtectedRoute";
import DashBoardLayout from "@/components/Layout/DashBoardLayout";
import Home from "@/pages/Home/Home";
import Register from "@/pages/Home/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <DisplayError />,
    children: [
      {
        index: true,
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/adminDashboard",
    element: (
      <ProtectedRoute role="admin">
        <DashBoardLayout />
      </ProtectedRoute>
    ),
  },
  {
    path: "/adminDashboard",
    element: (
      <ProtectedRoute role="superAdmin">
        <DashBoardLayout />
      </ProtectedRoute>
    ),
  },
  {
    path: "/userDashboard",
    element: (
      <ProtectedRoute role="user">
        <DashBoardLayout />
      </ProtectedRoute>
    ),
  },
]);

export default router;
