import { useQuery } from "@tanstack/react-query";
import { getDestinos } from "../../services/apiDestinations";

export function useDestinos(page) {
  const { data } = useQuery({
    queryKey: ["destinos", page],
    queryFn: () => getDestinos({ page }),
    keepPreviousData: true,
  });

  return {
    destinos: data?.data,
    pagination: data?.meta.pagination,
  };
}
