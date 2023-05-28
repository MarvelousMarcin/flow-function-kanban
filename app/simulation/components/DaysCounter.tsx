"use client";
import { useEffect, useState } from "react";
import socket from "../../socket";
import { useDispatch } from "react-redux";
import { updateActiveDat } from "@/app/slice/userSlice";
const DaysCounter = ({ activeDay }: { activeDay: number }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("newDay", (arg) => {
      dispatch(
        updateActiveDat({
          activeDay: arg.newDay,
        })
      );
      alert("new day");
    });
  }, []);

  return (
    <div className="font-bold">
      Day: <span className="text-orang">{activeDay}</span>
    </div>
  );
};

export default DaysCounter;
