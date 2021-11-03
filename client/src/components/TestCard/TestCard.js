import React, { useContext } from "react";
import {
  Nonexistent,
  CategorySelection,
  RadioQuestion,
  InputQuestion,
  Result,
} from "..";
import { Context } from "../../appContext";
import { useQuery } from "@apollo/client";
import { LOAD_CATEGORY } from "../../graphQL/Queries";
import "./TestCard.css";

function TestCard() {
  const {
    state: { currentCategory, currentQuestion, count },
  } = useContext(Context);
  const { data } = useQuery(LOAD_CATEGORY, {
    variables: {
      categoryID: currentCategory,
    },
  });
  if (data.getCategoryQuestions.length === 0) {
    return (
      <div className="test-card">
        <Nonexistent />
      </div>
    );
  }
  if (currentQuestion >= data.getCategoryQuestions.length) {
    return (
      <div className="test-card">
        <Result />
      </div>
    );
  }

  return (
    <div className="test-card">
      {data.getCategoryQuestions[currentQuestion].questionType ===
        "categorySelection" && <CategorySelection />}
      {data.getCategoryQuestions[currentQuestion].questionType === "radio" && (
        <RadioQuestion />
      )}
      {data.getCategoryQuestions[currentQuestion].questionType === "input" && (
        <InputQuestion />
      )}
      count:{count}
    </div>
  );
}

export { TestCard };
