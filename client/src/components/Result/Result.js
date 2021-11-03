import React, { useContext } from "react";
import { Button } from "..";
import { Context } from "../../appContext";

function Result() {
  const {
    dispatch,
    state: { count, resetTest },
  } = useContext(Context);

  if (count <= 50) {
    return (
      <div className="result">
        <p>К сожалению, нам с тобой не по пути.</p>
        <Button onClick={() => dispatch(resetTest())}>Ещё разок</Button>
      </div>
    );
  }
  if (count >= 51 && count <= 80)
    return (
      <div className="result">
        <p>Ну если больше никто не придёт, то возьмём тебя.</p>
        <Button onClick={() => dispatch(resetTest())}>Ещё разок</Button>
      </div>
    );
  if (count >= 81 && count <= 100)
    return (
      <div className="result">
        <p>Проверь почту, там уже лежит оффер.</p>
        <Button onClick={() => dispatch(resetTest())}>Ещё разок</Button>
      </div>
    );
}

export { Result };
