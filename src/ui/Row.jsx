const Row = ({ children }) => {
  return (
    <div className="flex w-full h-90 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md md:flex-row relative">
      {children}
    </div>
  );
};

export default Row;
