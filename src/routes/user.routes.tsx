import UserDashboard from "@/pages/User/UserDashboard";
import BookingsById from "@/pages/User/Bookings/BookingsById";
import BookingsDetails from "@/pages/User/Bookings/BookingsDetails";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },

  {
    name: "Bookings",
    children: [
      {
        name: "My Bookings",
        path: "bookingsById",
        element: <BookingsById />,
      },
      {
        path: "bookings/:userId",
        element: <BookingsDetails />,
      },
    ],
  },
];
