import Heading from "./Heading";

const Section = ({ children, title, ...props }) => {
  return (
    <section className="container p-8 bg-gray-100 rounded">
      <Heading tag="h5">
        <span className="flex items-center gap-2">
          {props.icon}
          {title}
        </span>
      </Heading>
      <div className="overflow-x-auto">
        <div className={`${props.className} pt-2`}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
