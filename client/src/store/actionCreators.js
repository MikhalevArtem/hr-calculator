import { CHANGE_CATEGORY, CHANGE_COUNT, NEXT_QUESTION } from "./constants";

function changeCategory(newCategory) {
  return {
    type: CHANGE_CATEGORY,
    payload: newCategory,
  };
}

function changeCount(modifier, value) {
  return {
    type: CHANGE_COUNT,
    payload: { modifier, value },
  };
}

function nextQuestion() {
  return {
    type: NEXT_QUESTION,
  };
}

export { changeCategory, changeCount, nextQuestion };
