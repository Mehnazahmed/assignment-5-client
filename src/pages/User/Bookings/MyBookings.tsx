import React from "react";
import { TUser, useCurrentToken } from "@/redux/features/auth/authSlice";

import { useAppSelector } from "@/redux/hooks";
import { Spin, Alert, Typography } from "antd";

import { verifyToken } from "@/utils/verifyToken";
import MyBookingsCard from "./MyBookingsCard";
import { TBooking } from "@/types/booking.type";
import { Link } from "react-router-dom";
import { useGetBookingsByIdQuery } from "@/redux/features/booking/booking.api";

const { Title } = Typography;

const MyBookings: React.FC = () => {
  const token = useAppSelector(useCurrentToken);

  let user: TUser | undefined | null = undefined;

  if (token) {
    user = verifyToken(token) as TUser | null | undefined;
  }

  const id = user?.userId;
  const {
    data: response,
    isLoading,
    isError,
    refetch,
  } = useGetBookingsByIdQuery(id);

  const bookingData = response?.data || [];
  console.log("Booking data:", bookingData);

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (isError) {
    return <Alert message="Error loading booking data" type="error" />;
  }

  // const isArray = Array.isArray(bookingData);

  return (
    <div style={{ padding: "20px" }}>
      <Title style={{ color: "#F95924", textAlign: "center" }} level={2}>
        Your Bookings
      </Title>
      {bookingData?.length > 0 ? (
        bookingData?.map((booking: TBooking) => (
          <MyBookingsCard
            key={booking._id}
            booking={booking}
            refetch={refetch}
          />
        ))
      ) : (
        <p className="text-white text-xl">
          You have no bookings yet. Explore our services and make your first
          booking!{" "}
          <Link className="text-orange-600" to="/facilities">
            Explore Our Facilities!!
          </Link>
        </p>
      )}
    </div>
  );
};

export default MyBookings;
