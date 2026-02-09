import { useQuery } from "@tanstack/react-query";
import { getOfertas } from "../../services/apiDestinations";

export function useOfertas() {
  const {
    data: ofertas,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["ofertas"],
    queryFn: getOfertas,
  });

  return {
    ofertas,
    error,
    isLoading,
  };
}
