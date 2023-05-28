import { useSelector } from "react-redux";
import PlayersCount from "./PlayersCount";
import DaysCounter from "./DaysCounter";
export interface UserSelector {
  user: {
    name: string;
    id: string;
    color: string;
    table: string;
    gameKey: string;
    activeDay: number;
    players: number;
  };
}

const Header = () => {
  const color = useSelector((state: UserSelector) => state.user.color);
  const gameKey = useSelector((state: UserSelector) => state.user.gameKey);
  const activeDay = useSelector((state: UserSelector) => state.user.activeDay);
  const players = useSelector((state: UserSelector) => state.user.players);

  return (
    <>
      <header className="flex flex-row bg-white z-20 justify-between h-[10vh] items-center px-10 fixed top-0 left-0 w-screen">
        <div className="font-bold flex justify-center items-center">
          Room code: <span className="text-orang">{gameKey}</span>
        </div>
        <section className="flex flex-row gap-11">
          <div className="font-bold">
            Round: <span className="text-orang">1</span>
          </div>
          <DaysCounter activeDay={activeDay} />
          <div className="font-bold flex flex-row justify-center items-center gap-4">
            <h1>Your color:</h1>
            <div
              style={{ backgroundColor: color }}
              className="w-[20px] h-[20px] rounded-full bg-slate-950"
            ></div>
          </div>
          <PlayersCount players={players} />
        </section>
      </header>
    </>
  );
};

export default Header;
