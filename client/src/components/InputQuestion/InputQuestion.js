import React, { useContext, useState } from "react";
import { Context } from "../../appContext";
import { useQuery } from "@apollo/client";
import { LOAD_CATEGORY } from "../../graphQL/Queries";
import { Button, QuestionText } from "..";
import "./InputQuestion.css";

function InputQuestion() {
  const {
    dispatch,
    state: {
      currentCategory,
      currentQuestion,
      changeCount,
      nextQuestion,
      count,
    },
  } = useContext(Context);
  const { data } = useQuery(LOAD_CATEGORY, {
    variables: {
      categoryID: currentCategory,
    },
  });
  const question = data.getCategoryQuestions[currentQuestion];
  const [inputValue, setInputValue] = useState(question.minValue);

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };
  const handleInputAddition = (event) => {
    event.preventDefault();
    if (inputValue < question.maxValue) {
      setInputValue(inputValue + 1);
    }
  };
  const handleInputSubtraction = (event) => {
    event.preventDefault();
    if (inputValue > question.minValue) {
      setInputValue(inputValue - 1);
    }
  };
  const handleAnswer = (event) => {
    event.preventDefault();
    for (let answer of question.answers) {
      if (
        inputValue >= answer.condition.from &&
        inputValue <= answer.condition.to
      ) {
        dispatch(changeCount(question.countModifier, answer.value));
        if (
          count < data.getCategoryQuestions[currentQuestion + 1]?.criticalValue
        ) {
          dispatch(nextQuestion(2));
        } else {
          dispatch(nextQuestion(1));
        }
      }
    }
  };

  return (
    <div className="input-question">
      <QuestionText text={question.text} />
      <div className="input-block">
        <Button onClick={handleInputSubtraction}>-</Button>
        <input
          type="number"
          min={question.minValue}
          max={question.maxValue}
          step={1}
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button onClick={handleInputAddition}>+</Button>
      </div>
      <div className="button-block">
        <Button onClick={handleAnswer}>Ответить</Button>
      </div>
    </div>
  );
}

export { InputQuestion };
