import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  const selectedPlatformId = useGameQueryStore((e) => e.gameQuery.platformId);
  const onSelectPlatform = useGameQueryStore((e) => e.setPlatformId);
  const selectedPlatform = data?.results.find(
    (platform) => platform.id === selectedPlatformId
  );

  if (error) return;

  return (
    <Menu placement="bottom-start" closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform?.name ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
