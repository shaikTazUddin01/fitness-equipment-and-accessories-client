import { baseApi } from "../../../api/baseApi";

const user = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userSignUp: builder.mutation({
      query: (data) => ({
        url: "/user/create-user",
        method: "POST",
        body: data,
      }),
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "auth/user-login",
        method: "POST",
        body: data,
      }),
    }),
    finduser: builder.query({
      query: (email) => ({
        url: "/user/user-info",
        method: "GET",
        params: { email },
      }),
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/admin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["admin"],
    }),
    getAdmin: builder.query({
      query: () => ({
        url: "/admin",
        method: "GET",
      }),
      providesTags: ["admin"],
    }),
    getSingleAdmin: builder.query({
      query: (id) => ({
        url: `/admin/${id}`,
        method: "GET",
      }),
      providesTags: ["admin"],
    }),
    deleteAdmin: builder.mutation({
      query: (id) => ({
        url: `/admin/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["admin"],
    }),
    updateAdmin: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["admin"],
    }),
  }),
});

export const {
  useUserSignUpMutation,
  useUserLoginMutation,
  useFinduserQuery,
  useCreateAdminMutation,
  useGetAdminQuery,
  useGetSingleAdminQuery,
  useDeleteAdminMutation,
  useUpdateAdminMutation,
} = user;
