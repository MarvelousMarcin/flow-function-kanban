type DotType = {
  color: string;
};

const Dot = ({ color }: DotType) => {
  return (
    <section
      style={{ backgroundColor: color }}
      className="w-3 h-3 rounded-full"
    ></section>
  );
};

export default Dot;
