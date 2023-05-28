"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateUser } from "@/app/slice/userSlice";
import { updateActiveDat } from "@/app/slice/userSlice";
import { User } from "../joinSimulation/JoinSimulationBtn";
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
