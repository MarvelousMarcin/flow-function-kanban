import WorkItem from "./components/WorkItem";
import Dot from "./components/Dot";
export default function Simulation() {
  return (
    <main>
      <WorkItem
        start={3}
        end={5}
        owner={{ name: "john", color: "green" }}
        leadTime={2}
        blocker={0}
        stage={2}
      />
    </main>
  );
}
