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
                url:'/user/user-info',
                method:'GET',
                params:{email}
               
            })
        }),
        createAdmin:builder.mutation({
            query:(data)=>({
                url:'/admin',
                method:"POST",
                body:data
            })
        }),
    })
})

export const {useUserSignUpMutation,useUserLoginMutation,useFinduserQuery,useCreateAdminMutation}=user