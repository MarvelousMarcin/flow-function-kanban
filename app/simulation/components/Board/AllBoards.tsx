"use client";
import Board from "./Board";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchWorkItem = async () => {
  const workItems = await axios.post("/api/getWorkItems", {
    data: { gameCode: "DQREYO" },
  });
  return workItems;
};

const AllBoards = () => {
  const user = {
    name: "John",
    color: "#333333",
    table: "Design",
  };
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["workItems"],
    queryFn: fetchWorkItem,
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
      />
      <Board
        name="Design"
        isFirst={false}
        items={workItemsData["Design"]}
        user={user}
      />
      <Board
        name="Development"
        isFirst={false}
        items={workItemsData["Development"]}
        user={user}
      />
      <Board
        name="Release"
        isFirst={false}
        items={workItemsData["Release"]}
        user={user}
      />
    </>
  );
};
export default AllBoards;
