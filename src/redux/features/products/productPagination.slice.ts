import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TPagination = {
  skip?: number | null;
  limit?: number | undefined 
 
};

export const initialState: TPagination = {
skip:null,
limit:8

};

export const productPaginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    paginationProduct: (state, action:PayloadAction<TPagination>) => {
      // console.log(action?.payload);
      state.skip=action.payload.skip
      state.limit=action.payload.limit
   
    },
  },
});

export const { paginationProduct } = productPaginationSlice.actions;

export default productPaginationSlice.reducer;

