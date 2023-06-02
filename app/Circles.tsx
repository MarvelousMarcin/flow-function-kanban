"use client";
import { motion } from "framer-motion";

const Circles = () => {
  return (
    <>
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ repeat: Infinity, repeatDelay: 0.4, duration: 2 }}
        className="bg-[#D9FEE3] w-[24rem] h-[24rem] rounded-full fixed top-10 left-24 z-[-3]"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ repeat: Infinity, repeatDelay: 0.4, duration: 1 }}
        className="bg-[#FFECED] w-[24rem] h-[24rem] rounded-full fixed top-24 right-10 z-[-3]"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ repeat: Infinity, repeatDelay: 0.4, duration: 0.8 }}
        className="bg-[#D9FEE3] w-[14rem] h-[14rem] rounded-full fixed bottom-20 right-3 z-[-3]"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ repeat: Infinity, repeatDelay: 0.4, duration: 1 }}
        className="bg-[#FFECED] w-[18rem] h-[18rem] rounded-full fixed bottom-20 left-3 z-[-3]"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ repeat: Infinity, repeatDelay: 0.4, duration: 1.1 }}
        className="bg-[#D9FEE3] w-[18rem] h-[18rem] rounded-full fixed bottom-60 right-96  z-[-3]"
      ></motion.div>
    </>
  );
};

export default Circles;
