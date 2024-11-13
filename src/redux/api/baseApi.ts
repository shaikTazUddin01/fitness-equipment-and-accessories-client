import { fetchBaseQuery, createApi, BaseQueryFn, FetchArgs, BaseQueryApi, DefinitionType } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
// import { toast } from "sonner";
import { adminInFo, adminLogout } from "../features/auth/AdminAuthSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: 
  "https://fitness-equipment-server-silk.vercel.app/api",
  // "http://localhost:3000/api",
  
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).adminLoginInfo.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken :BaseQueryFn<FetchArgs,BaseQueryApi,DefinitionType> = async (args, api, extraOptions):Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  // console.log(result);

  // if (result?.error?.status === 401) {
  //   toast.error("not found");
  // }
  if (result?.error?.status === 401) {
    const res = await fetch(
      "https://fitness-equipment-server-silk.vercel.app/api/auth/refresh-token"
  // "http://localhost:3000/api/auth/refresh-token"
  ,
   
       {
      method: "post",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).adminLoginInfo.user;

      api.dispatch(
        adminInFo({
          user,
          token: data?.data?.accessToken,
        })
      );

      result = await baseQuery(args, api, extraOptions);
      // console.log(user);
    } else {
      // toast.warning("session is expired or invalid please login again")
      api.dispatch(adminLogout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["Products", "category","admin","orders","user","review"],
  endpoints: () => ({}),
});
