import { Globe, Plane, HeartHandshake, Star } from "lucide-react";
import Section from "../../ui/Section";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Hero */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Sobre a <span className="text-orangep">VivaMundo Viagens</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Conectamos pessoas a experiências inesquecíveis ao redor do mundo,
            com planejamento inteligente, preços justos e atendimento humano.
          </p>
        </div>
      </Section>

      {/* Quem somos */}
      <Section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Quem somos
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A VivaMundo Viagens é uma agência de turismo fictícia criada com o
            propósito de oferecer soluções completas para quem deseja viajar com
            tranquilidade. Atuamos com destinos nacionais e internacionais,
            sempre focados em qualidade, transparência e conforto.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nosso time é apaixonado por viagens e tecnologia, unindo experiência
            no setor turístico com ferramentas modernas para entregar a melhor
            experiência ao cliente.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center text-center">
            <Globe className="text-orangep" size={36} />
            <p className="mt-2 font-semibold">+40 destinos</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Plane className="text-orangep" size={36} />
            <p className="mt-2 font-semibold">Parcerias aéreas</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <HeartHandshake className="text-orangep" size={36} />
            <p className="mt-2 font-semibold">Atendimento humano</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Star className="text-orangep" size={36} />
            <p className="mt-2 font-semibold">Alta satisfação</p>
          </div>
        </div>
      </Section>

      {/* Missão, Visão, Valores */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Missão</h3>
            <p className="text-gray-600">
              Proporcionar viagens seguras, acessíveis e memoráveis, cuidando de
              cada detalhe para que o cliente aproveite o melhor de cada
              destino.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Visão</h3>
            <p className="text-gray-600">
              Ser referência em inovação no turismo, reconhecida pela confiança,
              excelência no atendimento e experiências personalizadas.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Valores</h3>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Transparência</li>
              <li>Compromisso com o cliente</li>
              <li>Paixão por viajar</li>
              <li>Inovação constante</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Pronto para viver sua próxima aventura?
        </h2>
        <p className="mt-3 text-gray-600">
          Descubra destinos incríveis e planeje sua viagem com quem entende do
          assunto.
        </p>
        <NavLink
          to="/destinos"
          className="inline-block mt-6 bg-orangep text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 transition"
        >
          Ver Destinos
        </NavLink>
      </Section>
    </>
  );
};

export default About;
