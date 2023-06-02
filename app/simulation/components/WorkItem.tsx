"use client";

import axios from "axios";
import Dot from "./Dot";
import { useDispatch, useSelector } from "react-redux";
import { UserSelector } from "./Header";
import { motion } from "framer-motion";
import { updateUserMove } from "@/app/slice/userSlice";
import { toast } from "react-hot-toast";
import { intialStateType } from "@/app/slice/workItemsSlice";
type WorkItemType = {
  start: number;
  end: number;
  owner: {
    name: string;
    color: string;
    table: string;
    id: string;
    gameKey: string;
  };
  leadTime: number;
  blocker: number;
  stage: number;
  id: string;
  column: { name: string; stage: number };
  tableName: "Development" | "Design" | "Release" | "Strategic Value";
};

const WorkItem = ({
  id,
  start,
  end,
  owner,
  leadTime,
  blocker,
  stage,
  column,
  tableName,
}: WorkItemType) => {
  const userId = useSelector((state: UserSelector) => state.user.id);
  const userMove = useSelector((state: UserSelector) => state.user.move);
  const round = useSelector((state: UserSelector) => state.user.round);
  const dispatch = useDispatch();
  const workItemsAll = useSelector((state: intialStateType) => state.workItems);
  const clickItemHandler = async () => {
    const myTableWI = workItemsAll.workItems[tableName];
    const howManyWIP = myTableWI?.filter((wi) => wi.stage > 1 && wi.stage < 4)
      .length as number;

    if (
      stage &&
      userMove.isMove &&
      round >= 2 &&
      userMove.card === "green" &&
      column.stage === 1
    ) {
      if (howManyWIP && howManyWIP >= 3) {
        toast.dismiss();
        toast.error("Too many items in progress!! Maximum WIP is 3");
        return;
      }
    }

    if (
      (userMove.isMove && userMove.card === "green" && column.stage !== 4) ||
      (userMove.isMove &&
        userMove.card === "red" &&
        column.stage !== 4 &&
        howManyWIP >= 3)
    ) {
      if (owner && round === 1 && userId !== owner.id) {
        toast.dismiss();
        toast.error("You can't touch other players tasks in this round!");
        return;
      }
      dispatch(updateUserMove({ card: "waiting", isMove: true }));

      await axios.post(`${process.env.NEXT_PUBLIC_URL}/moveWorkItem`, {
        workItemId: id,
        userId,
      });
    } else if (userMove.isMove && userMove.card === "red") {
      if (column.stage === 1) {
        toast.dismiss();
        toast.error("You cannot block item in backlog");
        return;
      }
      if (column.stage === 4) {
        toast.dismiss();
        toast.error("You cannot block item that is already done");
        return;
      }

      if (blocker >= 3) {
        toast.dismiss();
        toast.error("This item is alredy maxiumim blocked");
        return;
      }

      if (owner && round === 1 && userId !== owner.id) {
        toast.dismiss();
        toast.error("You can't touch other players tasks in this round!");
        return;
      }
      dispatch(updateUserMove({ card: "waiting", isMove: true }));

      await axios.post(`${process.env.NEXT_PUBLIC_URL}/blockWorkItem`, {
        workItemId: id,
        userId,
      });
    }
  };

  return (
    <motion.div
      key={id}
      whileTap={{ scale: 0.94 }}
      onClick={clickItemHandler}
      whileHover={{ backgroundColor: "#16c8dc" }}
      style={{ cursor: userMove.isMove ? "pointer" : "default" }}
      className="bg-main rounded-3xl w-[90%] text-white flex flex-col py-4 justify-normal items-center p-1 gap-2"
    >
      <h1 className="font-bold text-sm">Work Item</h1>
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
          <section className="w-11 h-5 rounded-full bg-white text-black text-center font-bold flex justify-center items-center text-sm">
            {start}
          </section>
        </div>
        <div>
          <h2 className="font-bold text-xs">End</h2>
          <section className="w-11 h-5 rounded-full bg-white text-black text-center font-bold flex justify-center items-center text-sm">
            {end}
          </section>
        </div>
        <div>
          <h2 className="font-bold text-xs">Lead Time</h2>
          <section className="w-11 h-5 rounded-full bg-white text-black text-center font-bold flex justify-center items-center text-sm">
            {leadTime}
          </section>
        </div>
      </article>
    </motion.div>
  );
};

export default WorkItem;
