const Header = () => {
  return (
    <header className="flex flex-row justify-between h-16 items-center px-10">
      <div className="font-bold">
        Room code: <span className="text-orang">YTZ13CI</span>
      </div>
      <section className="flex flex-row gap-11">
        <div className="font-bold">
          Day: <span className="text-orang">2</span>
        </div>
        <div className="font-bold">
          Players: <span className="text-orang">5/12</span>
        </div>
      </section>
    </header>
  );
};

export default Header;
