"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  id: string;
  color: string;
  table: string;
  gameKey: string;
  activeDay: number;
}

const initialState: UserState = {
  name: "",
  id: "",
  color: "",
  table: "",
  gameKey: "",
  activeDay: 1,
};

interface UserPayload {
  name: string;
  id: string;
  color: string;
  table: string;
  gameKey: string;
}

interface ActiveDayPayload {
  activeDay: number;
}

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserPayload>) => {
      state.name = action?.payload.name;
      state.id = action?.payload.id;
      state.color = action?.payload.color;
      state.table = action?.payload.table;
      state.gameKey = action?.payload.gameKey;
    },
    updateActiveDat: (state, action: PayloadAction<ActiveDayPayload>) => {
      state.activeDay = action?.payload.activeDay;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, updateActiveDat } = userReducer.actions;

export default userReducer.reducer;
