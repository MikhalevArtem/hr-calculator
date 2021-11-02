import React, { useContext } from "react";
import { QuestionText, Button } from "..";
import { Context } from "../../appContext";
import { useQuery } from "@apollo/client";
import { LOAD_CATEGORY } from "../../graphQL/Queries";
import "./RadioQuestion.css";

function RadioQuestion() {
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

  return (
    <div className="radio-question">
      <QuestionText text={question.text} />

      {data.getCategoryQuestions[currentQuestion].answers.map((answer) => (
        <div className="btn" key={answer.text}>
          <Button
            onClick={(e) => {
              e.preventDefault();
              dispatch(changeCount(question.countModifier, answer.value));
              if (
                count <
                data.getCategoryQuestions[currentQuestion + 1]?.criticalValue
              ) {
                dispatch(nextQuestion(2));
              } else {
                dispatch(nextQuestion(1));
              }
            }}
          >
            {answer.text}
          </Button>
        </div>
      ))}
    </div>
  );
}

export { RadioQuestion };
