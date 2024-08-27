export type TBookingStatus = "confirmed" | "unconfirmed" | "canceled";
export interface TBooking {
  date: Date;
  startTime: string;
  endTime: string;
  user: string;
  facility: string;
  payableAmount: number;
  isBooked: TBookingStatus;
}
