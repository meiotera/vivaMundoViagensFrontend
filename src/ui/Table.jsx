function Table({ children }) {
  return (
    <div className="w-full overflow-x-auto shadow-md rounded-xl border border-gray-200">
      <table className="w-full text-left text-sm border-collapse bg-white">
        {children}
      </table>
    </div>
  );
}

function Header({ children }) {
  return (
    <thead className="bg-primary text-white uppercase text-xs font-bold tracking-wider">
      <tr>{children}</tr>
    </thead>
  );
}

function Body({ data, render }) {
  if (!data?.length)
    return (
      <tbody className="divide-y divide-gray-100 text-gray-700">
        <tr>
          {/* colSpan should ideally match the number of headers you have */}
          <td className="text-center p-8 text-gray-500 italic">
            Nenhum dado para exibir no momento
          </td>
        </tr>
      </tbody>
    );
  return (
    <tbody className="divide-y divide-gray-100 text-gray-700">
      {data.map(render)}
    </tbody>
  );
}

function Row({ children }) {
  return (
    <tr className="hover:bg-orange-50 transition-colors duration-200">
      {children}
    </tr>
  );
}

const TdTable = ({ children }) => (
  <td className="md:px-4 p-2 whitespace-nowrap divide-x divide-gray-500 uppercase">
    {children}
  </td>
);

const ThTable = ({ children }) => (
  <th className="md:px-4 p-2 whitespace-nowrap text-center">{children}</th>
);

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Td = TdTable;
Table.Th = ThTable;

export default Table;
