"use client";

import axios from "axios";
import WorkItem from "../WorkItem";
import Column from "./Column";
import { tables } from "@/app/consts/tables";
import { motion } from "framer-motion";
type setUserMoveType = {
  isMove: boolean;
  card: string;
};

type WorkItem = {
  stage: number;
  id: string;
  blocker: number;
  game_id: string;
  start: number;
  end: number;
  lead_time: number;
  owner: {
    name: string;
    color: string;
    table: string;
    id: string;
    gameKey: string;
  };
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
  setUserMove: ({ isMove, card }: setUserMoveType) => void;
  userMove: { isMove: boolean; card: string };
};

const Board = ({ name, items, user, setUserMove, userMove }: BoardType) => {
  const isMyBoard = name === user.table;
  const handleDrawCard = async () => {
    const whatCard = await axios.post("http://localhost:8000/drawCard", {
      data: { userId: "DQREYO" },
    });

    const card = whatCard.data.card;

    if (card === "green") {
      setUserMove({ isMove: true, card: "green" });
    } else {
      setUserMove({ isMove: true, card: "red" });
    }
  };

  return (
    <main
      className={`w-full flex flex-col justify-center items-center h-screen`}
    >
      {isMyBoard && <p className="text-orang">your table</p>}
      <section className="flex flex-row justify-center items-center mb-10 w-5/6 relative">
        <h1 className="text-3xl font-bold ">{name}</h1>
        {isMyBoard && !userMove.isMove && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleDrawCard}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute right-0 bg-orang font-bold p-3 rounded-lg"
          >
            Draw Card
          </motion.button>
        )}
        {isMyBoard && userMove.isMove && userMove.card === "red" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="font-bold absolute right-0 p-3 rounded-lg bg-red-600 text-white w-32 text-center text-whit"
          >
            Block Item
          </motion.div>
        )}
        {isMyBoard && userMove.isMove && userMove.card === "green" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute right-0  font-bold p-3 rounded-lg bg-green-600 text-white w-44 text-center"
          >
            Move item
          </motion.div>
        )}
      </section>
      <section className="flex flex-row w-5/6  justify-evenly">
        {tables[name].columns.map((column) => (
          <>
            <Column key={column.name} columnName={column.name}>
              {items
                ?.filter((item) => item.stage === column.stage)
                .map((item) => (
                  <WorkItem
                    userMove={userMove}
                    start={item.start}
                    end={item.end}
                    key={Math.random()}
                    id={item.id}
                    leadTime={item.lead_time}
                    blocker={item.blocker}
                    setUserMove={setUserMove}
                    column={column}
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
