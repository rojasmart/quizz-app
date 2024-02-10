import {
  Button,
  VStack,
  Stack,
  Container,
  Text,
  Progress,
  Box,
  Image,
  Flex,
  Icon,
} from "@chakra-ui/react";

import { WarningIcon } from "@chakra-ui/icons";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuiz } from "../services/questions";

import { useDispatch, useSelector } from "react-redux";

import { NEXT_QUESTION, UPDATE_SCORE } from "../redux/actionsTypes";

const Questions = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  //class submited answer
  const [isSubmitted, setIsSubmitted] = useState(false);

  //class choose answer toggle
  const [isActiveAnswer, setIsActiveAnswer] = useState(false);

  //class correct answer
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  //class wrong answer
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);

  //check if button is clicked
  const [buttonClicked, setButtonClicked] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const [isNone, setIsNone] = useState(false);

  const [quizFinished, setQuizFinished] = useState(false);

  const subject = useSelector((state) => state.category.category);

  const icon = useSelector((state) => state.icon.icon);

  const currentQuestionNumber = useSelector(
    (state) => state.currentQuestionNumber
  );

  const score = useSelector((state) => state.score);

  const dispatch = useDispatch();

  const handleNextQuestion = () => {
    dispatch({ type: NEXT_QUESTION });
    setIsSubmitted(false);
  };

  const handleCorrectAnswer = () => {
    dispatch({ type: UPDATE_SCORE });
  };

  const totalQuestions = allQuestions.length;
  const navigate = useNavigate();

  useEffect(() => {
    getQuiz().then((result) => {
      result.forEach((quiz) => {
        if (quiz.title === subject) setAllQuestions(quiz.questions);
      });
    });
  }, [subject]);

  useEffect(() => {
    if (allQuestions.length > 0) {
      setCurrentQuestion(allQuestions[currentQuestionNumber - 1]);

      if (currentQuestionNumber > allQuestions.length) {
        setQuizFinished(true);
        navigate("/score");
      }
    }
  }, [allQuestions, currentQuestionNumber]);

  useEffect(() => {
    setButtonClicked(false);
  }, [currentQuestion, isSubmitted]);

  const handleOptionClick = (e, index) => {
    setSelectedOption(e.target.value);
    setIsActiveAnswer(index);
    setButtonClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!buttonClicked) {
      setIsNone(true);
      return;
    } else if (selectedOption === currentQuestion.answer) {
      handleCorrectAnswer();
      setIsCorrectAnswer(true);
      setIsActiveAnswer(false);
      setIsSubmitted(true);
      setButtonClicked(false);
      setIsNone(false);
    } else {
      setIsWrongAnswer(true);
      setIsActiveAnswer(false);
      setIsSubmitted(true);
      setButtonClicked(false);
      setIsNone(false);
    }
  };

  const letters = ["A", "B", "C", "D"];

  return (
    <Stack
      direction={["column", "row"]}
      align="center"
      justify="center"
      spacing="44px"
      p={["5", "10"]}
      flexWrap={"wrap"}
    >
      <Container maxW="lg" h={["320px", "750px"]}>
        <Stack mb={20} w={"100%"}>
          <Flex gap={"8"} justifyContent={"left"}>
            <Image
              src={icon}
              p="8px"
              borderRadius={14}
              backgroundColor={"white"}
            />

            <Text fontSize="4xl">{subject}</Text>
          </Flex>
        </Stack>
        <Text fontSize="xl" as="i">
          Question {currentQuestionNumber} of {allQuestions.length}
        </Text>
        {currentQuestion && (
          <Text fontSize={["3xl", "5xl"]} mt={6}>
            {currentQuestion.question}
          </Text>
        )}

        <Progress
          mt={["60px", "100px"]}
          borderRadius={"20px"}
          value={(currentQuestionNumber / totalQuestions) * 100}
        />
      </Container>
      <Container maxW="lg" pt={140} h={"750px"}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <VStack spacing={4}>
            <Stack spacing={4} direction="column" w="100%">
              {currentQuestion &&
                currentQuestion.options.map((option, index) => {
                  return (
                    <Button
                      sx={{
                        backgroundColor: "var(--pure-white)",
                        color: "var(--dark-navy)",
                      }}
                      _hover={{ backgroundColor: "var(--pure-white) " }}
                      textAlign={"left"}
                      whiteSpace={"normal"}
                      minHeight={"92px"}
                      fontSize={[17, 20]}
                      borderRadius={24}
                      leftIcon={
                        <Box
                          borderRadius={12}
                          sx={{ backgroundColor: "var(--light-gray)" }}
                          color={"black"}
                          pl={5}
                          pr={5}
                          pt={3}
                          pb={3}
                          mr={3}
                        >
                          {letters[index]}
                        </Box>
                      }
                      display={"flex"}
                      type="button"
                      justifyContent={"flex-start"}
                      key={index}
                      value={option}
                      onClick={(e) => handleOptionClick(e, index)}
                      className={`
                                ${
                                  isActiveAnswer === index
                                    ? "active-answer"
                                    : ""
                                } 
                                ${
                                  isSubmitted &&
                                  selectedOption === currentQuestion.answer &&
                                  selectedOption === option
                                    ? "correct-answer"
                                    : ""
                                } 
                                ${
                                  isSubmitted &&
                                  selectedOption !== currentQuestion.answer &&
                                  selectedOption === option
                                    ? "wrong-answer"
                                    : ""
                                }
                                ${
                                  isSubmitted &&
                                  selectedOption !== currentQuestion.answer &&
                                  currentQuestion.answer === option
                                    ? "correct-answer"
                                    : ""
                                }
                              `}
                    >
                      {option}
                    </Button>
                  );
                })}
            </Stack>
            {isSubmitted && (
              <Button
                w="100%"
                colorScheme="purple"
                type="button"
                fontSize={[20, 28]}
                borderRadius={24}
                p="10"
                onClick={handleNextQuestion}
              >
                Next Question
              </Button>
            )}
            {!isSubmitted && (
              <Button
                w="100%"
                sx={{ backgroundColor: "var(--purple)" }}
                _hover={{ backgroundColor: "#c77ef5" }}
                fontSize={[20, 28]}
                borderRadius={24}
                type="submit"
                p="10"
                color={"white"}
              >
                Submit Answer
              </Button>
            )}
            {!buttonClicked && isNone && (
              <Flex gap={3} alignItems={"center"}>
                <Icon as={WarningIcon} color={"red"} />
                <Text color={"red"}>
                  Please click a button before submitting.
                </Text>
              </Flex>
            )}
          </VStack>
        </form>
      </Container>
    </Stack>
  );
};

export default Questions;
