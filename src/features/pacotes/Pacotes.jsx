import React, { useState } from "react";
import { usePacotes } from "./usePacotes";
import PacoteCard from "./PacoteCard";
import Button from "../../ui/Button";

const Pacotes = () => {
  const [page, setPage] = useState(1);
  const { pacotes, pagination } = usePacotes(page);

  function handlePrevious() {
    if (page > 1) setPage((prev) => prev - 1);
  }

  function handleNext() {
    if (pagination && page < pagination.pageCount) {
      setPage((prev) => prev + 1);
    }
  }

  if (!pacotes || pacotes.length === 0) {
    return (
      <p className="py-12 text-center text-gray-500">
        Nenhum pacote disponível no momento.
      </p>
    );
  }

  return (
    <div className="space-y-10">
      {/* GRID DE PACOTES */}
      <div className="space-y-6">
        {pacotes.map((pacote) => (
          <PacoteCard key={pacote.id} pacote={pacote} />
        ))}
      </div>

      {/* PAGINAÇÃO */}
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
    </div>
  );
};

export default Pacotes;
