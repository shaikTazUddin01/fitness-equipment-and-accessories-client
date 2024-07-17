import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fitness-equipment-server-silk.vercel.app/api" }),
  tagTypes: ['Products'], 
  endpoints: () => ({}),
});
