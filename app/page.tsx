import JoinSimulationForm from "./simulation/JoinSimulationForm";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-[80vh] w-screen">
      <h1 className="text-6xl text-[#42486A] font-bold">
        Enter your <span className="text-main">name</span> and <br />{" "}
        <span className="text-main">key</span> from organizator
      </h1>
      <JoinSimulationForm />
    </main>
  );
}
