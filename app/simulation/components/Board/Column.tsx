type ColumnType = {
  columnName: string;
  children: React.ReactNode;
};

const Column = ({ columnName, children }: ColumnType) => {
  return (
    <article className="bg-gray h-[70vh] rounded-xl w-[24%] flex flex-col justify-start items-center pt-5 gap-4 ">
      <h1 className="font-bold text-md ">{columnName}</h1>
      <section className="w-full h-[60vh] flex flex-col justify-start items-center gap-4 whitespace-nowrap overflow-auto scrollbar-hide">
        {children}
      </section>
    </article>
  );
};
export default Column;
