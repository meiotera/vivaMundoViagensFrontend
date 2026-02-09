import { useQuery } from "@tanstack/react-query";
import { getPacotes } from "../../services/apiPacotes";

export function usePacotes(page) {
  const { data } = useQuery({
    queryKey: ["pacotes"],
    queryFn: () => getPacotes({ page }),
    keepPreviousData: true,
  });

  return {
    pacotes: data?.data,
    pagination: data?.meta.pagination,
  };
}
