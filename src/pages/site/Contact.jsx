import { Mail, Phone, MapPin, Send } from "lucide-react";
import Section from "../../ui/Section";

const Contact = () => {
  return (
    <Section className="pt-10 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Entre em Contato
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tem dúvidas, deseja um orçamento ou quer planejar a sua próxima
            viagem? Fale com a gente, será um prazer te atender.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orangep text-white rounded-lg">
                <Phone />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Telefone / WhatsApp
                </h3>
                <p className="text-gray-600">(84) 9 9999-9999</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-orangep text-white rounded-lg">
                <Mail />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">E-mail</h3>
                <p className="text-gray-600">contato@vivamundoviagens.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-orangep text-white rounded-lg">
                <MapPin />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Endereço</h3>
                <p className="text-gray-600">
                  Av. das Viagens, 123 – Centro
                  <br />
                  Mossoró/RN
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h4 className="font-bold text-gray-800 mb-2">
                Horário de Atendimento
              </h4>
              <p className="text-gray-600">Segunda a Sexta: 08h às 18h</p>
              <p className="text-gray-600">Sábado: 08h às 12h</p>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white p-8 rounded-xl shadow-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                placeholder="Seu nome completo"
                className="w-full mt-1 p-2 border rounded-md focus:ring-orangep focus:border-orangep"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full mt-1 p-2 border rounded-md focus:ring-orangep focus:border-orangep"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                rows="4"
                placeholder="Conte pra gente como podemos ajudar"
                className="w-full mt-1 p-2 border rounded-md focus:ring-orangep focus:border-orangep"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-orangep text-white py-3 rounded-lg font-bold hover:bg-orange-400 transition-all"
            >
              <Send size={18} /> Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
