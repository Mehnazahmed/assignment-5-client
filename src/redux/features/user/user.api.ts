import { TResponseRedux } from "@/types/global";
import { baseApi } from "../../api/baseApi";
import { TUser } from "@/types/user.type";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => {
        return {
          url: "/users",
          method: "GET",
        };
      },
      providesTags: ["users"],
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    addUser: builder.mutation({
      query: (formData) => ({
        url: "/auth/create-user",
        method: "POST",
        body: formData,
      }),
    }),

    updateUser: builder.mutation({
      query: (args) => ({
        url: `/users/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
    createAdmin: builder.mutation({
      query: (formData) => ({
        url: "/auth/create-admin",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useCreateAdminMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useAddUserMutation,
} = userManagementApi;
