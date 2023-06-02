"use client";
import { Dispatch, SetStateAction, useState } from "react";
import MenuList from "./MenuList";
import PlayersList from "./PlayersList";
import crossImg from "../../../assets/cross.svg";
import Image from "next/image";

const Menu = ({
  setIsMenuVisible,
}: {
  setIsMenuVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const [menuType, setMenuType] = useState(0);

  return (
    <section className="w-[30rem]  rounded-xl h-[30rem] z-50 bg-white bg-opacity-20 backdrop-blur-lg flex justify-start p-8 flex-col items-center  drop-shadow-lg fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h1 className="text-orang font-bold text-3xl mb-4">Menu</h1>
      <div
        className="absolute top-5 right-5"
        onClick={() => setIsMenuVisible(false)}
      >
        <Image
          className="cursor-pointer"
          src={crossImg}
          alt=""
          width={15}
          height={15}
        />
      </div>
      {menuType === 0 && <MenuList setMenuType={setMenuType} />}
      {menuType === 2 && <PlayersList />}
    </section>
  );
};

export default Menu;
