import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDestino as deleteDestinoApi } from "../../services/apiDestinations";
import toast from "react-hot-toast";

export const useDeleteDestino = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteDestino, isPending } = useMutation({
    mutationFn: (id) => deleteDestinoApi(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["destinos"], exact: false });

      toast.success("Deletado com sucesso!");

      // alert("Deletado com sucesso!");
    },
    onError: (err) => {
      console.error(err);
      alert("Erro ao deletar: " + err.message);
    },
  });

  return { deleteDestino, isPending };
};
