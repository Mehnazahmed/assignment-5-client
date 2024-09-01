import { TResponseRedux } from "@/types/global";

import { baseApi } from "@/redux/api/baseApi";
import { TBooking } from "@/types/booking.type";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      query: () => {
        return {
          url: "/reviews",
          method: "GET",
        };
      },
      providesTags: ["reviews"],
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useGetAllReviewsQuery } = reviewApi;
