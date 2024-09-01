export interface TUser {
  _id: string;
  name: string;
  profileImg: string;
  email: string;
  userId?: string;
  userEmail?: string;
  phone: string;
  role: string;
  address: string;
  isDeleted: boolean;
}
