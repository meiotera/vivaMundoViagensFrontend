import { useState } from "react";
import { useDestinos } from "./useDestinos";
import BannerDestino from "./BannerDestino";
import Button from "../../ui/Button";

const Destinos = () => {
  const [page, setPage] = useState(1);
  const { destinos, pagination } = useDestinos(page);

  function handlePrevious() {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  }

  function handleNext() {
    if (pagination && page < pagination.pageCount) {
      setPage((prev) => prev + 1);
    }
  }

  if (!destinos || destinos.length === 0) {
    return (
      <p className="text-center py-8 text-gray-500">
        Nenhum destino disponível no momento.
      </p>
    );
  }

  return (
    <>
      {destinos?.length > 0 ? (
        <div className="flex flex-col gap-6">
          {destinos.map((destino) => (
            <BannerDestino key={destino.id} destino={destino} />
          ))}
        </div>
      ) : (
        <p>Nenhuma oferta disponível no momento.</p>
      )}

      {pagination && pagination.pageCount > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          <Button onClick={handlePrevious} disabled={page === 1}>
            Anterior
          </Button>
          <span className="self-center">
            Página {pagination.page} de {pagination.pageCount}
          </span>
          <Button
            onClick={handleNext}
            disabled={!pagination || page === pagination.pageCount}
          >
            Próximo
          </Button>
        </div>
      )}
    </>
  );
};

export default Destinos;
