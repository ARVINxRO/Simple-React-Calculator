import React from "react";
import Button from "./Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
const ButtonBox = () => {
  return (
    <div className="buttonBox">
      {btnValues.flat().map((btn, i) => (
        <Button value={btn} key={i} />
      ))}
    </div>
  );
};

export default ButtonBox;
