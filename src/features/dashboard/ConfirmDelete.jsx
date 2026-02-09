import Button from "../../ui/Button";

const ConfirmDelete = ({ onCloseModal, onConfirm, id, isDeleting }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Confirmar Exclusão</h3>
      <p className="mb-6 text-gray-600">
        Tem certeza que deseja apagar este destino? Esta ação não pode ser
        desfeita.
      </p>

      <div className="flex justify-end gap-3">
        <Button
          variant="secondary"
          onClick={onCloseModal}
          disabled={isDeleting}
        >
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={() => onConfirm(id)}
          disabled={isDeleting}
        >
          {isDeleting ? "Apagando..." : "Apagar"}
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
