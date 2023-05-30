"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type WorkItem = {
  id: string;
  blocker: number;
  game_id: string;
  lead_time: number;
  stage: number;
  table: string;
  ownserId: string;
  end: number;
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
