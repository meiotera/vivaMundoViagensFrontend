import { useDestinos } from "../../hook/useDestinos";
import { usePacotes } from "../../hook/usePacotes";

const Dash = () => {
  const { destinos } = useDestinos();
  const { pacotes } = usePacotes();

  // Garante que a contagem seja numérica e segura
  const destinosQtd = destinos?.data?.length || 0;
  const pacotesQtd = pacotes?.data?.length || 0;

  return (
    <div className="flex">
      {/* CONTEÚDO CENTRALIZADO */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-6">
          {/* CARD DE CONTAGEM */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Total de Destinos
            </h2>
            <p className="text-5xl font-black text-blue-600 mt-2">
              {destinosQtd}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-6">
          {/* CARD DE CONTAGEM */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Total de Pacotes
            </h2>
            <p className="text-5xl font-black text-blue-600 mt-2">
              {pacotesQtd}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
