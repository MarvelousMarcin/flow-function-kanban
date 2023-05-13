import Header from "./components/Header";
import Board from "./components/Board/Board";
export default function Simulation() {
  return (
    <main>
      <Header />
      <Board name="Strategic Value" isFirst={true} isYourTable={true} />
      <Board name="Design" isFirst={false} isYourTable={false} />
      <Board name="Development" isFirst={false} isYourTable={false} />
      <Board name="Release" isFirst={false} isYourTable={false} />
    </main>
  );
}
