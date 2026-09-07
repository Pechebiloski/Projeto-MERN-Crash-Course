import { Container, Flex, Text, Link, HStack, Button } from "@chakra-ui/react";

const Navbar = () => {
    return (
      <Container maxW={"1140px"} px= {4}>
        <Flex
        h = {16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{
            base: "column",
            sm: "row"
        }}
        >
            <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					 color={"#F5F0E6"}
				>
					<Link to={"/"}>Flashs Disponiveis</Link>
				</Text>

            <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
            <Button>
                
            </Button>
            </Link>


            </HStack>
        </Flex>

      </Container>
    )
};

export default Navbar