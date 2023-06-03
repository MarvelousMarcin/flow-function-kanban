"use client";
import { Dispatch, SetStateAction, useState } from "react";
import MenuList from "./MenuList";
import PlayersList from "./PlayersList";
import crossImg from "../../../assets/cross.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Menu = ({
  setIsMenuVisible,
  isMenuVisible,
}: {
  setIsMenuVisible: Dispatch<SetStateAction<boolean>>;
  isMenuVisible: boolean;
}) => {
  const [menuType, setMenuType] = useState(0);

  return (
    <motion.section
      initial={{ y: "-100%" }}
      animate={{ y: isMenuVisible ? "0" : "-100%" }}
      transition={{ duration: 0.7 }}
      className="w-full  rounded-xl h-screen z-50 bg-white bg-opacity-60 backdrop-blur-lg flex justify-center p-8 flex-col items-center drop-shadow-lg fixed"
    >
      <div
        className="absolute top-10 right-10"
        onClick={() => {
          setIsMenuVisible(false);
          setMenuType(0);
        }}
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
    </motion.section>
  );
};

export default Menu;
