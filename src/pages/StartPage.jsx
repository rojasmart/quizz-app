import {
  Container,
  Card,
  CardBody,
  Stack,
  Text,
  Button,
  VStack,
  Image,
  Box,
} from "@chakra-ui/react";

export default function StartPage() {
  return (
    <>
      <Stack
        direction={["column", "row"]}
        align="center"
        justify="center"
        spacing="44px"
        p="10"
      >
        <Container maxW="lg">
          <Text fontSize="5xl">Welcome to the Frontend Quiz!</Text>
          <Text fontSize="md">Pick a subject to get started</Text>
        </Container>
        <Container maxW="lg">
          <VStack>
            <Card>
              <CardBody>
                <Text>HTML</Text>
              </CardBody>
            </Card>
            <Button size="lg">HTML</Button>
            <Button size="lg">CSS</Button>
            <Button size="lg">Javascript</Button>
            <Button size="lg">Accessibility</Button>
          </VStack>
        </Container>
      </Stack>
    </>
  );
}
