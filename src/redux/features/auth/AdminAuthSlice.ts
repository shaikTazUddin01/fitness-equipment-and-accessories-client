import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TAdminInitialState } from "../../../Type";




 const initialState: TAdminInitialState = {
  user: null,
  token: null,
};
export const counterSlice = createSlice({
  name: "adminInFo",
  initialState,
  reducers: {
    adminInFo: (state, action: PayloadAction<TAdminInitialState>) => {
      console.log("action-->", action.payload);
      const { user, token } = action.payload;
      (state.user = user), (state.token = token);
    },
    adminLogout:(state)=>{
      state.user=null,
      state.token=null
    }
  },
});

// Action creators are generated for each case reducer function
export const { adminInFo ,adminLogout} = counterSlice.actions;

export default counterSlice.reducer;
