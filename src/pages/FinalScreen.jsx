import {
  Button,
  HStack,
  Stack,
  Container,
  Text,
  Card,
  Image,
} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RESET } from "../redux/actionsTypes";

export default function FinalScreen() {
  const score = useSelector((state) => state.score);
  const category = useSelector((state) => state.category.category);
  const icon = useSelector((state) => state.icon.icon);

  console.log("icon ending", icon);
  console.log("category ending", category);
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
          <Card minHeight={"400px"} textAlign={"center"}>
            <HStack>
              <Image
                src={icon}
                p="8px"
                borderRadius={"9px"}
                backgroundColor={"white"}
                pt="40px"
                pb="40px"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  gap: "6",
                  borderRadius: "20px",
                  fontSize: "18",
                }}
              />

              <Text fontSize="4xl">{category}</Text>
            </HStack>
            <Text fontSize="170px">{score}</Text>
            <Text fontSize="me">out of 10</Text>
          </Card>
          <Button
            w="100%"
            minH="60px"
            sx={{ backgroundColor: "var(--purple)" }}
            color={"white"}
            onClick={handleReset}
            borderRadius={14}
          >
            Play again
          </Button>
        </Stack>
      </Container>
    </HStack>
  );
}
