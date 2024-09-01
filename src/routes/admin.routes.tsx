import CreateAdmin from "@/pages/Admin/CreateAdmin";
import UserDetails from "@/pages/User/UserDetails";
import AllUsers from "@/pages/User/AllUsers";
import CreateFacility from "@/pages/Admin/CreateFacility";

import Bookings from "@/pages/User/Bookings/Bookings";

import AllFacilities from "@/pages/User/Facilities/AllFacilities";
import AdminInfo from "@/pages/Admin/AdminInfo";

export const adminRoutes = [
  {
    path: "/adminDashboard",
    element: <AdminInfo />,
  },
  {
    path: "/adminDashboard/allusers",
    element: <AllUsers />,
  },
  {
    path: "/adminDashboard/users/:userId",
    element: <UserDetails />,
  },
  {
    path: "/adminDashboard/create-admin",
    element: <CreateAdmin />,
  },

  {
    path: "/adminDashboard/create-facility",
    element: <CreateFacility />,
  },
  {
    path: "/adminDashboard/allFacilities",
    element: <AllFacilities />,
  },

  {
    path: "/adminDashboard/allbookings",
    element: <Bookings />,
  },
];
