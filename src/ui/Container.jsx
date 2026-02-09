import Section from "./Section";

const Container = ({ children }) => {
  return <div className="grid col-1 p-8 bg-gray-100 gap-5">{children}</div>;
};

export default Container;
