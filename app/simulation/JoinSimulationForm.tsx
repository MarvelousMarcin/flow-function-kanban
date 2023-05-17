"use client";
import JoinSimulationBtn from "./components/JoinSimulationBtn";
import { useState } from "react";

const JoinSimulationForm = () => {
  const [userData, setUser] = useState({ name: "", key: "" });

  return (
    <>
      <article className="mt-16">
        <section className="flex flex-col">
          <label className="font-bold text-[#42486A] text-xl">Name:</label>
          <input
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
        </section>
      </article>
      <JoinSimulationBtn userData={userData} />
    </>
  );
};

export default JoinSimulationForm;
