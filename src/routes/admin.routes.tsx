import CreateAdmin from "@/pages/Admin/CreateAdmin";
import UserDetails from "@/pages/User/UserDetails";
import AllUsers from "@/pages/User/AllUsers";
import CreateFacility from "@/pages/Admin/CreateFacility";
import Facilities from "@/pages/User/Facilities/facilities";
import FacilityDetails from "@/pages/User/Facilities/FacilityDetails";
import Bookings from "@/pages/User/Bookings/Bookings";
import AdminInfo from "@/pages/Admin/AdminInfo";

export const adminRoutes = [
  {
    path: "/adminDashboard",
    element: <AdminInfo />,
  },
  {
    path: "/adminDashboard/users",
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
    path: "/adminDashboard/facilities",
    element: <Facilities />,
  },
  {
    path: "/adminDashboard/facility",
    element: <CreateFacility />,
  },
  {
    path: "/adminDashboard/facilities/:facilityId",
    element: <FacilityDetails />,
  },
  {
    path: "/adminDashboard/bookings",
    element: <Bookings />,
  },
];

// export const superAdminRoutes = [
//   {
//     index: true,
//     element: <AdminInfo />,
//   },
//   {
//     path: "/superAdminDashboard",
//     element: <AdminDashboard />,
//     children: adminRoutes,
//   },
// ];
