import {
  CHANGE_CATEGORY,
  CHANGE_COUNT,
  NEXT_QUESTION,
  CHANGE_COMPLETED_STATUS,
} from "./constants";

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

function changeCompletedStatus() {
  return {
    type: CHANGE_COMPLETED_STATUS,
  };
}

export { changeCategory, changeCount, nextQuestion, changeCompletedStatus };
