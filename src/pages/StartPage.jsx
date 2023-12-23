import { Container, Stack, Text, Button, VStack } from "@chakra-ui/react";

export default function StartPage() {
  return (
    <Stack
      direction={["column", "row"]}
      align="center"
      justify="center"
      spacing="44px"
      p="10"
      minH="100vh"
    >
      <Container maxW="lg">
        <Text fontSize="5xl">Welcome to the Frontend Quiz!</Text>
      </Container>
      <Container maxW="lg">
        <VStack>
          <Button size="lg">HTML</Button>
          <Button size="lg">CSS</Button>
          <Button size="lg">Javascript</Button>
          <Button size="lg">four Accessibility</Button>
        </VStack>
      </Container>
    </Stack>
  );
}
