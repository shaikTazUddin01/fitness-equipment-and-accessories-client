import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TinitaialState = {
  sort?: string | null;
 
};

export const initialState: TinitaialState = {
sort:'',

};

export const productSortSlice = createSlice({
  name: "sortProduct",
  initialState,
  reducers: {
    sortProduct: (state, action:PayloadAction<TinitaialState>) => {
      state.sort=(action.payload.sort)
   
    },
  },
});

export const { sortProduct } = productSortSlice.actions;
export default productSortSlice.reducer;

