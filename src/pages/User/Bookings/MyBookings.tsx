import React, { useState } from "react";
import { TUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import {
  useDeleteBookingMutation,
  useGetSingleBookingQuery,
} from "@/redux/features/booking/booking.api";
import { useAppSelector } from "@/redux/hooks";
import { Button, Card, Descriptions, Spin, Alert, Typography } from "antd";
import Swal from "sweetalert2";

import { TBooking } from "@/types/booking.type";
import { verifyToken } from "@/utils/verifyToken";

const { Title } = Typography;

const MyBookings: React.FC = () => {
  const token = useAppSelector(useCurrentToken);
  const [cancelBooking, { reset }] = useDeleteBookingMutation();

  let user: TUser | undefined | null = undefined;

  if (token) {
    user = verifyToken(token);
  }

  const id = user?.userId;
  const {
    data: bookingData,
    isLoading,
    isError,
  } = useGetSingleBookingQuery(id);

  const [selectedBooking, setSelectedBooking] = useState<TBooking | null>(null);

  const handleCancelBooking = async (bookingId: string) => {
    try {
      // Show SweetAlert2 confirmation dialog
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Do you really want to cancel this booking?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!",
      });

      if (result.isConfirmed) {
        // Proceed with cancellation
        await cancelBooking(bookingData.data._id);
        reset();
        // Show success alert
        await Swal.fire(
          "Cancelled!",
          "Your booking has been cancelled.",
          "success"
        );
      }
    } catch (error) {
      // Show error alert
      Swal.fire(
        "Error!",
        "Failed to cancel the booking. Please try again later.",
        "error"
      );
    }
  };

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (isError) {
    return <Alert message="Error loading booking data" type="error" />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>My Booking</Title>
      {bookingData ? (
        <div>
          <Card
            title="Booking Overview"
            extra={
              <Button
                style={{ backgroundColor: "orange" }}
                onClick={() => handleCancelBooking(bookingData._id)}
              >
                Cancel Booking
              </Button>
            }
          >
            <p>
              <strong>Booking ID:</strong> {bookingData.data._id}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(bookingData.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Start Time:</strong> {bookingData.data.startTime}
            </p>
            <p>
              <strong>End Time:</strong> {bookingData.data.endTime}
            </p>
            <p>
              <strong>Facility:</strong> {bookingData.data.facility?.name}
            </p>
            <p>
              <strong>Location:</strong> {bookingData.data.facility?.location}
            </p>
            <p>
              <strong>Payable Amount:</strong> $
              {bookingData?.data.payableAmount}
            </p>
            <p>
              <strong>Status:</strong> {bookingData.data.isBooked}
            </p>
          </Card>
        </div>
      ) : (
        <p>No booking found.</p>
      )}
    </div>
  );
};

export default MyBookings;
