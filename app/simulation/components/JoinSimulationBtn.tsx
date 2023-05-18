"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateUser } from "@/app/slice/userSlice";
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
}

const JoinSimulationBtn = ({ userData }: JoinSimulationBtnType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleJoinSimulation = async () => {
    const getUser = await axios.post("/api/joinSimulation", {
      data: { name: userData.name, gameKey: userData.key },
    });

    const user = getUser.data[0] as User;
    dispatch(updateUser(user));

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
