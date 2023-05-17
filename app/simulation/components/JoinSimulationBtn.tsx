"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import Router from "next/router";

type JoinSimulationBtnType = {
  userData: {
    name: string;
    key: string;
  };
};

const JoinSimulationBtn = ({ userData }: JoinSimulationBtnType) => {
  const handleJoinSimulation = async () => {
    const getUser = await axios.post("/api/joinSimulation", {
      data: { name: userData.name, gameKey: userData.key },
    });

    const user = getUser.data[0];
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
