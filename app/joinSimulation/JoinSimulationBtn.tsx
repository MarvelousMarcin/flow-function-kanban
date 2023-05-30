"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateRound, updateUser } from "@/app/slice/userSlice";
import { updateActiveDat } from "@/app/slice/userSlice";
import { updatePlayers } from "@/app/slice/userSlice";
import { updateWorkItems } from "../slice/workItemsSlice";

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
  };
  players: [];
}

const JoinSimulationBtn = ({ userData }: JoinSimulationBtnType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleJoinSimulation = async () => {
    const getUser = await axios.post("http://localhost:8000/joinSimulation", {
      name: userData.name,
      gameKey: userData.key,
    });

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

    const workItems = await axios.post("http://localhost:8000/getWorkItems", {
      gameCode: user.gameKey,
    });

    dispatch(updateWorkItems({ workItems: workItems.data }));

    router.push(`/simulation`);
  };

  return (
    <button
      onClick={handleJoinSimulation}
      className="bg-orang text-black font-bold p-4 px-10"
    >
      Join
    </button>
  );
};

export default JoinSimulationBtn;
