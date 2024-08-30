export type TBookingStatus = "confirmed" | "unconfirmed" | "canceled";
export interface TBooking {
  _id?: string;
  date: string;
  startTime: string;
  endTime: string;
  user: string;
  facility: string;
  payableAmount: number;
  isBooked: TBookingStatus;
}
