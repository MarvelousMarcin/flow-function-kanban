import Column from "./Column";
import { tables } from "@/app/consts/tables";
type BoardType = {
  isYourTable: boolean;
  isFirst: boolean;
  name: "Development" | "Release" | "Strategic Value" | "Design";
};

const Board = ({ isYourTable, isFirst = false, name }: BoardType) => {
  return (
    <main
      className={`w-screen flex flex-col justify-center items-center ${
        isFirst ? "h-[90vh]" : "h-screen"
      }`}
    >
      {isYourTable && <p className="text-orang">your table</p>}
      <h1 className="text-3xl font-bold mb-10">{name}</h1>
      <section className="flex flex-row w-4/5  justify-evenly">
        {tables[name].columns.map((column) => (
          <Column columnName={column} />
        ))}
      </section>
    </main>
  );
};

export default Board;
