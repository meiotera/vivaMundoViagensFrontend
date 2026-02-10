import CardBase from "./CardBase";
import { getPrecoDestino } from "../utils/preco";

const CardDestino = ({ destino }) => {
  const { Imagem, Destino, Descricao } = destino;
  const { precoFinal, precoOriginal, isPromocao } = getPrecoDestino(destino);
  const API_URL = import.meta.env.VITE_API_URL;

  const formatCurrency = (value) =>
    value?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const imageUrl = Imagem?.url
    ? Imagem.url.startsWith("http")
      ? Imagem.url
      : `${API_URL}${Imagem.url}`
    : "/placeholder.jpg";

  return (
    <CardBase
      imageUrl={imageUrl}
      title={Destino}
      description={Descricao}
      footer={
        <>
          {isPromocao && (
            <p className="text-sm text-gray-400 line-through">
              R$ {formatCurrency(precoOriginal)}
            </p>
          )}

          <p className="text-orange-500 font-extrabold text-2xl">
            {formatCurrency(precoFinal)}
          </p>

          <span className="text-xs text-gray-500">por pessoa</span>

          {isPromocao && (
            <span className="mt-1 inline-block text-xs font-semibold text-white bg-orange-500 px-2 py-1 rounded">
              🔥 Oferta por tempo limitado
            </span>
          )}
        </>
      }
    />
  );
};

export default CardDestino;
