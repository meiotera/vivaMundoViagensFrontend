import { useQuery } from "@tanstack/react-query";
import { getDestaques } from "../../services/apiDestinations";

export function useDestaques() {
  const {
    data: destaques,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["destaques"],
    queryFn: getDestaques,
  });

  return {
    destaques,
    error,
    isLoading,
  };
}