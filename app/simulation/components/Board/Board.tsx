"use client";

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
};

const Board = ({ name, items, user }: BoardType) => {
  const isMyBoard = name === user.table;

  return (
    <main
      className={`w-full flex flex-col justify-center items-center h-screen`}
    >
      {isMyBoard && <p className="text-orang">your table</p>}
      <section className="flex flex-row justify-center items-center mb-10 w-5/6 relative">
        <h1 className="text-3xl font-bold ">{name}</h1>
        {isMyBoard && (
          <button className="absolute right-0 bg-orang font-bold p-3 rounded-lg">
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
                    start={item.start}
                    end={item.end}
                    key={item.id}
                    leadTime={item.lead_time}
                    blocker={item.blocker}
                    stage={item.stage}
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
