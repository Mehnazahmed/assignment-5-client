import UserDashboard from "@/pages/User/UserDashboard";

import UserInfo from "@/pages/User/UserInfo";

import MyBookings from "@/pages/User/Bookings/MyBookings";

export const userRoutes = [
  {
    path: "/userDashboard",
    element: <UserInfo />,
  },
  {
    path: "/userDashboard/dashboard",
    element: <UserDashboard />,
  },
  {
    path: "/userDashboard/myBookings",
    element: <MyBookings />,
  },
];
