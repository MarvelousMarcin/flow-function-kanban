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
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["workItems"],
    queryFn: fetchWorkItem,
  });

  if (isLoading) {
    return <div></div>;
  }
  const workItemsData = data?.data;
  console.log(workItemsData);
  return (
    <>
      <Board
        name="Strategic Value"
        isFirst={true}
        isYourTable={true}
        items={workItemsData["Strategic Value"]}
      />
      <Board
        name="Design"
        isFirst={false}
        isYourTable={false}
        items={workItemsData["Design"]}
      />
      <Board
        name="Development"
        isFirst={false}
        isYourTable={false}
        items={workItemsData["Development"]}
      />
      <Board
        name="Release"
        isFirst={false}
        isYourTable={false}
        items={workItemsData["Release"]}
      />
    </>
  );
};
export default AllBoards;
