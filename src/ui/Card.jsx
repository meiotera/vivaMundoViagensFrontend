import Heading from "./Heading";
import { getPrecoDestino } from "../utils/preco";

const Card = ({ destino, width = "min-w-64" }) => {
  const { Imagem, Destino, Descricao } = destino;

  const { precoFinal, precoOriginal, isPromocao } = getPrecoDestino(destino);

  const imageUrl = `http://localhost:1337${Imagem.url}`;

  return (
    <div
      className={`flex flex-col ${width} rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer`}
    >
      {/* Imagem */}
      <div className="w-full h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={Destino}
        />
      </div>

      {/* Conteúdo */}
      <div className="p-4 flex flex-col flex-grow">
        <Heading tag="h3">{Destino}</Heading>

        <p className="text-gray-600 text-sm mb-4">{Descricao}</p>

        {/* Preço */}
        <div className="mt-auto">
          {isPromocao && (
            <p className="text-sm text-gray-400 line-through">
              R$ {precoOriginal.toFixed(2).replace(".", ",")}
            </p>
          )}

          <p className="text-orange-500 font-extrabold text-2xl">
            <span className="text-base font-medium align-top">R$ </span>
            {precoFinal.toFixed(2).replace(".", ",")}
          </p>

          <span className="text-xs text-gray-500">por pessoa</span>

          {isPromocao && (
            <span className="mt-1 inline-block text-xs font-semibold text-white bg-orange-500 px-2 py-1 rounded">
              🔥 Oferta por tempo limitado
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
