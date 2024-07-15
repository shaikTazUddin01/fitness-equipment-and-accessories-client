import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../../../Type";
import { RootState } from "../../store";

type TinitaialState = {
  products: TProduct[];
};

export const initialState: TinitaialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});


export const {addProduct}=productsSlice.actions;
export default productsSlice.reducer

// export const AddProductToCart=(state:RootState)=>{return(state.products)}