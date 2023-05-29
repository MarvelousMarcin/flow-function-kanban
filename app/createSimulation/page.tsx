import Link from "next/link";
import CreateSimulationForm from "./CreateSimulationForm";
export default function CreateSimulation() {
  return (
    <main className="flex flex-col justify-center items-center h-[80vh] w-screen relative">
      <Link href="/" className="absolute top-10 left-10">
        Back
      </Link>
      <h1 className="text-6xl text-[#42486A] font-bold text-center">
        Enter your <span className="text-main">name</span> and <br />{" "}
        <span className="text-main">players count</span>
      </h1>
      <CreateSimulationForm />
    </main>
  );
}
