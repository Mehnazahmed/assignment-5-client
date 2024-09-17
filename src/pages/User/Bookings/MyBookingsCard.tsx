import { useDeleteBookingMutation } from "@/redux/features/booking/booking.api";
import { TBooking } from "@/types/booking.type";
import { Button, Card } from "antd";
import React from "react";
import Swal from "sweetalert2";

interface MyBookingsCardProps {
  booking: TBooking;
  refetch: () => void;
}
const MyBookingsCard: React.FC<MyBookingsCardProps> = ({
  booking,
  refetch,
}) => {
  const [cancelBooking] = useDeleteBookingMutation();
  const handleCancelBooking = async (bookingId: string) => {
    try {
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
        await cancelBooking(bookingId);

        // Show success alert
        await Swal.fire(
          "Cancelled!",
          "Your booking has been cancelled.",
          "success"
        );
        refetch();
      }
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error!",
        "Failed to cancel the booking. Please try again later.",
        "error"
      );
    }
  };
  return (
    <Card
      style={{ margin: "20px" }}
      title="Booking Overview"
      extra={
        <Button
          style={{ backgroundColor: "orange" }}
          onClick={() => handleCancelBooking(booking._id)}
        >
          Cancel Booking
        </Button>
      }
    >
      <p>
        <strong>Booking ID:</strong> {booking._id}
      </p>
      <p>
        <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}
      </p>
      <p>
        <strong>Start Time:</strong> {booking.startTime}
      </p>
      <p>
        <strong>End Time:</strong> {booking.endTime}
      </p>
      <p>
        <strong>Facility:</strong> {booking.facility?.name}
      </p>
      <p>
        <strong>Location:</strong> {booking.facility?.location}
      </p>
      <p>
        <strong>Payable Amount:</strong> ${booking?.payableAmount}
      </p>
      <p>
        <strong>Status:</strong> {booking?.isBooked}
      </p>
    </Card>
  );
};

export default MyBookingsCard;
