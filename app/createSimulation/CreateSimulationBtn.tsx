"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateRound, updateUser } from "@/app/slice/userSlice";
import { updateActiveDat } from "@/app/slice/userSlice";
import { User } from "../joinSimulation/JoinSimulationBtn";
import { updatePlayers } from "@/app/slice/userSlice";

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
    const result = await axios.get("http://localhost:8000/initSimulation");
    const gameKey = result.data.gameCode;
    console.log(simulationData.name, gameKey);
    const getUser = await axios.post("http://localhost:8000/joinSimulation", {
      name: simulationData.name,
      gameKey,
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
        activePlayers: user.howManyPlayers,
      })
    );

    dispatch(
      updateRound({
        round: user.activeDay.round,
      })
    );

    router.push(`/simulation`);
  };

  return (
    <button
      onClick={handleCreateSimulation}
      className="bg-orang text-black font-bold p-4 px-10 mt-4"
    >
      Create
    </button>
  );
};

export default CreateSimulationBtn;
