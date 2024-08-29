import { TResponseRedux } from "@/types/global";

import { TFacility } from "@/types/facility.type";
import { baseApi } from "@/redux/api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacilities: builder.query({
      query: () => {
        return {
          url: "/facility",
          method: "GET",
        };
      },
      providesTags: ["facilities"],
      transformResponse: (response: TResponseRedux<TFacility[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getFacilityById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/facility/${id}`,
      }),
    }),
    addFacility: builder.mutation({
      query: (data) => ({
        url: "/facility",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["facilities"],
    }),
    updateFacility: builder.mutation({
      query: (args) => ({
        url: `/facility/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["facilities"],
    }),
    deleteFacility: builder.mutation({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["facilities"],
    }),
  }),
});

export const {
  useGetAllFacilitiesQuery,
  useAddFacilityMutation,
  useUpdateFacilityMutation,
  useDeleteFacilityMutation,
  useGetFacilityByIdQuery,
} = facilityApi;
