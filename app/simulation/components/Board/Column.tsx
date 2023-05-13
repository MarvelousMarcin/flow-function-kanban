type ColumnType = {
  columnName: string;
};

const Column = ({ columnName }: ColumnType) => {
  return (
    <article className="bg-gray h-[75vh] rounded-xl w-64 flex flex-col justify-start items-center pt-5">
      <h1 className="font-bold text-md">{columnName}</h1>
    </article>
  );
};
export default Column;
