import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
const getBtnStyle = (btn) => {
  const className = {
    "=": "equals",
    "*": "opt",
    "+": "opt",
    "-": "opt",
    "/": "opt",
  };
  return className[btn];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);
  //USER CLICK COMMA
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };
  //USER CLICK CLEAR
  const resetClick = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
  };
  //USER CLICK NUMBER
  const numberClick = () => {
    const numberString = value.toString();
    let numberValue;
    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }
    setCalc({
      ...calc,
      num: numberValue,
    });
  };
  //USER CLICK SIGN
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };
  //USER CLICK Percent
  const percentClick = () => {
    setCalc({
      sign: "",
      res: calc.res / 100,
      num: calc.num / 100,
    });
  };
  //USER CLICK INVERT
  const invertClick = () => {
    setCalc({
      sign: "",
      res: calc.res ? calc.res * -1 : 0,
      num: calc.num ? calc.num * -1 : 0,
    });
  };
  //USER CLICK EQUAL
  const equalClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          "*": (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  const handleBtn = () => {
    const results = {
      ".": commaClick,
      C: resetClick,
      "*": signClick,
      "/": signClick,
      "+": signClick,
      "-": signClick,
      "=": equalClick,
      "%": percentClick,
      "+-": invertClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return numberClick();
    }
  };
  return (
    <button onClick={handleBtn} className={`${getBtnStyle(value)} button`}>
      {value}
    </button>
  );
};

export default Button;
