"use client";
import { useEffect, useState } from "react";
import socket from "../../socket";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

export interface UserSelector {
  user: {
    name: string;
    id: string;
    color: string;
    table: string;
    gameKey: string;
    activeDay: number;
    players: number;
  };
}
import { updatePlayers } from "@/app/slice/userSlice";

const PlayersCount = () => {
  const players = useSelector((state: UserSelector) => state.user.players);

  return (
    <div className="font-bold">
      Players: <span className="text-orang">{players}/12</span>
    </div>
  );
};

export default PlayersCount;
