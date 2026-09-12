import { Box, Button, Container, Heading, Input, VStack, } from "@chakra-ui/react";

import { useState } from "react";

const CreatePage = () => {
  const [newFlash, setNewFlash] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddFlash = async () => {
    console.log(newFlash);
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack gap={8}>
        <Heading
          as={"h1"}
          size={"2xl"}
          textAlign={"center"}
          mb={8}
        >
          Cadastrar novo flash
        </Heading>

        <Box
          w={"full"}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack gap={4}>
            <Input
              placeholder="Nome do flash"
              name="name"
              value={newFlash.name}
              onChange={(e) =>
                setNewFlash({
                  ...newFlash,
                  name: e.target.value,
                })
              }
            />

            <Input
              placeholder="Preço"
              name="price"
              type="number"
               min={0}
              value={newFlash.price}
              onChange={(e) => {
                const value = e.target.value;

                 if (value === "" || Number(value) >= 0) {
                    setNewFlash({
                    ...newFlash,
                     price: value,
                });
              }
              }
             }
            />

            <Input
              placeholder="URL da imagem"
              name="image"
              value={newFlash.image}
              onChange={(e) =>
                setNewFlash({
                  ...newFlash,
                  image: e.target.value,
                })
              }
            />

            <Button
              onClick={handleAddFlash}
              w={"full"}
            >
              Cadastrar flash
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;