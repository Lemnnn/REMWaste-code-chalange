import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../query-keys";
import { getData } from "../services/data";

export function useGetData() {
  return useQuery({
    queryFn: () => getData(),
    queryKey: [QUERY_KEYS.GET_DATA],
    refetchOnWindowFocus: false,
    retry: false,
  });
}
