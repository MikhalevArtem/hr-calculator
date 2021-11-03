import React, { useContext } from "react";
import { QuestionText, Button } from "..";
import { Context } from "../../appContext";
import { useQuery } from "@apollo/client";
import { LOAD_CATEGORY } from "../../graphQL/Queries";
import "./CategorySelection.css";

function CategorySelection() {
  const {
    dispatch,
    state: { currentCategory, currentQuestion, changeCategory },
  } = useContext(Context);
  const { data } = useQuery(LOAD_CATEGORY, {
    variables: {
      categoryID: currentCategory,
    },
  });
  const question = data.getCategoryQuestions[currentQuestion];
  return (
    <div className="category-selection">
      <QuestionText text={question.text} />
      {data.getCategoryQuestions[currentQuestion].answers.map((answer) => (
        <div className="btn" key={answer.text}>
          <Button
            onClick={(e) => {
              e.preventDefault();
              dispatch(changeCategory(answer.value));
            }}
          >
            {answer.text}
          </Button>
        </div>
      ))}
    </div>
  );
}

export { CategorySelection };
