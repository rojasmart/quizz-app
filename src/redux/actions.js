import { START_QUIZ, UPDATE_SCORE, NEXT_QUESTION } from "./actionsTypes";

export const handleCategoryChange = (payload) => ({
  type: START_QUIZ,
  payload,
});

export const handleDifficultyChange = (payload) => ({
  type: UPDATE_SCORE,
  payload,
});

export const handleTypeChange = (payload) => ({
  type: NEXT_QUESTION,
  payload,
});
