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
  }),
});

export const{useCreateOrderMutation}=orderApi