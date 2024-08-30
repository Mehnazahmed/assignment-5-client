import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllBookingsQuery } from "@/redux/features/booking/booking.api";
import { TBooking } from "@/types/booking.type";
import { useEffect } from "react";

const AllBookings = () => {
  const { data: bookings, refetch, isLoading } = useGetAllBookingsQuery({});

  console.log(bookings);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString(); // Formats as YYYY-MM-DD by default
  };

  const formatTime = (time: string) => {
    // Convert time string to Date object for formatting
    const t = new Date(`1970-01-01T${time}`);
    return t.toLocaleTimeString(); // Formats as HH:MM:SS AM/PM by default
  };

  const tableRows = bookings?.data?.map((booking: TBooking) => (
    <TableRow key={booking._id} className="hover:bg-slate-800">
      <TableCell className="text-white">{formatDate(booking.date)}</TableCell>
      <TableCell className="text-white">
        {formatTime(booking.startTime)}
      </TableCell>
      <TableCell className="text-white">
        {formatTime(booking.endTime)}
      </TableCell>
      <TableCell className="text-white">{booking.user}</TableCell>
      <TableCell className="text-white">{booking.facility}</TableCell>
      <TableCell className="text-white">{booking.payableAmount}</TableCell>
      <TableCell className="text-white">{booking.isBooked}</TableCell>
    </TableRow>
  ));

  if (isLoading) {
    return (
      <p className="text-3xl text-center text-black-500 my-2 font-bold">
        Loading....
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <h1
        style={{
          fontSize: "30px",
          textAlign: "center",
          color: "#fff",
          marginBottom: "24px",
        }}
      >
        All <span style={{ color: "#F95924" }}>Bookings</span>
      </h1>

      <div className="mx-auto py-2 sm:px-10">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="hover:bg-slate-800">
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">Start Time</TableHead>
              <TableHead className="text-white">End Time</TableHead>
              <TableHead className="text-white">User</TableHead>
              <TableHead className="text-white">Facility</TableHead>
              <TableHead className="text-white">Payable Amount</TableHead>
              <TableHead className="text-white">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllBookings;
