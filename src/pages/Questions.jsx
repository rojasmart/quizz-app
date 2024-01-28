import {
  Button,
  VStack,
  Stack,
  Container,
  Text,
  Progress,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getQuiz } from "../services/questions";

import { useDispatch } from "react-redux";

import { NEXT_QUESTION, UPDATE_SCORE } from "../redux/actionsTypes";

import { current } from "@reduxjs/toolkit";

const Questions = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  //class choose answer toggle
  const [isActiveAnswer, setIsActiveAnswer] = useState(false);

  //class correct answer
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  //class wrong answer
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const subject = useSelector((state) => state.category.payload);
  const currentQuestionNumber = useSelector(
    (state) => state.currentQuestionNumber
  );
  const score = useSelector((state) => state.score);

  console.log("score", score);

  const dispatch = useDispatch();

  const handleNextQuestion = () => {
    dispatch({ type: NEXT_QUESTION });
  };

  const handleCorrectAnswer = () => {
    dispatch({ type: UPDATE_SCORE });
  };

  const totalQuestions = allQuestions.length;

  useEffect(() => {
    getQuiz().then((result) => {
      result.forEach((quiz) => {
        if (quiz.title === subject) setAllQuestions(quiz.questions);
      });
    });
  }, [subject]);

  useEffect(() => {
    setCurrentQuestion(allQuestions[currentQuestionNumber]);
    if (currentQuestionNumber === allQuestions.length + 1) {
      alert(`Your score is ${score}`);
    }
  }, [allQuestions, currentQuestionNumber]);

  const handleOptionClick = (e, index) => {
    setSelectedOption(e.target.value);
    setIsActiveAnswer(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === currentQuestion.answer) {
      handleCorrectAnswer();
      setIsCorrectAnswer(true);
      setIsActiveAnswer(false);
    } else {
      isWrongAnswer(true);
    }
  };

  console.log("selected answer", selectedOption);

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
        <Container>
          <Progress value={(currentQuestionNumber / totalQuestions) * 100} />
        </Container>
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
                      onClick={(e) => handleOptionClick(e, index)}
                      className={`
          ${isActiveAnswer === index ? "active-answer" : ""} 
          ${
            selectedOption === currentQuestion.answer &&
            isActiveAnswer &&
            selectedOption === option
              ? "correct-answer"
              : ""
          } 
          ${
            selectedOption !== currentQuestion.answer &&
            selectedOption === option
              ? "wrong-answer"
              : ""
          }
        `}
                      p="10"
                      colorScheme="blue"
                    >
                      {option}
                    </Button>
                  );
                })}
            </Stack>
            {!isCorrectAnswer ? (
              <Button w="100%" colorScheme="purple" type="submit" p="10">
                Submit Answer
              </Button>
            ) : (
              <Button
                w="100%"
                colorScheme="purple"
                type="submit"
                p="10"
                onClick={handleNextQuestion}
              >
                Next Question
              </Button>
            )}
          </VStack>
        </form>
      </Container>
    </Stack>
  );
};

export default Questions;
