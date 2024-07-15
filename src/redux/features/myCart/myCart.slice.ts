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
      const existingProduct = state.productCart.find((item)=>item._id ===action.payload._id)
      if (existingProduct) {
        existingProduct.stockQuentity +=action.payload.stockQuentity
      }
      else{
        state.productCart.push(action.payload);
      }
    },
  },
});


export const {productCart}=productCartSlice.actions;
export default productCartSlice.reducer

// export const AddProductToCart=(state:RootState)=>{return(state.productCart)}