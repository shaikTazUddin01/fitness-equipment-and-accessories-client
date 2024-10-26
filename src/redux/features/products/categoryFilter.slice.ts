import { createSlice } from "@reduxjs/toolkit";

type TinitaialState = {
  categoris: string | null | undefined;
 
};

export const initialState :TinitaialState = {
categoris:"",

};

export const categotyfilterSlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    categoryFilter: (state, action) => {
      // const isTrue=action.payload.categoryFilter.find((item)=>)
      state.categoris=action.payload;
     
   
    },
  },
});

export const { categoryFilter } = categotyfilterSlice.actions;
export default categotyfilterSlice.reducer;

