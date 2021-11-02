import React, { useContext } from "react";
import { Context } from "../../appContext";
import { Button } from "..";
import "./Nonexistent.css";

function Nonexistent() {
  const {
    dispatch,
    state: { changeCategory },
  } = useContext(Context);
  return (
    <div className="nonexistent">
      <p>
        Прости, но такой вакансии пока нет, может на кого-то другого хочешь
        попробоваться?
      </p>
      <div className="button-block">
        <Button onClick={() => dispatch(changeCategory(0))}>Возможно</Button>
      </div>
    </div>
  );
}

export { Nonexistent };
