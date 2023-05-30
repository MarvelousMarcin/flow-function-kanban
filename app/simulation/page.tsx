"use client";

import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import socket from "../socket";
import AllBoards from "./components/Board/AllBoards";
import { useEffect, useRef, useState } from "react";
const queryClient = new QueryClient();
import { Toaster, toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import PlayersList from "./components/PlayersList";
import {
  updateActiveDat,
  updatePlayers,
  updateRound,
  updateUserMove,
} from "@/app/slice/userSlice";
import { updateWorkItems } from "../slice/workItemsSlice";

export default function Simulation() {
  const dispatch = useDispatch();
  const didLogRef = useRef(false);
  const [playersListVisible, setPlayersListVisible] = useState(false);
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
        dispatch(
          updateUserMove({
            card: "",
            isMove: false,
          })
        );
        toast.success("New Day");
      });

      socket.on("rerenderWorkItems", (arg) => {
        dispatch(updateWorkItems(arg));
      });

      socket.on("userJoined", (arg) => {
        dispatch(
          updatePlayers({
            activePlayers: arg.players,
          })
        );
        toast.success("New user joined");
      });

      socket.on("newStage", (arg) => {
        dispatch(
          updateRound({
            round: arg.newStage,
          })
        );
        toast.success("New Round");
      });
    }
  }, []);
  return (
    <main>
      <Header setPlayersListVisible={setPlayersListVisible} />
      <QueryClientProvider client={queryClient}>
        <PlayersList playersListVisible={playersListVisible} />
        <AllBoards />
        <Toaster />
      </QueryClientProvider>
    </main>
  );
}
