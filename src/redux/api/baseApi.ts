import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  //  baseUrl: "http://localhost:5000/api",
  baseUrl: "https://assignment-5-server.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// const baseQueryWithRefreshToken: BaseQueryFn<
//   FetchArgs,
//   BaseQueryApi,
//   DefinitionType
// > = async (args, api, extraOptions): Promise<any> => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.status === 404) {
//     const errorMessage =
//       (result.error.data as ErrorData)?.message || "not found";
//     toast.error(errorMessage);
//   }
//   // if (result?.error?.status === 401) {
//   //   //* Send Refresh
//   //   console.log("Sending refresh token");

//   //   try {
//   //     const res = await fetch("http://localhost:5000/api/auth/refresh-token", {
//   //       method: "POST",
//   //       credentials: "include",
//   //     });

//   //     const data = await res.json();

//   //     if (data?.data?.accessToken) {
//   //       const user = (api.getState() as RootState).auth.user;

//   //       api.dispatch(
//   //         setUser({
//   //           user,
//   //           token: data.data.accessToken,
//   //         })
//   //       );

//   //       result = await baseQuery(args, api, extraOptions);
//   //     } else {
//   //       api.dispatch(logOut());
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //     api.dispatch(logOut());
//   //   }
//   // }

//   return result;
// };

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: ["facilities", "bookings", "reviews", "users"],
  endpoints: () => ({}),
});
