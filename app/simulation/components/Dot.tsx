type DotType = {
  color: string;
};

const Dot = ({ color }: DotType) => {
  return (
    <section
      style={{ backgroundColor: color }}
      className="w-4 h-4 rounded-full"
    ></section>
  );
};

export default Dot;
