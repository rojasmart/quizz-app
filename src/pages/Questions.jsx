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

  const handleSubmit = (e) => {
    console.log("submitting answer", e.target.value);
  };

  return (
    <Stack
      direction={["column", "row"]}
      align="center"
      justify="center"
      spacing="44px"
      p="10"
    >
      <Container maxW="lg">
        {currentQuestion && (
          <Text fontSize="5xl">{currentQuestion.question}</Text>
        )}
      </Container>
      <Container maxW="lg">
        <form onSubmit={(e) => handleSubmit(e)}>
          <Stack spacing={4} direction="column">
            {currentQuestion &&
              currentQuestion.options.map((option, index) => {
                return <Button key={index}>{option}</Button>;
              })}
          </Stack>
          <Button type="submit">Submit Answer</Button>
        </form>
      </Container>
    </Stack>
  );
};

export default Questions;
