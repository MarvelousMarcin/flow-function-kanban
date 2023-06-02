"use client";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { UserSelector } from "../Header";
const PlayersList = () => {
  const players = useSelector((state: UserSelector) => state.user.players);

  return (
    <motion.main className=" ">
      <section className="flex flex-col gap-5 p-5 text-center">
        {players.map((player) => (
          <div
            key={player.id}
            className="font-bold text-xl"
            style={{ color: player.color }}
          >
            {player.name}
          </div>
        ))}
      </section>
    </motion.main>
  );
};

export default PlayersList;
