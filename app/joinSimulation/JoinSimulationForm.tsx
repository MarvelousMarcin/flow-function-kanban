"use client";
import JoinSimulationBtn from "./JoinSimulationBtn";
import { useState } from "react";
import { motion } from "framer-motion";

const JoinSimulationForm = () => {
  const [userData, setUser] = useState({ name: "", key: "" });
  const [loaderWidth, setLoaderWidth] = useState("0");

  return (
    <>
      <article className="mt-16">
        <motion.div
          animate={{ width: loaderWidth }}
          initial={{ width: "0" }}
          transition={{ type: "spring", duration: 3 }}
          className="fixed top-0 left-0 h-3 bg-orang w-screen"
        ></motion.div>
        <section className="flex flex-col">
          <label className="font-bold text-[#42486A] text-xl">Name:</label>
          <input
            autoFocus={true}
            onChange={(e) =>
              setUser((prevUser) => {
                return { ...prevUser, name: e.target.value };
              })
            }
            className="border-[4px] text-xl py-3 px-4 border-orang outline-none rounded-lg mb-5 text-[#42486A] font-bold"
          />
        </section>
        <section className="flex flex-col">
          <label className="font-bold text-[#42486A] text-xl">Key:</label>
          <input
            onChange={(e) =>
              setUser((prevUser) => {
                return { ...prevUser, key: e.target.value };
              })
            }
            className="border-[4px] text-xl py-3 px-4 border-orang outline-none rounded-lg mb-5 text-[#42486A] font-bold"
          />
          <JoinSimulationBtn
            onClick={() => {
              setLoaderWidth("100vw");
            }}
            setLoaderWidth={setLoaderWidth}
            userData={userData}
          />
        </section>
      </article>
    </>
  );
};

export default JoinSimulationForm;
