import {
  CHANGE_COUNT,
  CHANGE_CATEGORY,
  NEXT_QUESTION,
  RESET_TEST,
} from "./constants";
import {
  changeCategory,
  changeCount,
  nextQuestion,
  resetTest,
} from "./actionCreators";

function addition(currentCount, value) {
  const result = currentCount + value;
  if (result < 0) {
    return 0;
  } else if (result > 100) {
    return 100;
  } else {
    return result;
  }
}

function multiplication(currentCount, value) {
  const result = currentCount * value;
  if (result < 0) {
    return 0;
  } else if (result > 100) {
    return 100;
  } else {
    return result;
  }
}

const initialState = {
  currentCategory: 0,
  currentQuestion: 0,
  count: 0,
  changeCategory,
  changeCount,
  nextQuestion,
  resetTest,
};

function reducer(state, action) {
  switch (action.type) {
    case RESET_TEST:
      return {
        ...state,
        currentCategory: 0,
        currentQuestion: 0,
        count: 0,
      };
    case CHANGE_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
        currentQuestion: 0,
      };
    case CHANGE_COUNT:
      if (action.payload.modifier === "addition") {
        return {
          ...state,
          count: addition(state.count, action.payload.value),
        };
      } else if (action.payload.modifier === "multiplication") {
        return {
          ...state,
          count: multiplication(state.count, action.payload.value),
        };
      }
      return state;
    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
export { initialState };
