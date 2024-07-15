import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../../../Type";

type TinitaialState = {
  productCart: TProduct[];
};

export const initialState: TinitaialState = {
  productCart: [],
};

export const productCartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    productCart: (state, action) => {
      const existingProduct = state.productCart.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.stockQuentity = action.payload.stockQuentity + 1;
      } else {
        state.productCart.push(action.payload);
      }
    },
    decrementProductInToCart: (state, action) => {
      const existingProduct = state.productCart.find(
        (item) => item._id === action.payload._id
      );
      if ((existingProduct?.stockQuentity as number) > 1) {
        existingProduct!.stockQuentity = action.payload.stockQuentity - 1;
      }
    },
    removedItem: (state, action) => {
     
        state.productCart=state.productCart.filter((item)=>item._id !==action.payload._id)
      
    },
  },
});

export const { productCart, decrementProductInToCart ,removedItem} =
  productCartSlice.actions;
export default productCartSlice.reducer;

// export const AddProductToCart=(state:RootState)=>{return(state.productCart)}
