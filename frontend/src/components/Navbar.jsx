import { Button, Container, Flex, HStack, Text, } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { FaPenNib } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

import { useColorMode } from "./ui/color-mode";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          >
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Flashs Disponíveis
             </Link>
        </Text>

        <HStack gap={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FaPenNib size={20} />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;