"use client";
import { useEffect, useState } from "react";
import CreateSimulationBtn from "./CreateSimulationBtn";
import { createRef } from "react";
const CreateSimulationForm = () => {
  const [simulationData, setSimulationData] = useState({
    name: "",
    playersCount: 12,
  });

  return (
    <>
      <article className="mt-16">
        <section className="flex flex-col">
          <label className="font-bold text-[#42486A] text-xl">Name:</label>
          <input
            autoFocus={true}
            className="border-[4px] text-xl py-3 px-4 border-orang outline-none rounded-lg mb-5 text-[#42486A] font-bold"
            onChange={(e) =>
              setSimulationData((simul) => {
                return { ...simul, name: e.target.value };
              })
            }
          />
        </section>
        <section className="flex flex-col">
          <label className="font-bold text-[#42486A] text-xl">
            Players Count:
          </label>
          <input
            type="number"
            onChange={(e) =>
              setSimulationData((simul) => {
                return { ...simul, playersCount: Number(e.target.value) };
              })
            }
            min={10}
            max={24}
            value={simulationData.playersCount}
            className="border-[4px] text-center text-xl py-3 px-4 border-orang outline-none rounded-lg mb-5 text-[#42486A] font-bold"
          />
          <CreateSimulationBtn simulationData={simulationData} />
        </section>
      </article>
    </>
  );
};

export default CreateSimulationForm;
