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
  isYourTable: boolean;
  isFirst: boolean;
  name: "Development" | "Release" | "Strategic Value" | "Design";
  items: WorkItem[];
};

const Board = ({ isYourTable, name, items }: BoardType) => {
  console.log(items);
  return (
    <main
      className={`w-full flex flex-col justify-center items-center h-screen`}
    >
      {isYourTable && <p className="text-orang">your table</p>}
      <h1 className="text-3xl font-bold mb-10">{name}</h1>
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
