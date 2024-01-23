import { Button, Stack, Container, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getQuiz } from "../services/questions";

const Questions = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const subject = useSelector((state) => state.category.payload);
  const currentQuestionNumber = useSelector(
    (state) => state.currentQuestionNumber
  );

  useEffect(() => {
    getQuiz().then((result) => {
      result.forEach((quiz) => {
        if (quiz.title === subject) setAllQuestions(quiz.questions);
      });
    });
  }, []);

  useEffect(() => {
    setCurrentQuestion(allQuestions[currentQuestionNumber]);
  }, [allQuestions, currentQuestionNumber]);

  return (
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
        <Stack spacing={4} direction="column">
          {currentQuestion && <Button>{currentQuestion.question}</Button>}
        </Stack>
      </Container>
    </Stack>
  );
};

export default Questions;
