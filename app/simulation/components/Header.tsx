const Header = () => {
  return (
    <>
      <header className="flex flex-row justify-between h-[10vh] items-center px-10 fixed top-0 left-0 w-screen">
        <div className="font-bold flex justify-center items-center">
          Room code: <span className="text-orang">YTZ13CI</span>
        </div>
        <section className="flex flex-row gap-11">
          <div className="font-bold">
            Day: <span className="text-orang">1</span>
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
