import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TinitaialState = {
  searchItem?: string;
 
};

export const initialState: TinitaialState = {
searchItem:'',

};

export const searchProductSlice = createSlice({
  name: "searchProduct",
  initialState,
  reducers: {
    searchProduct: (state, action:PayloadAction<TinitaialState>) => {
      state.searchItem=(action.payload.searchItem)
   
    },
  },
});

export const { searchProduct } = searchProductSlice.actions;
export default searchProductSlice.reducer;

