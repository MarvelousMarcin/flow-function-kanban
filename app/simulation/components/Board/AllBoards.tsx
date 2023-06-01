"use client";
import Board from "./Board";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { UserSelector } from "../Header";
import { intialStateType } from "@/app/slice/workItemsSlice";
import { WorkItem } from "@/app/slice/workItemsSlice";

const AllBoards = () => {
  const [userMove, setUserMove] = useState({ isMove: false, card: "" });
  const user = useSelector((state: UserSelector) => state.user);
  const workItems = useSelector((state: intialStateType) => state.workItems);
  const speed = useSelector((state: UserSelector) => state.user.speed);

  const strRef = useRef<HTMLDivElement | null>(null);
  const desRef = useRef<HTMLDivElement | null>(null);
  const devRef = useRef<HTMLDivElement | null>(null);
  const relRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      let ref = null;
      if (user.table === "Strategic Value") {
        ref = strRef;
      } else if (user.table === "Design") {
        ref = desRef;
      } else if (user.table === "Development") {
        ref = devRef;
      } else {
        ref = relRef;
      }

      window.scrollTo({
        top: ref?.current?.offsetTop,
        behavior: "smooth",
      });
    }, 800);
  }, []);

  return (
    <>
      <div ref={strRef}></div>
      <Board
        name="Strategic Value"
        isFirst={true}
        items={workItems.workItems["Strategic Value"] as WorkItem[]}
        user={user}
        setUserMove={setUserMove}
        speed={speed["Strategic Value"]}
      />
      <div ref={desRef}></div>
      <Board
        name="Design"
        isFirst={false}
        items={workItems.workItems["Design"] as WorkItem[]}
        user={user}
        setUserMove={setUserMove}
        speed={speed.Design}
      />
      <div ref={devRef}></div>
      <Board
        name="Development"
        isFirst={false}
        items={workItems.workItems["Development"] as WorkItem[]}
        user={user}
        setUserMove={setUserMove}
        speed={speed.Development}
      />
      <div ref={relRef}></div>
      <Board
        name="Release"
        isFirst={false}
        items={workItems.workItems["Release"] as WorkItem[]}
        user={user}
        setUserMove={setUserMove}
        speed={speed.Release}
      />
    </>
  );
};
export default AllBoards;
