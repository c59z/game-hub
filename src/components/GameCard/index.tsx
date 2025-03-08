import { Game } from "@/entities/Game";
import { Card, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "../PlatformIconList";
import CriticScore from "../CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "../Emoji";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card width="300px" borderRadius={10} overflow={"hidden"}>
      <img src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((item) => item.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={"2xl"}>
          <Link to={"/games/" + game.slug}>{game.name}</Link>

          <Emoji rating={game.rating_top}></Emoji>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
