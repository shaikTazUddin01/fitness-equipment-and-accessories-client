import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderItem) => ({
        url: "/order",
        method: "POST",
        body: orderItem,
      }),
      invalidatesTags: ["orders"],
    }),
    getOrder: builder.query({
      query: (status) => ({
        url: "/order",
        method: "GET",
        params: { status },
      }),
      providesTags: ["orders"],
    }),
    getOrderbySpUser: builder.query({
      query: (userId) => ({
        url: "/order/OrderHistory",
        method: "GET",
        params: { userId },
      }),
      providesTags: ["orders"],
    }),
    updateOrderStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/order/${id}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderQuery,
  useUpdateOrderStatusMutation,
  useGetOrderbySpUserQuery
} = orderApi;
