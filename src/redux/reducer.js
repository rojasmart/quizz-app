import { START_QUIZ, UPDATE_SCORE, NEXT_QUESTION } from "./actionsTypes";

const initialState = {
  category: "",
  score: 0,
  currentQuestionNumber: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_QUIZ:
      return { ...state, category: action, score: 0, currentQuestionNumber: 0 };
    case UPDATE_SCORE:
      return {
        ...state,
        subject: action,
        score: state.score + 1,
        currentQuestionNumber: state.currentQuestionNumber,
      };
    case NEXT_QUESTION:
      return {
        ...state,
        subject: action,
        score: state.score,
        currentQuestionNumber: state.currentQuestionNumber + 1,
      };
    default:
      return action;
  }
};

export default reducer;
