import NavBar from "@/components/nav";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
