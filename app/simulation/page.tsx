"use client";

import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import socket from "../socket";
import AllBoards from "./components/Board/AllBoards";
import { useEffect, useRef } from "react";
const queryClient = new QueryClient();
import { Toaster, toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateActiveDat, updatePlayers } from "@/app/slice/userSlice";

export default function Simulation() {
  const dispatch = useDispatch();
  const didLogRef = useRef(false);
  useEffect(() => {
    if (didLogRef.current === false) {
      socket.connect();
      didLogRef.current = true;
      socket.on("newDay", (arg) => {
        dispatch(
          updateActiveDat({
            activeDay: arg.newDay,
          })
        );
        toast.success("New Day");
      });

      socket.on("userJoined", (arg) => {
        dispatch(
          updatePlayers({
            activePlayers: arg.howManyPlayers,
          })
        );
        toast.success("New user joined");
      });
    }
  }, []);
  return (
    <main>
      <Header />
      <QueryClientProvider client={queryClient}>
        <AllBoards />
        <Toaster />
      </QueryClientProvider>
    </main>
  );
}
