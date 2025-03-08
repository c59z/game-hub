import useGameQueryStore from "@/store";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  const sortOrders = [
    { values: "", label: "Relevance" },
    { values: "-added", label: "Date added" },
    { values: "name", label: "Name" },
    { values: "-released", label: "Release date" },
    { values: "-metacritic", label: "Popularity" },
  ];

  const sortOrder = useGameQueryStore((e) => e.gameQuery.sortOrder);

  const setSortOrder = useGameQueryStore((e) => e.setSortOrder);

  const currentSortOrder = sortOrders.find(
    (sort) => sort.values === sortOrder
  )?.label;

  return (
    <Menu placement="bottom-start" closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: {currentSortOrder || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => setSortOrder(sortOrder.values)}
            key={sortOrder.values}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
