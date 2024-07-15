import { baseApi } from "../../api/baseApi";

export const categoryAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory : builder.query({
      query: ()=>({
        url: "/category",
        method: "GET",
      }),
    }),
  }),
});

export const {useGetCategoryQuery}=categoryAPi