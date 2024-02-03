import { START_QUIZ, UPDATE_SCORE, NEXT_QUESTION, RESET } from "./actionsTypes";

const initialState = {
  category: "",
  score: 0,
  currentQuestionNumber: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_QUIZ:
      return {
        ...state,
        category: action.payload,
        icon: action.payload,
        score: 0,
        currentQuestionNumber: 1,
      };
    case UPDATE_SCORE:
      return {
        ...state,
        score: state.score + 1,
        currentQuestionNumber: state.currentQuestionNumber,
      };
    case NEXT_QUESTION:
      return {
        ...state,
        score: state.score,
        currentQuestionNumber: state.currentQuestionNumber + 1,
      };
    case RESET:
      return {
        initialState,
      };
    default:
      return action;
  }
};

export default reducer;
