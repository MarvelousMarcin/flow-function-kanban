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
    players: [];
  };
}

const PlayersCount = ({
  setPlayersListVisible,
}: {
  setPlayersListVisible: (f: (v: boolean) => boolean) => void;
}) => {
  const players = useSelector((state: UserSelector) => state.user.players);

  return (
    <div
      className="font-bold cursor-pointer"
      onClick={() => {
        setPlayersListVisible((prev) => !prev);
      }}
    >
      Players: <span className="text-orang">{players?.length}/12</span>
    </div>
  );
};

export default PlayersCount;
