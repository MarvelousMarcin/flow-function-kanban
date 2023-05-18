"use client";
import Board from "./Board";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSelector } from "react-redux";
import { UserSelector } from "../Header";

const AllBoards = () => {
  const [userMove, setUserMove] = useState({ isMove: false, card: "" });
  const user = useSelector((state: UserSelector) => state.user);

  const fetchWorkItem = async () => {
    const workItems = await axios.post("/api/getWorkItems", {
      data: { gameCode: user.gameKey },
    });
    return workItems;
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["workItems"],
    queryFn: fetchWorkItem,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div></div>;
  }
  const workItemsData = data?.data;

  return (
    <>
      <Board
        name="Strategic Value"
        isFirst={true}
        items={workItemsData["Strategic Value"]}
        user={user}
        setUserMove={setUserMove}
        userMove={userMove}
      />
      <Board
        name="Design"
        isFirst={false}
        items={workItemsData["Design"]}
        user={user}
        setUserMove={setUserMove}
        userMove={userMove}
      />
      <Board
        name="Development"
        isFirst={false}
        items={workItemsData["Development"]}
        user={user}
        setUserMove={setUserMove}
        userMove={userMove}
      />
      <Board
        name="Release"
        isFirst={false}
        items={workItemsData["Release"]}
        user={user}
        setUserMove={setUserMove}
        userMove={userMove}
      />
    </>
  );
};
export default AllBoards;
