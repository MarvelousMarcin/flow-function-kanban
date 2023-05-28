"use client";
import { useEffect, useState } from "react";
import socket from "../../socket";
import { useDispatch } from "react-redux";

import { updatePlayers } from "@/app/slice/userSlice";
const PlayersCount = ({ players }: { players: number }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    socket.on("userJoined", (arg) => {
      dispatch(
        updatePlayers({
          activePlayers: arg.howManyPlayers,
        })
      );
    });
  }, []);

  return (
    <div className="font-bold">
      Players: <span className="text-orang">{players}/12</span>
    </div>
  );
};

export default PlayersCount;
