import {
  CHANGE_CATEGORY,
  CHANGE_COUNT,
  NEXT_QUESTION,
  RESET_TEST,
} from "./constants";

function resetTest() {
  return {
    type: RESET_TEST,
  };
}

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

function nextQuestion(step) {
  return {
    type: NEXT_QUESTION,
    payload: step,
  };
}

export { changeCategory, changeCount, nextQuestion, resetTest };
