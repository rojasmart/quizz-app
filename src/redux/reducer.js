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
        score: action + 1,
        currentQuestionNumber: action.currentQuestionNumber,
      };
    case NEXT_QUESTION:
      return {
        subject: action,
        score: action.score,
        currentQuestionNumber: action.currentQuestionNumber + 1,
      };
    default:
      return action;
  }
};

export default reducer;
