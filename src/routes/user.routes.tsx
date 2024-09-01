import UserDashboard from "@/pages/User/UserDashboard";
import BookingsById from "@/pages/User/Bookings/BookingsById";
import BookingsDetails from "@/pages/User/Bookings/BookingsDetails";
import UserInfo from "@/pages/User/UserInfo";
import BookingPage from "@/pages/User/Bookings/BookingPage";

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
    path: "/userDashboard/bookingsById",
    element: <BookingsById />,
  },
  {
    path: "/userDashboard/bookFacility",
    element: <BookingPage />,
  },
  {
    path: "/userDashboard/bookings/:userId",
    element: <BookingsDetails />,
  },
];
