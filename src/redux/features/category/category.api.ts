import { baseApi } from "../../api/baseApi";

export const categoryAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
    }),
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/category",
        method: "POST",
        body: data,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetCategoryQuery, useCreateCategoryMutation ,useDeleteCategoryMutation} = categoryAPi;
