import { TUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useGetBookingsByEmailQuery } from "@/redux/features/booking/booking.api";
import { useAppSelector } from "@/redux/hooks";

const MyBookings = () => {
  const token = useAppSelector(useCurrentToken);

  let user: TUser | undefined | null = undefined;

  if (token) {
    user = verifyToken(token);
  }

  const email = user?.userEmail;
  const { data: bookingData } = useGetBookingsByEmailQuery(email);
  console.log(bookingData);

  return <div></div>;
};

export default MyBookings;
