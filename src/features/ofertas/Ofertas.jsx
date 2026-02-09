import { useOfertas } from "./useOfertas";
import CardDestino from "../../ui/CardDestino";

const Ofertas = () => {
  const { ofertas } = useOfertas();

  if (!ofertas || ofertas.length === 0) {
    return (
      <p className="w-full items-center text-center py-8 text-gray-500">
        Nenhuma oferta disponível no momento.
      </p>
    );
  }

  return (
    <>
      {ofertas?.length > 0 ? (
        <>
          {ofertas.map((destino) => (
            <CardDestino key={destino.id} destino={destino} />
          ))}
        </>
      ) : (
        <p className="text-center py-8 text-gray-500">
          Nenhuma oferta disponível no momento.
        </p>
      )}
    </>
  );
};

export default Ofertas;
