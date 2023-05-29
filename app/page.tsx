import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-[80vh] w-screen">
      <Link href="/joinSimulation">Join</Link>
      <Link href="/createSimulation">Create</Link>
    </main>
  );
}
