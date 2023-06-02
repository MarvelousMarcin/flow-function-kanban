import Image from "next/image";
import menuImg from "../../assets/menu-burger.svg";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
const MenuBtn = ({
  setIsMenuVisible,
}: {
  setIsMenuVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.div whileHover={{ scale: 1.3 }}>
      <Image
        className="cursor-pointer"
        src={menuImg}
        alt=""
        width={24}
        height={24}
        onClick={() => setIsMenuVisible((prev) => !prev)}
      />
    </motion.div>
  );
};

export default MenuBtn;
