import {
  Container,
  Stack,
  Text,
  VStack,
  Card,
  CardBody,
  HStack,
  Image,
  Box,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

/* import htmlIcon from "../assets/images/icon-html.svg";
import cssIcon from "../assets/images/icon-css.svg";
import javascriptIcon from "../assets/images/icon-js.svg";
import accessibilityIcon from "../assets/images/icon-accessibility.svg"; */

import ToggleColorMode from "../components/ToggleColorMode";

import { getQuiz } from "../services/questions";
import SelectQuestions from "../components/SelectQuestions";

export default function StartPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getQuiz().then((result) => {
      setData(result);
    });
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("category", e.target.value);
    navigate("/questions");
  };

  const pull_category = (category) => {
    console.log(category);
  };

  return (
    <>
      <ToggleColorMode />
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
          <form onSubmit={handleSubmit}>
            <SelectQuestions data={data} getCategory={pull_category} />
          </form>
        </Container>
      </Stack>
    </>
  );
}
