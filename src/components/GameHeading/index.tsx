import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const genreId = useGameQueryStore((e) => e.gameQuery.genreId);
  const { data: genres } = useGenre();
  const genre = genres?.results.find((genre) => genre.id === genreId);

  const platformId = useGameQueryStore((e) => e.gameQuery.platformId);
  const { data: platforms } = usePlatform();
  const platform = platforms?.results.find(
    (platform) => platform.id === platformId
  );

  const searchText = useGameQueryStore((e) => e.gameQuery.searchText);

  const heading = `${platform?.name || ""} ${genre?.name || ""} ${
    searchText || "Games"
  }`;
  return (
    <Heading marginBottom={5} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
