import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { JwtPayload } from "jwt-decode";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};
//
export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export interface CustomJwtPayload {
  _id: string;
  name: string;
  email: string;
  role: string;
  userEmail?: string;
}
export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

export const RoleOptions = ["admin", "user"];

export interface CustomJwtPayload extends JwtPayload {
  role: string;
}

export interface TReview {
  userName: string;
  rating: number;
  comment: string;
}
