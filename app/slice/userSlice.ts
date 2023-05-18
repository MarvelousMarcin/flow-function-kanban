"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  id: string;
  color: string;
  table: string;
  gameKey: string;
}

const initialState: UserState = {
  name: "",
  id: "",
  color: "",
  table: "",
  gameKey: "",
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.color = action.payload.color;
      state.table = action.payload.table;
      state.gameKey = action.payload.gameKey;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = userReducer.actions;

export default userReducer.reducer;
