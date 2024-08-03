import { baseApi } from "../../api/baseApi";

const adminLogin=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        loginAdmin:builder.mutation({
            query:(data)=>({
                url:'/auth/admin-login',
                method:"POST",
                body:data
            })
        })
    })
})

export const {useLoginAdminMutation}=adminLogin