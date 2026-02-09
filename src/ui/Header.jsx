import { NavLink } from "react-router-dom";
import { useState } from "react";
import MainNav from "./MainNav";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white px-6 md:px-8 h-30 md:h-30 flex items-center justify-center shadow-sm fixed w-full z-50">
      <div className="container flex items-center justify-between">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <Logo />
        </NavLink>

        {/* Botão Mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-orangep z-99"
          aria-label="Abrir menu"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Menu */}
        <MainNav open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Header;
