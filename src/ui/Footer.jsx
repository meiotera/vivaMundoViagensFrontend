import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white">
      <div className="container mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-4 gap-14">
        {/* Logo / Sobre */}
        <div>
          <Logo />
          <p className="mt-2 text-sm text-orange-100 leading-relaxed">
            Somos uma agência especializada em criar experiências únicas de
            viagem, com destinos nacionais e internacionais pensados para você.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navegação</h3>
          <ul className="space-y-2 text-sm text-orange-100">
            <li>
              <a href="#" className="hover:underline">
                Destinos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sobre nós
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contato</h3>
          <ul className="space-y-3 text-sm text-orange-100">
            <li className="flex items-center gap-2">
              <Phone size={16} /> (11) 99999-9999
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> contato@contato.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> São Paulo - SP
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Siga-nos</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-200 transition-colors">
              <Instagram />
            </a>
            <a href="#" className="hover:text-orange-200 transition-colors">
              <Facebook />
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-orange-400 mt-6 py-4 text-center text-sm text-orange-100">
        <p>&copy; 2025 VivaMundo Viagem. Todos os direitos reservados.</p>
        <p className="mt-1">
          CNPJ: 12.345.678/0001-99 • Atendimento Seg–Sex 08h às 18h
        </p>

        <p className="text-sm text-orange-100">
          Desenvolvido por{" "}
          <NavLink
            to="https://github.com/meiotera"
            target="_blank"
            className="font-semibold text-white hover:text-orange-200 transition-colors"
          >
            Renan Ferreira
          </NavLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
