"use client";

import axios from "axios";
import WorkItem from "../WorkItem";
import Column from "./Column";
import { tables } from "@/app/consts/tables";

type WorkItem = {
  stage: number;
  id: string;
  blocker: number;
  game_id: string;
  start: number;
  end: number;
  lead_time: number;
  owner: { name: string; color: string };
  table: string;
};

type BoardType = {
  isFirst: boolean;
  name: "Development" | "Release" | "Strategic Value" | "Design";
  items: WorkItem[];
  user: {
    name: string;
    color: string;
    table: string;
  };
  setUserMove: Function;
  userMove: { isMove: boolean; card: string | null };
};

const Board = ({ name, items, user, setUserMove, userMove }: BoardType) => {
  const isMyBoard = name === user.table;

  const handleDrawCard = async () => {
    const whatCard = await axios.post("/api/drawCard", {
      data: { userId: "DQREYO" },
    });

    const color = whatCard.data.card;

    if (color === "green") {
      setUserMove({ isMove: true, color: "green" });
    } else {
      setUserMove({ isMove: true, color: "red" });
    }
  };

  return (
    <main
      className={`w-full flex flex-col justify-center items-center h-screen`}
    >
      {isMyBoard && <p className="text-orang">your table</p>}
      <section className="flex flex-row justify-center items-center mb-10 w-5/6 relative">
        <h1 className="text-3xl font-bold ">{name}</h1>
        {isMyBoard && (
          <button
            onClick={handleDrawCard}
            className="absolute right-0 bg-orang font-bold p-3 rounded-lg"
          >
            Draw Card
          </button>
        )}
      </section>
      <section className="flex flex-row w-5/6  justify-evenly">
        {tables[name].columns.map((column) => (
          <>
            <Column columnName={column.name}>
              {items
                ?.filter((item) => item.stage === column.stage)
                .map((item) => (
                  <WorkItem
                    userMove={userMove}
                    start={item.start}
                    end={item.end}
                    key={item.id}
                    id={item.id}
                    leadTime={item.lead_time}
                    blocker={item.blocker}
                    stage={
                      name === "Strategic Value"
                        ? 1
                        : name === "Design"
                        ? 2
                        : name === "Development"
                        ? 3
                        : 4
                    }
                    owner={item.owner}
                  />
                ))}
            </Column>
          </>
        ))}
      </section>
    </main>
  );
};

export default Board;
