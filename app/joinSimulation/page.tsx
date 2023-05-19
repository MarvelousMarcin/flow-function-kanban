import JoinSimulationForm from "./JoinSimulationForm";
import Link from "next/link";

export default function JoinSimulation() {
  return (
    <main className="flex flex-col justify-center items-center h-[80vh] w-screen relative">
      <Link href="/" className="absolute top-10 left-10">
        Back
      </Link>
      <h1 className="text-6xl text-[#42486A] font-bold">
        Enter your <span className="text-main">name</span> and <br />{" "}
        <span className="text-main">key</span> from organizator
      </h1>
      <JoinSimulationForm />
    </main>
  );
}
