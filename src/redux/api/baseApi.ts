import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery= fetchBaseQuery({
  baseUrl:
  "http://localhost:3000/api",
    // "https://fitness-equipment-server-silk.vercel.app/api",
    credentials:'include',
  prepareHeaders:(headers,{getState})=>{
    const token=(getState() as RootState).adminLoginInfo.token

    if (token) {
      headers.set('authorization',token)
    }
  }
})


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery:baseQuery,
  tagTypes: ["Products", "category"],
  endpoints: () => ({}),
});
