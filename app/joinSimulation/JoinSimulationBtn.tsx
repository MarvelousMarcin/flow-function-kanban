"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateRound, updateSpeed, updateUser } from "@/app/slice/userSlice";
import { updateActiveDat } from "@/app/slice/userSlice";
import { updatePlayers } from "@/app/slice/userSlice";
import { updateWorkItems } from "../slice/workItemsSlice";
import { motion } from "framer-motion";

type JoinSimulationBtnType = {
  userData: {
    name: string;
    key: string;
  };
};

export interface User {
  name: string;
  id: string;
  color: string;
  table: string;
  gameKey: string;
  activeDay: {
    id: string;
    code: string;
    day: number;
    round: number;
    doneDev: number;
    doneDes: number;
    doneStra: number;
    doneRel: number;
  };
  players: [];
}

const JoinSimulationBtn = ({ userData }: JoinSimulationBtnType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleJoinSimulation = async () => {
    const getUser = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/joinSimulation`,
      {
        name: userData.name,
        gameKey: userData.key,
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
      updateRound({
        round: user.activeDay.round,
      })
    );

    const speed = {
      Development: Number(
        (user.activeDay.doneDev / user.activeDay.day).toFixed(2)
      ),
      Design: Number((user.activeDay.doneDes / user.activeDay.day).toFixed(2)),
      "Strategic Value": Number(
        (user.activeDay.doneStra / user.activeDay.day).toFixed(2)
      ),
      Release: Number((user.activeDay.doneRel / user.activeDay.day).toFixed(2)),
    };

    dispatch(updateSpeed({ speed }));

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
      onClick={handleJoinSimulation}
      className="bg-orang text-black font-bold p-4 px-10 rounded-lg"
    >
      Join
    </motion.button>
  );
};

export default JoinSimulationBtn;
