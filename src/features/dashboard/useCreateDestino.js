import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createDestinoWithImage } from "../../services/apiDestinations";
import toast from "react-hot-toast";

export const useCreateDestino = (onCloseModal) => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      Promocao: false,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (values) => {
      const imageFile = values.Imagem?.[0];

      const sanitizedData = {
        Origem: values.Origem,
        Destino: values.Destino,
        Companhia_Aerea: values.Companhia_Aerea,
        Local_de_Partida: values.Local_de_Partida,
        Descricao: values.Descricao,

        Valor_por_Pessoa: Number(values.Valor_por_Pessoa),
        Valor_Promocional: values.Valor_Promocional
          ? Number(values.Valor_Promocional)
          : null,
        Parcelamento: values.Parcelamento ? Number(values.Parcelamento) : null,

        Promocao: values.Promocao,
        Destaque: values.Destaque,

        Promocao_Inicio: values.Promocao_Inicio
          ? new Date(values.Promocao_Inicio).toISOString()
          : null,
        Promocao_Fim: values.Promocao_Fim
          ? new Date(values.Promocao_Fim).toISOString()
          : null,

        Data_de_Saida: values.Data_de_Saida
          ? new Date(values.Data_de_Saida).toISOString()
          : null,

        Data_de_Retorno: values.Data_de_Retorno
          ? new Date(values.Data_de_Retorno).toISOString()
          : null,
      };

      // remove null
      Object.keys(sanitizedData).forEach((key) => {
        if (sanitizedData[key] === null || sanitizedData[key] === "") {
          delete sanitizedData[key];
        }
      });

      return createDestinoWithImage({
        data: sanitizedData,
        image: imageFile,
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["destinos"] });
      toast.success("Destino criado com sucesso!");
      reset();
      onCloseModal?.();
    },

    onError: (err) => toast.error(err.message),
  });

  return {
    register,
    handleSubmit: handleSubmit((values) => mutate(values)),
    errors,
    isSubmitting: isPending,
    watch,
  };
};
