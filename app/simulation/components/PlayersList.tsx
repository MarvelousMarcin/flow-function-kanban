"use client";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { UserSelector } from "./Header";
const PlayersList = ({
  playersListVisible,
}: {
  playersListVisible: boolean;
}) => {
  const players = useSelector((state: UserSelector) => state.user.players);

  return (
    <motion.main
      animate={{ x: playersListVisible ? 0 : "-100%" }}
      initial={{ x: "-100%" }}
      transition={{ duration: 0.8, type: "tween" }}
      className="fixed w-full h-[90vh] gap-4 left-0 z-10 bg-white text-black top-[10vh] flex flex-col justify-start items-center"
    >
      <h1 className="font-bold text-3xl mt-10">Players</h1>
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
