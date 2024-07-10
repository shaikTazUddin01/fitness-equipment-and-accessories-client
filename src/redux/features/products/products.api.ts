import { baseApi } from "../../api/baseApi";


export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),
    createProduct:builder.mutation({
      query:(productInFo)=>({
        url:"/product",
        method:"POST",
        body:productInFo
      })
    })
  }),
});

export const { useGetProductsQuery,useCreateProductMutation} = productsApi;
