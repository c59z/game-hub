import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-client";
import genre from "@/data/genre.ts";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll,
    staleTime: ms("24h"),
    initialData: { count: genre.length, results: genre },
  });
// const useGenre = () => useData<Genre>("/genres");

export default useGenre;
