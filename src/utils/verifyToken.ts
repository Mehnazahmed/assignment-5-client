import { CustomJwtPayload } from "@/types/global";
import { jwtDecode } from "jwt-decode";

export const verifyToken = (token: string): CustomJwtPayload | null => {
  return jwtDecode(token);
};
