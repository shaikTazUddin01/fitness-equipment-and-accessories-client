import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TinitaialState = {
  categoris?: string[] | null;
 
};

export const initialState :TinitaialState = {
categoris:[],

};

export const categotyfilterSlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    categoryFilter: (state, action:PayloadAction<{ categoris:  Record<string, any> }>) => {
      // const isTrue=action.payload.categoryFilter.find((item)=>)
      const category=action.payload.categoris;
      const isTrue=Object.keys(category).filter(key=>category[key])
      // console.log(isTrue);
      state.categoris=(isTrue)
   
    },
  },
});

export const { categoryFilter } = categotyfilterSlice.actions;
export default categotyfilterSlice.reducer;

