import { Button, VStack, Stack, Container, Text } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getQuiz } from "../services/questions";

const Questions = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const [selectedOption, setSelectedOption] = useState(null);

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
  }, [subject]);

  useEffect(() => {
    setCurrentQuestion(allQuestions[currentQuestionNumber]);
  }, [allQuestions, currentQuestionNumber]);

  const handleOptionClick = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === currentQuestion.answer) {
      alert("Correct Answer");
    } else {
      alert("Wrong Answer");
    }
  };

  const letters = ["A", "B", "C", "D"];

  return (
    <Stack
      direction={["column", "row"]}
      align="center"
      justify="center"
      spacing="44px"
      p="10"
    >
      <Container maxW="lg">
        <Text fontSize="md">
          Question {currentQuestionNumber} of {allQuestions.length}
        </Text>
        {currentQuestion && (
          <Text fontSize="5xl">{currentQuestion.question}</Text>
        )}
      </Container>
      <Container maxW="lg">
        <form onSubmit={(e) => handleSubmit(e)}>
          <VStack spacing={4}>
            <Stack spacing={4} direction="column" w="100%">
              {currentQuestion &&
                currentQuestion.options.map((option, index) => {
                  return (
                    <Button
                      leftIcon={<Text>{letters[index]}</Text>}
                      display={"flex"}
                      justifyContent={"flex-start"}
                      key={index}
                      value={option}
                      onClick={handleOptionClick}
                      p="10"
                    >
                      {option}
                    </Button>
                  );
                })}
            </Stack>
            <Button w="100%" colorScheme="purple" type="submit" p="10">
              Submit Answer
            </Button>
          </VStack>
        </form>
      </Container>
    </Stack>
  );
};

export default Questions;
