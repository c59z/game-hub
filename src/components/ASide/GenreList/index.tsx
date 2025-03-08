import useGenre from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import useGameQueryStore from "@/store";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();

  const selectedGenreId = useGameQueryStore((e) => e.gameQuery.genreId);

  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <div>
        {data?.results.map((genre) => (
          <List key={genre.id} padding={"5px"}>
            <ListItem>
              <HStack>
                <Image
                  objectFit={"cover"}
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Button
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                  onClick={() => setSelectedGenreId(genre.id)}
                  fontSize="large"
                  variant="link"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          </List>
        ))}
      </div>
    </>
  );
};

export default GenreList;
