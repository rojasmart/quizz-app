import { Button, HStack, Stack, Container, Text, Card } from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RESET } from "../redux/actionsTypes";

export default function FinalScreen() {
  const score = useSelector((state) => state.score);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReset = () => {
    dispatch({ type: RESET });
    navigate("/");
  };

  return (
    <HStack>
      <Container maxW="lg">
        <Text fontSize="6xl">Quiz completed</Text>
        <Text fontSize="6xl" as="b">
          You scored...
        </Text>
      </Container>
      <Container maxW="lg">
        <Stack space="6">
          <Card minHeight={"400px"}>
            <Text fontSize="me">{score} out 10</Text>
          </Card>
          <Button w="100%" minH="60px" colorScheme="pink" onClick={handleReset}>
            Play again
          </Button>
        </Stack>
      </Container>
    </HStack>
  );
}
