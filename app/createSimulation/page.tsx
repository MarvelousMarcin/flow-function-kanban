"use client";
import { motion } from "framer-motion";

import Link from "next/link";
import CreateSimulationForm from "./CreateSimulationForm";
import backImg from "../assets/left.svg";
import Image from "next/image";
export default function CreateSimulation() {
  return (
    <main className="flex flex-col justify-center items-center h-[80vh] w-screen relative">
      <Link href="/" className="absolute top-10 left-10">
        <Image alt="" src={backImg} width={25} height={25} />
      </Link>
      <h1 className="text-6xl text-[#42486A] font-bold text-center">
        Enter your <span className="text-main">name</span> and <br />{" "}
        <span className="text-main">players count</span>
      </h1>
      <CreateSimulationForm />
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ repeat: Infinity, repeatDelay: 0.4, duration: 2 }}
        className="bg-[#FFECED] w-[24rem] h-[24rem] rounded-full fixed top-13 left-24 z-[-3]"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ repeat: Infinity, repeatDelay: 0.4, duration: 1 }}
        className="bg-[#D9FEE3] w-[24rem] h-[24rem] rounded-full fixed top-24 right-10 z-[-3]"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ repeat: Infinity, repeatDelay: 0.4, duration: 0.8 }}
        className="bg-[#FFECED] w-[14rem] h-[14rem] rounded-full fixed bottom-20 right-3 z-[-3]"
      ></motion.div>
    </main>
  );
}
