export type TBookingStatus = "confirmed" | "unconfirmed" | "canceled";
// export interface TBooking {
//   _id?: string;
//   date: string;
//   startTime: string;
//   endTime: string;
//   user: string;
//   facility: string;
//   payableAmount: number;
//   isBooked: TBookingStatus;
// }
interface User {
  name: string;
  _id: string;
}

interface Facility {
  _id: string;
  name: string;
}

export interface TBooking {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  user: User;
  facility: Facility;
  payableAmount: number;
  isBooked: TBookingStatus;
}
