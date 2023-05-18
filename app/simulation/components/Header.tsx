import { useSelector } from "react-redux";

export interface UserSelector {
  user: {
    name: string;
    id: string;
    color: string;
    table: string;
    gameKey: string;
  };
}

const Header = () => {
  const color = useSelector((state: UserSelector) => state.user.color);
  return (
    <>
      <header className="flex flex-row justify-between h-[10vh] items-center px-10 fixed top-0 left-0 w-screen">
        <div className="font-bold flex justify-center items-center">
          Room code: <span className="text-orang">YTZ13CI</span>
        </div>
        <section className="flex flex-row gap-11">
          <div className="font-bold">
            Round: <span className="text-orang">1</span>
          </div>
          <div className="font-bold">
            Day: <span className="text-orang">1</span>
          </div>
          <div className="font-bold flex flex-row justify-center items-center gap-4">
            <h1>Your color:</h1>
            <div
              style={{ backgroundColor: color }}
              className="w-[20px] h-[20px] rounded-full bg-slate-950"
            ></div>
          </div>
          <div className="font-bold">
            Players: <span className="text-orang">0/12</span>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
