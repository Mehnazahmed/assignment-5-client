import App from "@/App";
import DisplayError from "@/pages/Shared/DisplayError";
import NotFound from "@/pages/Shared/NotFound";
import About from "@/pages/Home/About";
import Contact from "@/pages/Home/Contact";
import ProtectedRoute from "@/components/Layout/ProtectedRoute";
import DashBoardLayout from "@/components/Layout/DashBoardLayout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Home/Login";
import Register from "@/pages/Home/Register";
import { adminRoutes } from "./admin.routes";

import { userRoutes } from "./user.routes";
import { createBrowserRouter } from "react-router-dom";

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
    children: adminRoutes,
  },
  // {
  //   path: "/adminDashboard",
  //   element: (
  //     <ProtectedRoute role="superAdmin">
  //       <DashBoardLayout />
  //     </ProtectedRoute>
  //   ),
  //   // children: superAdminRoutes,
  // },
  {
    path: "/userDashboard",
    element: (
      <ProtectedRoute role="user">
        <DashBoardLayout />
      </ProtectedRoute>
    ),
    children: userRoutes,
  },
]);

export default router;
