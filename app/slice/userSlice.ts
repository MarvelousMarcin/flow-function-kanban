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
  players: number;
}

const initialState: UserState = {
  name: "",
  id: "",
  color: "",
  table: "",
  gameKey: "",
  activeDay: 1,
  players: 0,
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
interface ActivePlayers {
  activePlayers: number;
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
    updatePlayers: (state, action: PayloadAction<ActivePlayers>) => {
      state.players = action?.payload.activePlayers;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, updateActiveDat, updatePlayers } =
  userReducer.actions;

export default userReducer.reducer;
