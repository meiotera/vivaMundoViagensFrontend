import { getPrecoDestino } from "../utils/preco";
import Button from "./Button";

const CardViagem = ({ destino, ctaText = "Ver detalhes", onCtaClick }) => {
  const {
    Companhia_Aerea,
    Data_de_Retorno,
    Data_de_Saida,
    Descricao,
    Destino,
    Origem,
    Parcelamento,
    Imagem,
  } = destino;

  const { precoFinal, precoOriginal, isPromocao } = getPrecoDestino(destino);

  const imageUrl = Imagem?.url ? `http://localhost:1337${Imagem.url}` : null;

  const formatCurrency = (value) =>
    value?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <>
      {/* IMAGEM */}
      {imageUrl && (
        <div className="h-56 w-full md:h-auto md:w-1/3">
          <img
            src={imageUrl}
            alt={Destino}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {/* CONTEÚDO */}
      <div className="flex w-full flex-col justify-between p-5">
        {/* TOPO */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">{Destino}</h2>

          {Origem && (
            <p className="text-sm text-gray-500">
              Saindo de <span className="font-medium">{Origem}</span>
            </p>
          )}

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {Data_de_Saida && <span>🛫 {Data_de_Saida}</span>}
            {Data_de_Retorno && <span>🛬 {Data_de_Retorno}</span>}
            {Companhia_Aerea && <span>✈️ {Companhia_Aerea}</span>}
          </div>

          {Descricao && (
            <p className="pt-2 text-sm leading-relaxed text-gray-500">
              {Descricao}
            </p>
          )}
        </div>

        {/* RODAPÉ */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          {/* PREÇO */}
          <div>
            <p className="text-xs text-gray-500">A partir de</p>

            <p className="text-2xl font-bold text-emerald-600">
              R${" "}
              {isPromocao
                ? formatCurrency(precoFinal)
                : formatCurrency(precoOriginal)}
              {Parcelamento && (
                <span className="ml-2 text-xs font-normal text-gray-500">
                  até {Parcelamento}x
                </span>
              )}
            </p>

            <p className="mt-2 text-xs text-gray-400">
              Valores sujeitos a alteração
            </p>
          </div>

          {/* CTA */}
          <Button variant="success" onClick={onCtaClick}>
            {ctaText}
          </Button>
        </div>
      </div>

      {/* BADGE PROMO */}
      {isPromocao && (
        <span className="absolute right-3 top-3 rounded bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
          Promoção
        </span>
      )}
    </>
  );
};

export default CardViagem;
