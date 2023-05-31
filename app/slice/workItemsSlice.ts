"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type WorkItem = {
  stage: number;
  id: string;
  blocker: number;
  game_id: string;
  start: number;
  end: number;
  lead_time: number;
  owner: {
    name: string;
    color: string;
    table: string;
    id: string;
    gameKey: string;
  };
  table: string;
};

export type intialStateType = {
  workItems: {
    workItems: {
      Design?: WorkItem[];
      Development?: WorkItem[];
      Release?: WorkItem[];
      "Strategic Value"?: WorkItem[];
    };
  };
};

export type moveItemType = {
  itemId: string;
  move: string;
  table: "Development" | "Strategic Value" | "Design" | "Release";
};

const initialState: intialStateType = {
  workItems: { workItems: {} },
};

export const workItemsReducer = createSlice({
  name: "workItems",
  initialState,
  reducers: {
    updateWorkItems: (state, action: PayloadAction<intialStateType>) => {
      state.workItems = action.payload.workItems;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateWorkItems } = workItemsReducer.actions;

export default workItemsReducer.reducer;
