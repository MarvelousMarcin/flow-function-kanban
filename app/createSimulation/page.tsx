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
    </main>
  );
}
