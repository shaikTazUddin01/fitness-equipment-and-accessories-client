import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TinitaialState = {
  categoris?: Record<string,boolean>;
 
};

export const initialState :TinitaialState = {
categoris:{}

};

export const categotyfilterSlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    categoryFilter: (state, action:PayloadAction<{ categoryFilter: Record<string, boolean> }>) => {
      state.categoris=(action.payload.categoryFilter)
   
    },
  },
});

export const { categoryFilter } = categotyfilterSlice.actions;
export default categotyfilterSlice.reducer;

