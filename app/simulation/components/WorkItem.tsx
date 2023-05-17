"use client";

import axios from "axios";
import Dot from "./Dot";
import { useQueryClient } from "@tanstack/react-query";

type setUserMoveType = {
  isMove: boolean;
  card: string;
};

type WorkItemType = {
  start: number;
  end: number;
  owner: {
    name: string;
    color: string;
  };
  leadTime: number;
  blocker: number;
  stage: number;
  userMove: { isMove: boolean; card: string };
  id: string;
  setUserMove: ({ isMove, card }: setUserMoveType) => void;
  column: { name: string; stage: number };
};

const WorkItem = ({
  id,
  start,
  end,
  owner,
  leadTime,
  blocker,
  stage,
  userMove,
  setUserMove,
  column,
}: WorkItemType) => {
  const queryClient = useQueryClient();

  const clickItemHandler = async () => {
    if (userMove.isMove && userMove.card === "green" && column.stage !== 4) {
      await axios.post("/api/moveWorkItem", { data: { workItemId: id } });
      setUserMove({ isMove: false, card: "" });
      queryClient.invalidateQueries({ queryKey: ["workItems"] });
    } else if (
      userMove.isMove &&
      userMove.card === "red" &&
      column.stage !== 1 &&
      column.stage !== 4
    ) {
      await axios.post("/api/blockWorkItem", { data: { workItemId: id } });
      setUserMove({ isMove: false, card: "" });
      queryClient.invalidateQueries({ queryKey: ["workItems"] });
    }
  };

  return (
    <div
      onClick={clickItemHandler}
      style={{ cursor: userMove.isMove ? "pointer" : "default" }}
      className="bg-main rounded-3xl w-[90%] text-white flex flex-col py-4 justify-normal items-center p-1 gap-2"
    >
      <h1 className="font-bold text-sm">Work Item</h1>
      <p className="text-xs">{id}</p>
      <article className="flex flex-row justify-evenly w-full">
        <div>
          <h2 className="font-bold text-xs">Bloker</h2>
          <section className="flex flex-row gap-1">
            <Dot color={blocker >= 1 ? "#F59B6F" : "white"} />
            <Dot color={blocker >= 2 ? "#F59B6F" : "white"} />
            <Dot color={blocker >= 3 ? "#F59B6F" : "white"} />
          </section>
        </div>
        <div>
          <h2 className="font-bold text-xs">Stage</h2>
          <section className="flex flex-row gap-1">
            <Dot color={stage === 1 ? "#F59B6F" : "white"} />
            <Dot color={stage === 2 ? "#F59B6F" : "white"} />
            <Dot color={stage === 3 ? "#F59B6F" : "white"} />
            <Dot color={stage === 4 ? "#F59B6F" : "white"} />
          </section>
        </div>
        <div>
          <h2 className="font-bold text-xs">Owner</h2>
          <section className="flex flex-row gap-1">
            <Dot color={owner ? owner.color : "white"} />
          </section>
        </div>
      </article>
      <article className="flex flex-row justify-evenly w-full">
        <div>
          <h2 className="font-bold text-xs">Start</h2>
          <section className="w-11 h-4 rounded-full bg-white text-black text-center font-bold flex justify-center items-center text-sm">
            {start}
          </section>
        </div>
        <div>
          <h2 className="font-bold text-xs">End</h2>
          <section className="w-11 h-4 rounded-full bg-white text-black text-center font-bold flex justify-center items-center text-sm">
            {end}
          </section>
        </div>
        <div>
          <h2 className="font-bold text-xs">Lead Time</h2>
          <section className="w-11 h-4 rounded-full bg-white text-black text-center font-bold flex justify-center items-center text-sm">
            {leadTime}
          </section>
        </div>
      </article>
    </div>
  );
};

export default WorkItem;
