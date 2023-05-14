type ColumnType = {
  columnName: string;
  children: React.ReactNode;
};

const Column = ({ columnName, children }: ColumnType) => {
  return (
    <article className="bg-gray h-[80vh] rounded-xl w-[24%] flex flex-col justify-start items-center pt-5">
      <h1 className="font-bold text-md pb-10">{columnName}</h1>
      {children}
    </article>
  );
};
export default Column;
