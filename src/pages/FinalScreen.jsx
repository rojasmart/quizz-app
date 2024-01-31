import { Button, Stack, Container, Text } from "@chakra-ui/react";

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
    <Stack>
      <Container maxW="lg">
        <Text fontSize="me">Quiz completed, You scored...</Text>
      </Container>
      <Container maxW="lg">
        <Text fontSize="me">You scored... {score}</Text>
        <Button onClick={handleReset}>Play again</Button>
      </Container>
    </Stack>
  );
}
