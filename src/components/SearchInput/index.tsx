import useGameQueryStore from "@/store";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((e) => e.setSearchText);
  const navgigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchText(inputRef.current?.value || "");
        navgigate("/");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
        <Input
          ref={inputRef}
          borderRadius={20}
          variant={"filled"}
          placeholder="Search Games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
