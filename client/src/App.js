import React, { useReducer } from "react";
import { Context } from "./appContext";
import reducer, { initialState } from "./store";
import { TestCard } from "./components";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="app">
        <TestCard />
      </div>
    </Context.Provider>
  );
}

export { App };
