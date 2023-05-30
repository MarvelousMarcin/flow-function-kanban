"use client";
import Board from "./Board";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSelector } from "../Header";
import { updateWorkItems } from "@/app/slice/workItemsSlice";

const AllBoards = () => {
  const [userMove, setUserMove] = useState({ isMove: false, card: "" });
  const user = useSelector((state: UserSelector) => state.user);
  const strRef = useRef<HTMLDivElement | null>(null);
  const desRef = useRef<HTMLDivElement | null>(null);
  const devRef = useRef<HTMLDivElement | null>(null);
  const relRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

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
  const fetchWorkItem = async () => {
    const workItems = await axios.post("http://localhost:8000/getWorkItems", {
      gameCode: user.gameKey,
    });
    return workItems;
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["workItems"],
    queryFn: fetchWorkItem,
    onSuccess: (data) => {
      dispatch(updateWorkItems({ workItems: data?.data }));
    },
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <div></div>;
  }
  const workItemsData = data?.data;

  return (
    <>
      <div ref={strRef}></div>
      <Board
        name="Strategic Value"
        isFirst={true}
        items={workItemsData["Strategic Value"]}
        user={user}
        setUserMove={setUserMove}
      />
      <div ref={desRef}></div>
      <Board
        name="Design"
        isFirst={false}
        items={workItemsData["Design"]}
        user={user}
        setUserMove={setUserMove}
      />
      <div ref={devRef}></div>
      <Board
        name="Development"
        isFirst={false}
        items={workItemsData["Development"]}
        user={user}
        setUserMove={setUserMove}
      />
      <div ref={relRef}></div>
      <Board
        name="Release"
        isFirst={false}
        items={workItemsData["Release"]}
        user={user}
        setUserMove={setUserMove}
      />
    </>
  );
};
export default AllBoards;
