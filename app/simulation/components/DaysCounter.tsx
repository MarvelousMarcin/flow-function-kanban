"use client";
import { useEffect, useState } from "react";
import socket from "../../socket";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveDat } from "@/app/slice/userSlice";
import toast from "react-hot-toast";

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

const DaysCounter = () => {
  const dispatch = useDispatch();
  const activeDay = useSelector((state: UserSelector) => state.user.activeDay);

  return (
    <div className="font-bold">
      Day: <span className="text-orang">{activeDay}</span>
    </div>
  );
};

export default DaysCounter;
