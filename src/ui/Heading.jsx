const Heading = ({ children, tag = "h1", ...props }) => {
  const Tag = tag;

  const styles = {
    h1: "text-4xl font-bold text-white",
    h2: "text-2xl font-semibold mb-4 text-white",
    h3: "text-xl font-bold text-gray-800 mb-2 truncate",
    h4: "text-lg font-medium mb-2 color-cor-titulo",
    h5: "text-sm font-medium mb-1 color-cor-titulo",
  };

  return (
    <Tag className={`${styles[tag] || styles.h1} ${props.className} font-bold`}>
      {children}
    </Tag>
  );
};

export default Heading;
