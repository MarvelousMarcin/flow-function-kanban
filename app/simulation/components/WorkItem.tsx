import Dot from "./Dot";

const WorkItem = () => {
  return (
    <div className="bg-main w-[20rem]  rounded-3xl  text-white flex flex-col py-3 justify-normal items-center p-1 gap-2">
      <h1 className="font-bold text-xl">Work Item</h1>
      <article className="flex flex-row gap-4">
        <div className="min-w-[5rem]">
          <h2 className="font-bold">Bloker</h2>
          <section className="flex flex-row gap-1">
            <Dot color="white" />
            <Dot color="white" />
            <Dot color="white" />
          </section>
        </div>
        <div className="min-w-[5rem]">
          <h2 className="font-bold">Etap</h2>
          <section className="flex flex-row gap-1">
            <Dot color="white" />
            <Dot color="white" />
            <Dot color="white" />
          </section>
        </div>
        <div className="min-w-[5rem]">
          <h2 className="font-bold">Owner</h2>
          <section className="w-16 h-5 rounded-full bg-white"></section>
        </div>
      </article>
      <article className="flex flex-row gap-4">
        <div className="min-w-[5rem]">
          <h2 className="font-bold">Start</h2>
          <section className="w-16 h-5 rounded-full bg-white"></section>
        </div>
        <div className="min-w-[5rem]">
          <h2 className="font-bold">End</h2>
          <section className="w-16 h-5 rounded-full bg-white"></section>
        </div>
        <div className="min-w-[5rem]">
          <h2 className="font-bold">Lead Time</h2>
          <section className="w-16 h-5 rounded-full bg-white"></section>
        </div>
      </article>
    </div>
  );
};

export default WorkItem;
