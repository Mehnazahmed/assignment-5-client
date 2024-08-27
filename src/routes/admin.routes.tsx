import CreateAdmin from "@/pages/Admin/CreateAdmin";

import UserDetails from "@/pages/User/UserDetails";
import AllUsers from "@/pages/User/AllUsers";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Facilities from "@/pages/User/Facilities/facilities";
import FacilityDetails from "@/pages/User/Facilities/FacilityDetails";
import Bookings from "@/pages/User/Bookings/Bookings";
import CreateFacility from "@/pages/Admin/CreateFacility";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },

  {
    name: "User Management",
    children: [
      {
        name: "Users",
        path: "users",
        element: <AllUsers />,
      },
      {
        path: "users/:userId",
        element: <UserDetails />,
      },
      {
        name: "Add Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
  {
    name: "Facility Management:",
    children: [
      {
        name: "Facilities",
        path: "facilities",
        element: <Facilities />,
      },
      {
        name: "Add Facility",
        path: "facility",
        element: <CreateFacility />,
      },
      {
        path: "facilities/:facilityId",
        element: <FacilityDetails />,
      },
    ],
  },
  {
    name: "Booking Management:",
    children: [
      {
        name: "Bookings",
        path: "bookings",
        element: <Bookings />,
      },
    ],
  },
];
