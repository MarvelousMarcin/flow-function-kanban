"use client";

import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import socket from "../socket";
import AllBoards from "./components/Board/AllBoards";
import { useEffect, useRef, useState } from "react";
const queryClient = new QueryClient();
import { Toaster, toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Menu from "./components/Menu/Menu";

import {
  updateActiveDat,
  updatePlayers,
  updateRound,
  updateSpeed,
  updateUserMove,
} from "@/app/slice/userSlice";
import { updateWorkItems } from "../slice/workItemsSlice";

export default function Simulation() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
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
        dispatch(
          updateUserMove({
            card: "",
            isMove: false,
          })
        );
        toast.dismiss();
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

      socket.on(
        "capacityUpdate",
        (arg: {
          doneDev: number;
          doneDes: number;
          doneStra: number;
          doneRel: number;
          day: number;
        }) => {
          const speed = {
            Development: Number((arg.doneDev / arg.day).toFixed(2)),
            Design: Number((arg.doneDes / arg.day).toFixed(2)),
            "Strategic Value": Number((arg.doneStra / arg.day).toFixed(2)),
            Release: Number((arg.doneRel / arg.day).toFixed(2)),
          };
          dispatch(updateSpeed({ speed }));
        }
      );
    }
  }, []);
  return (
    <main>
      <Header setIsMenuVisible={setIsMenuVisible} />
      <QueryClientProvider client={queryClient}>
        <Menu
          isMenuVisible={isMenuVisible}
          setIsMenuVisible={setIsMenuVisible}
        />
        <AllBoards />
        <Toaster />
      </QueryClientProvider>
    </main>
  );
}
