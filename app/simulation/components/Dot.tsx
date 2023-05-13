type DotType = {
  color: string;
};

const Dot = ({ color }: DotType) => {
  return (
    <section
      style={{ backgroundColor: color }}
      className="w-5 h-5 rounded-full"
    ></section>
  );
};

export default Dot;
