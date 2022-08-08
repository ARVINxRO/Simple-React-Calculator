import React from "react";
import ButtonBox from "./components/ButtonBox";
import Screen from "./components/Screen";
import CalcProvider from "./context/CalcContext";

const App = () => {
  return (
    <CalcProvider>
      <div className="container">
        <Screen />
        <ButtonBox />
      </div>
    </CalcProvider>
  );
};

export default App;
