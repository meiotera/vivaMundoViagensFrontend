import { FilePenLine, Search, Trash } from "lucide-react";
import { useDestinos } from "../../hook/useDestinos";
import Table from "../../ui/Table";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import DestinoDetails from "../../ui/DestinoDetails";
import ConfirmDelete from "./ConfirmDelete";

import { useDeleteDestino } from "./useDeleteDestino";
import CreateDestinoForm from "./CreateDestinoForm";

const AdminDestinos = () => {
  const { destinos } = useDestinos();
  const { deleteDestino, isPending } = useDeleteDestino();

  const handleDelete = (id) => {
    deleteDestino(id);
  };

  const formatCurrency = (value) =>
    value?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <Modal>
      <div className="flex justify-end mt-5">
        <Modal.Open opens="destino-form">
          <Button>Adicionar Destino</Button>
        </Modal.Open>
      </div>

      <Modal.Window name="destino-form">
        <CreateDestinoForm />
      </Modal.Window>

      <div className="mt-5">
        <Table>
          <Table.Header>
            <Table.Th>Destino</Table.Th>
            <Table.Th>Origem</Table.Th>
            <Table.Th>Data de saída</Table.Th>
            <Table.Th>Valor</Table.Th>
            <Table.Th>Ações</Table.Th>
          </Table.Header>
          <Table.Body
            data={destinos?.data}
            render={(item) => (
              <Table.Row key={item.id}>
                <Table.Td>{item.Destino}</Table.Td>
                <Table.Td>{item.Origem}</Table.Td>
                <Table.Td>
                  {item.Data_de_Saida
                    ? new Date(item.Data_de_Saida).toLocaleDateString("pt-BR")
                    : "---"}
                </Table.Td>
                <Table.Td>{formatCurrency(item.Valor_por_Pessoa)}</Table.Td>
                <Table.Td>
                  <div className="flex gap-2 justify-center">
                    <Modal.Open opens={`detalhes-${item.id}`}>
                      <span className="cursor-pointer hover:text-blue-500">
                        <Search size={18} />
                      </span>
                    </Modal.Open>

                    <Modal.Window name={`detalhes-${item.id}`}>
                      <DestinoDetails destino={item} />
                    </Modal.Window>

                    <span className="cursor-pointer  hover:text-green-500">
                      <FilePenLine size={18} />
                    </span>

                    <Modal.Open opens={`delete-${item.documentId}`}>
                      <span className="cursor-pointer hover:text-red-500">
                        <Trash size={18} />
                      </span>
                    </Modal.Open>

                    <Modal.Window name={`delete-${item.documentId}`}>
                      <ConfirmDelete
                        onConfirm={handleDelete}
                        id={item.documentId}
                        isDeleting={isPending}
                      />
                    </Modal.Window>
                  </div>
                </Table.Td>
              </Table.Row>
            )}
          />
        </Table>
      </div>
    </Modal>
  );
};

export default AdminDestinos;
