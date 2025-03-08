import { Screenshot } from "@/entities/Screenshot";
import useScreenshot from "@/hooks/useScreenshot";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshot(gameId);
  if (isLoading) return null;
  if (error) throw error;
  if (!data) return null;
  const gameScreenShots = data.results;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {gameScreenShots.map((shots) => (
        <Image key={shots.id} src={shots.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
