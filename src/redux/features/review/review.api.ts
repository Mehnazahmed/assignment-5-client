import { TResponseRedux, TReview } from "@/types/global";

import { baseApi } from "@/redux/api/baseApi";

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
      transformResponse: (response: TResponseRedux<TReview[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useGetAllReviewsQuery } = reviewApi;
