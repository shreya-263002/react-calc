import React, { useState } from 'react';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import './App.css';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      reset();
    } else if (value === "+-") {
      invert();
    } else if (value === "%") {
      percent();
    } else {
      setCalc(calc + value);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(calc.replace("X", "*")));
    } catch (error) {
      setResult("Error");
    }
  };

  const reset = () => {
    setCalc("");
    setResult("");
  };

  const invert = () => {
    setCalc((prev) => (prev.charAt(0) === "-" ? prev.substring(1) : "-" + prev));
  };

  const percent = () => {
    setCalc((prev) => (parseFloat(prev) / 100).toString());
  };

  return (
    <Wrapper>
    
      <Screen value={result || calc || "0"} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={() => handleClick(btn)}
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
