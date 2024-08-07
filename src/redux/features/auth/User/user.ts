import { baseApi } from "../../../api/baseApi";

const user=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        userSignUp:builder.mutation({
            query:(data)=>({
                url:'/user/create-user',
                method:"POST",
                body:data
            })
        }),
        userLogin:builder.mutation({
            query:(data)=>({
                url:'auth/user-login',
                method:"POST",
                body:data
            })
        }),
        finduser:builder.query({
            query:(email)=>({
                url:'/user',
                method:'GET',
                params:email
            })
        })
    })
})

export const {useUserSignUpMutation,useUserLoginMutation}=user