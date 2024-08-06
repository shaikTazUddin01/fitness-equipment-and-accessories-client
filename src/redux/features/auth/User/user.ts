import { baseApi } from "../../../api/baseApi";

const user=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        userSignUp:builder.mutation({
            query:(data)=>({
                url:'/user/create-user',
                method:"POST",
                body:data
            })
        })
    })
})

export const {useUserSignUpMutation}=user