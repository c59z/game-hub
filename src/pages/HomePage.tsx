import GenreList from "@/components/ASide/GenreList";
import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import PlatformSelector from "@/components/PlatformSelector.ts";
import SortSelector from "@/components/SortSelector";
import { Grid, GridItem, HStack, useBreakpointValue } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {useBreakpointValue({ base: false, lg: true }) && (
        <GridItem area="aside" paddingX="5px">
          <GenreList></GenreList>
        </GridItem>
      )}
      <GridItem area="main">
        <GameHeading></GameHeading>
        <HStack spacing={5} paddingLeft={10} marginBottom={2}>
          <PlatformSelector></PlatformSelector>
          <SortSelector></SortSelector>
        </HStack>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
