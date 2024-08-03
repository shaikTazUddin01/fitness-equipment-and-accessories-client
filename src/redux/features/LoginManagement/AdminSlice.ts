import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

export interface TAdminInFo {
  user: ReactNode;
  token: string;
}

const initialState: TAdminInFo = {
  user: '',
  token: "",
};

export const counterSlice = createSlice({
  name: "adminInFo",
  initialState,
  reducers: {
    adminInFo: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

// Action creators are generated for each case reducer function
export const {adminInFo } = counterSlice.actions;

export default counterSlice.reducer;
