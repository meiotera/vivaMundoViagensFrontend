import GridDestaque from "../../ui/GridDestaque";
import { useDestaques } from "./useDestaques";

const Destaques = () => {
  const { destaques } = useDestaques();

  if (!destaques || destaques.length === 0) {
    return (
      <p className="w-full items-center text-center py-8 text-gray-500">
        Nosos destaques
      </p>
    );
  }

  return (
    <>
      {destaques.length > 0 ? (
        destaques.map((destino, index) => (
          <GridDestaque key={destino.id} destino={destino} index={index} />
        ))
      ) : (
        <p className="text-center py-8 text-gray-500">
          Nenhum destaque disponível no momento.
        </p>
      )}
    </>
  );
};

export default Destaques;
