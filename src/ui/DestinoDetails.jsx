const DestinoDetails = ({ destino }) => {
  const {
    Companhia_Aerea,
    Data_de_Retorno,
    Data_de_Saida,
    Descricao,
    Destaque,
    Destino,
    Local_de_Partida,
    Origem,
    Parcelamento,
    Promocao,
    Valor_por_Pessoa,
    Imagem,
  } = destino;

  const API_URL = import.meta.env.VITE_API_URL;

  const imageUrl = Imagem?.url
    ? Imagem.url.startsWith("http")
      ? Imagem.url
      : `${API_URL}${Imagem.url}`
    : "/placeholder.jpg";

  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString("pt-BR") : "---";
  const formatCurrency = (value) =>
    value?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className="max-w-2xl">
      <div className="flex justify-between items-start border-b pb-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{Destino}</h3>
          <p className="text-sm text-gray-500 font-mono">ID: {destino.id}</p>
        </div>
        <div className="flex gap-2">
          {Destaque && (
            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full font-semibold uppercase">
              ⭐ Destaque
            </span>
          )}
          {Promocao && (
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold uppercase">
              🔥 Promoção
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <section>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Logística
            </h4>
            <div className="bg-gray-50 p-3 rounded-lg space-y-2">
              <p className="text-sm">
                <strong>Origem:</strong> {Origem}
              </p>
              <p className="text-sm">
                <strong>Partida:</strong> {Local_de_Partida || "Não informado"}
              </p>
              <p className="text-sm">
                <strong>Cia Aérea:</strong> {Companhia_Aerea}
              </p>
            </div>
          </section>

          <section>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Datas
            </h4>
            <div className="bg-gray-50 p-3 rounded-lg space-y-2 text-sm">
              <p className="flex justify-between">
                <span>Saída:</span>{" "}
                <span className="font-semibold">
                  {formatDate(Data_de_Saida)}
                </span>
              </p>
              <p className="flex justify-between">
                <span>Retorno:</span>{" "}
                <span className="font-semibold">
                  {formatDate(Data_de_Retorno)}
                </span>
              </p>
            </div>
          </section>
        </div>

        <div className="space-y-4">
          <section>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Financeiro
            </h4>
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
              <p className="text-2xl font-bold text-orange-600">
                {formatCurrency(Valor_por_Pessoa)}
              </p>
              <p className="text-xs text-orange-700">
                Até {Parcelamento || "Sem parcelamento informado"} x
              </p>
            </div>
          </section>

          <section>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Sobre o Pacote
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed italic">
              "{Descricao || "Nenhuma descrição disponível."}"
            </p>
          </section>
        </div>
      </div>

      {Imagem && (
        <div className="mt-6">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Imagem de Capa
          </h4>
          <div className="h-46 w-full bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center text-gray-400">
            {/* Se Imagem for uma URL, use <img>, senão mostre placeholder */}
            <p className="text-xs">
              Preview da Imagem:
              <img src={imageUrl} alt={Destino} className="h-full w-full" />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinoDetails;
