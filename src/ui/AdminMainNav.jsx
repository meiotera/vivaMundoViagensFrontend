import { NavLink } from "react-router-dom";
import Heading from "./Heading";

const linkBase = "block py-2 lg:py-0 transition-all font-medium";

const active = "text-orangep border-b-2 border-orangep lg:border-none";

const inactive = "hover:text-orange-400";

const AdminMainNav = ({ itemMenu }) => {
  return (
    <aside className="w-64 bg-slate-900 text-white p-4">
      <Heading tag="h2">Painel Admin</Heading>

      <nav className="space-y-3">
        {itemMenu.map((item, index) => (
          <NavLink
            to={`/admin/${item.toLowerCase()}`}
            key={index}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminMainNav;
