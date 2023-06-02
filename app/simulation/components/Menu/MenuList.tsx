import { motion } from "framer-motion";
import exitImg from "../../../assets/exit.svg";
import helpImg from "../../../assets/info.svg";
import statsImg from "../../../assets/graduation-cap.svg";
import usersImg from "../../../assets/user.svg";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const MenuList = ({
  setMenuType,
}: {
  setMenuType: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <ul className="text-center flex flex-col justify-evenly h-3/4 text-xl ">
      <motion.li
        whileHover={{ x: 10 }}
        className="cursor-pointer flex flex-row justify-center items-center gap-4"
      >
        <Image
          className="cursor-pointer"
          src={statsImg}
          alt=""
          width={24}
          height={24}
        />
        Stats
      </motion.li>
      <motion.li
        onClick={() => setMenuType(2)}
        whileHover={{ x: 10 }}
        className="cursor-pointer flex flex-row justify-center items-center gap-4"
      >
        <Image
          className="cursor-pointer"
          src={usersImg}
          alt=""
          width={24}
          height={24}
        />
        Users
      </motion.li>
      <motion.li
        whileHover={{ x: 10 }}
        className="cursor-pointer flex flex-row justify-center items-center gap-4"
      >
        <Image
          className="cursor-pointer"
          src={helpImg}
          alt=""
          width={24}
          height={24}
        />
        <p>Help</p>
      </motion.li>

      <Link href="/">
        <motion.li
          whileHover={{ x: 10 }}
          className="cursor-pointer flex flex-row justify-center items-center gap-4"
        >
          <Image
            className="cursor-pointer"
            src={exitImg}
            alt=""
            width={24}
            height={24}
          />
          Exit
        </motion.li>
      </Link>
    </ul>
  );
};

export default MenuList;
