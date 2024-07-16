import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export type TResetFilter={
    reset:string
}

const initialState:TResetFilter={
    reset:"not reset"
}

export const resetSlice=createSlice({
    name:'reset',
    initialState,
    reducers:{
        resetFilter:(state,action:PayloadAction<string>)=>{
            state.reset=action.payload
        }
    }
})

export const {resetFilter}=resetSlice.actions;
export default resetSlice.reducer