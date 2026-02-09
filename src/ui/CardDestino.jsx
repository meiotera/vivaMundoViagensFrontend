import CardBase from "./CardBase";
import { getPrecoDestino } from "../utils/preco";

const CardDestino = ({ destino }) => {
  const { Imagem, Destino, Descricao } = destino;
  const { precoFinal, precoOriginal, isPromocao } = getPrecoDestino(destino);

  const imageUrl = `http://localhost:1337${Imagem.url}`;

  return (
    <CardBase
      imageUrl={imageUrl}
      title={Destino}
      description={Descricao}
      footer={
        <>
          {isPromocao && (
            <p className="text-sm text-gray-400 line-through">
              R$ {precoOriginal.toFixed(2).replace(".", ",")}
            </p>
          )}

          <p className="text-orange-500 font-extrabold text-2xl">
            <span className="text-base font-medium">R$ </span>
            {precoFinal.toFixed(2).replace(".", ",")}
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
