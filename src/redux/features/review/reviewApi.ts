import { baseApi } from "../../api/baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (data) => ({
        url: "/review/createReview",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
    getReview: builder.query({
      query: (id) => ({
        url: `/review/${id}`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),
    getAllReviews: builder.query({
      query: () => ({
        url: `/review`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),

    getReviewByUser: builder.query({
      query: (id) => ({
        url: `/review/user/${id}`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),
    deleteSpecificReview: builder.mutation({
      query: (data) => ({
        url: `/review/delete`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetReviewQuery,
  useGetReviewByUserQuery,
  useDeleteSpecificReviewMutation,
  useGetAllReviewsQuery
} = reviewApi;
