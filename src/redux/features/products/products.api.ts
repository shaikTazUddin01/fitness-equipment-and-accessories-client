import { baseApi } from "../../api/baseApi";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    createProduct: builder.mutation({
      query: (productInFo) => ({
        url: "/product",
        method: "POST",
        body: productInFo,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
       
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery, useCreateProductMutation ,useDeleteProductMutation} = productsApi;
