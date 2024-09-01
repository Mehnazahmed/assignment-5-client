import UserDashboard from "@/pages/User/UserDashboard";

import BookingsDetails from "@/pages/User/Bookings/BookingsDetails";
import UserInfo from "@/pages/User/UserInfo";
import BookingPage from "@/pages/User/Bookings/BookingPage";
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
    path: "/userDashboard/bookingByEmail",
    element: <MyBookings />,
  },
  {
    path: "/userDashboard/bookFacility",
    element: <BookingPage />,
  },
  {
    path: "/userDashboard/bookings/:userEmail",
    element: <BookingsDetails />,
  },
];
