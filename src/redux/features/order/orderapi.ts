import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderItem) => ({
        url: "/order",
        method: "POST",
        body:orderItem,
      }),
      
    }),
    getOrder: builder.query({
      query: () => ({
        url: "/order",
        method: "GET",
        
      }),
      
    }),
  }),
});

export const{useCreateOrderMutation,useGetOrderQuery}=orderApi