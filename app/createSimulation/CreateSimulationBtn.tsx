"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateRound, updateUser, updateUserMove } from "@/app/slice/userSlice";
import { updateActiveDat } from "@/app/slice/userSlice";
import { User } from "../joinSimulation/JoinSimulationBtn";
import { updatePlayers } from "@/app/slice/userSlice";
import { updateWorkItems } from "../slice/workItemsSlice";
import { motion } from "framer-motion";

type CreateSimulationBtnType = {
  simulationData: {
    name: string;
    playersCount: number;
  };
};

const CreateSimulationBtn = ({ simulationData }: CreateSimulationBtnType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleCreateSimulation = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/initSimulation`
    );
    const gameKey = result.data.gameCode;
    const getUser = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/joinSimulation`,
      {
        name: simulationData.name,
        gameKey,
      }
    );

    const user = getUser.data as User;

    dispatch(
      updateUser({
        color: user.color,
        gameKey: user.gameKey,
        id: user.id,
        name: user.name,
        table: user.table,
      })
    );
    dispatch(
      updateActiveDat({
        activeDay: user.activeDay.day,
      })
    );

    dispatch(
      updatePlayers({
        activePlayers: user.players,
      })
    );

    dispatch(
      updateUserMove({
        card: "",
        isMove: false,
      })
    );

    dispatch(
      updateRound({
        round: user.activeDay.round,
      })
    );

    const workItems = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/getWorkItems`,
      {
        gameCode: user.gameKey,
      }
    );

    dispatch(updateWorkItems({ workItems: workItems.data }));

    router.push(`/simulation`);
  };

  return (
    <motion.button
      whileHover={{ backgroundColor: "#00A8BA" }}
      onClick={handleCreateSimulation}
      className="bg-orang text-black font-bold p-4 px-10 rounded-lg"
    >
      Create
    </motion.button>
  );
};

export default CreateSimulationBtn;
