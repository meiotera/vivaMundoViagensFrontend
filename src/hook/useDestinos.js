import { useQuery } from "@tanstack/react-query";
import { getAllDestinos } from "../services/apiDestinations";
// import { getAllDestinos } from "../../services/apiDestinations";

export function useDestinos() {
  const {
    data: destinos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["destinos"],
    queryFn: getAllDestinos,
  });

  return {
    destinos,
    error,
    isLoading,
  };
}
