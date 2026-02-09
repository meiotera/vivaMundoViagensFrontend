const Banner = ({
  children,
  justify = "start",
  background,
  className,
  ...props
}) => {
  const baseClasses =
    "w-full bg-amber-500 items-center p-8 bg-cover bg-no-repeat bg-[center_80%]";

  const allClasses = [baseClasses, `justify-${justify}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={allClasses}
      {...props}
      style={{
        backgroundImage: background ? `url(${background})` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default Banner;
