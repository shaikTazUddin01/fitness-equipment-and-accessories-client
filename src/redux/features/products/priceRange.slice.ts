import { createSlice } from "@reduxjs/toolkit";

type TinitaialState = {
  priceRange?: number[];
 
};

export const initialState: TinitaialState = {
    priceRange:[],

};

export const priceRangeSlice = createSlice({
  name: "priceRange",
  initialState,
  reducers: {
    priceRange: (state, action) => {
        // console.log(action.payload);
      state.priceRange=(action.payload)
   
    //   console.log("--->",state);
    },
  },
});
export const { priceRange } = priceRangeSlice.actions;
export default priceRangeSlice.reducer;

