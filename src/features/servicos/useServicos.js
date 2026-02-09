import { useQuery } from "@tanstack/react-query";
import { getServicos } from "../../services/apiServicos";

export function useServicos() {
  const {
    data: servicos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["servicos"],
    queryFn: getServicos,
  });

  return {
    servicos,
    error,
    isLoading,
  };
}
