import { TQueryParam, TResponseRedux } from "@/types/global";

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
    getReviewsByEmail: builder.query({
      query: (userEmail) => ({
        url: `/reviews/${userEmail}`,
        method: "GET",
      }),
    }),
    addReview: builder.mutation({
      query: (data) => ({
        url: "/reviews",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    updateReview: builder.mutation({
      query: (args) => ({
        url: `/reviews/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["reviews"],
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const {
  useGetAllReviewsQuery,
  useGetReviewsByEmailQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
