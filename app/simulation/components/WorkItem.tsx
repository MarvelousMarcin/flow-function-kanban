"use client";

import Dot from "./Dot";

type WorkItemType = {
  start: number;
  end: number;
  owner: {
    name: string;
    color: string;
  };
  leadTime: number;
  blocker: number;
  stage: number;
};

const WorkItem = ({
  start,
  end,
  owner,
  leadTime,
  blocker,
  stage,
}: WorkItemType) => {
  return (
    <div className="bg-main w-[20rem]  rounded-3xl  text-white flex flex-col py-3 justify-normal items-center p-1 gap-2">
      <h1 className="font-bold text-xl">Work Item</h1>
      <article className="flex flex-row gap-4">
        <div className="min-w-[5rem]">
          <h2 className="font-bold">Bloker</h2>
          <section className="flex flex-row gap-1">
            <Dot color={blocker >= 1 ? "#F59B6F" : "white"} />
            <Dot color={blocker >= 2 ? "#F59B6F" : "white"} />
            <Dot color={blocker >= 3 ? "#F59B6F" : "white"} />
          </section>
        </div>
        <div className="min-w-[5rem]">
          <h2 className="font-bold">Stage</h2>
          <section className="flex flex-row gap-1">
            <Dot color={stage === 1 ? "#F59B6F" : "white"} />
            <Dot color={stage === 2 ? "#F59B6F" : "white"} />
            <Dot color={stage === 3 ? "#F59B6F" : "white"} />
            <Dot color={stage === 4 ? "#F59B6F" : "white"} />
          </section>
        </div>
        <div className="min-w-[5rem]">
          <h2 className="font-bold">Owner</h2>
          <section
            style={{ backgroundColor: owner.color }}
            className="w-16 h-5 rounded-full bg-white text-white text-center font-bold flex justify-center items-center text-sm"
          >
            {owner.name}
          </section>
        </div>
      </article>
      <article className="flex flex-row gap-4">
        <div className="min-w-[5rem]">
          <h2 className="font-bold">Start</h2>
          <section className="w-16 h-5 rounded-full bg-white text-black text-center font-bold flex justify-center items-center">
            {start}
          </section>
        </div>
        <div className="min-w-[5rem]">
          <h2 className="font-bold">End</h2>
          <section className="w-16 h-5 rounded-full bg-white text-black text-center font-bold flex justify-center items-center">
            {end}
          </section>
        </div>
        <div className="min-w-[5rem]">
          <h2 className="font-bold">Lead Time</h2>
          <section className="w-16 h-5 rounded-full bg-white text-black text-center font-bold flex justify-center items-center">
            {leadTime}
          </section>
        </div>
      </article>
    </div>
  );
};

export default WorkItem;
