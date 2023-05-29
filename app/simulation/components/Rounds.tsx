"use client";

import { useSelector } from "react-redux";

export interface UserSelector {
  user: {
    name: string;
    id: string;
    color: string;
    table: string;
    gameKey: string;
    activeDay: number;
    players: number;
    round: number;
  };
}

const Rounds = () => {
  const round = useSelector((state: UserSelector) => state.user.round);

  return (
    <div className="font-bold">
      Round: <span className="text-orang">{round}</span>
    </div>
  );
};

export default Rounds;
