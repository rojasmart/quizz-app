import { Button, Stack, Container, Text } from "@chakra-ui/react";

import { useSelector } from "react-redux";

export default function FinalScreen() {
  const score = useSelector((state) => state.score);

  return (
    <Stack>
      <Container maxW="lg">
        <Text fontSize="me">Quiz completed, You scored...</Text>
      </Container>
      <Container maxW="lg">
        <Text fontSize="me">You scored... {score}</Text>
        <Button>Play again</Button>
      </Container>
    </Stack>
  );
}
