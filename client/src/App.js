import React, { useReducer } from "react";
import { Context } from "./appContext";
import reducer, { initialState } from "./store";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="app">fd</div>
    </Context.Provider>
  );
}

export { App };
