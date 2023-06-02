import Link from "next/link";
import Circles from "./Circles";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-[80vh] w-screen">
      <section className="text-center">
        <p className="text-orang font-bold text-xl">try kanban in action</p>
        <h1 className="text-[#42486A] text-[3.7em] font-bold leading-[56px]">
          Flow Fuction <br></br>Simulator
        </h1>
      </section>

      <section className="flex flex-col gap-5 text-center mt-10">
        <Link href="/createSimulation">
          <div className="bg-main p-4 text-white rounded-md font-bold text-xl">
            Create your own simulation
          </div>
        </Link>
        <Link href="/joinSimulation">
          <div className="bg-main p-4 text-white rounded-md font-bold text-xl">
            Join existing one
          </div>
        </Link>
      </section>
      <Circles />
    </main>
  );
}
