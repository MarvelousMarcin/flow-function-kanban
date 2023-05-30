"use client";

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import workItemsSlice from "./slice/workItemsSlice";
export const store = configureStore({
  reducer: { user: userReducer, workItems: workItemsSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
