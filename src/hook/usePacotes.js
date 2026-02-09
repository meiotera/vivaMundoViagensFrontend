import { useQuery } from "@tanstack/react-query";
import { getAllPacotes } from "../services/apiPacotes";

export function usePacotes() {
  const {
    data: pacotes,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["pacotes"],
    queryFn: getAllPacotes,
  });

  return {
    pacotes,
    error,
    isLoading,
  };
}
