import React from "react";
import "./Button.css";

function Button({ children, ...rest }) {
  return (
    <button className="stylized-button" {...rest}>
      {children}
    </button>
  );
}

export { Button };
