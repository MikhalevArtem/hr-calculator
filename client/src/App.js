import React, { useReducer } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_CATEGORY } from "./graphQL/Queries";
import { Context } from "./appContext";
import reducer, { initialState } from "./store";
import { TestCard, Loader } from "./components";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentCategory } = state;

  const { loading } = useQuery(LOAD_CATEGORY, {
    variables: {
      categoryID: currentCategory,
    },
  });

  return loading ? (
    <Loader />
  ) : (
    <Context.Provider value={{ state, dispatch }}>
      <div className="app">
        <TestCard />
      </div>
    </Context.Provider>
  );
}

export { App };
