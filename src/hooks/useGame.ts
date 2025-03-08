import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.getOne(slug),
  });

export default useGame;
