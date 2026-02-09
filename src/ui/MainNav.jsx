import { NavLink } from "react-router-dom";

const linkBase = "block py-2 lg:py-0 transition-all font-medium";

const active = "text-orangep border-b-2 border-orangep lg:border-none";

const inactive = "hover:text-orange-400";

const MainNav = ({ open, setOpen }) => {
  return (
    <nav
      className={`
    fixed lg:static inset-0 lg:inset-auto
    bg-white lg:bg-transparent
    flex flex-col items-center justify-center lg:block
    transition-transform duration-0 ease-in-out
    ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
    z-40
  `}
    >
      <ul className="flex flex-col lg:flex-row gap-8 items-center text-lg lg:text-base">
        <li>
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/destinos"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            Destinos
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/sobre"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            Sobre
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contato"
            onClick={() => setOpen(false)}
            className="
              bg-orangep py-2 px-5 rounded-lg text-white uppercase font-bold
              hover:bg-orange-400 transition-all shadow-md active:scale-95
            "
          >
            Solicitar Orçamento
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
