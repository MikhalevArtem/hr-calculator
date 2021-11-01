import React, { useContext } from "react";
import { Loader } from "..";
import { Context } from "../../appContext";
import { useQuery } from "@apollo/client";
import { LOAD_CATEGORY } from "../../graphQL/Queries";
import "./TestCard.css";

function TestCard() {
  const {
    state: { currentCategory, currentQuestion },
  } = useContext(Context);
  const { loading } = useQuery(LOAD_CATEGORY, {
    variables: {
      categoryID: currentCategory,
    },
  });
  if (loading) return <Loader />;
  return <div className="test-card">fd</div>;
}

export { TestCard };
