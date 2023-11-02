import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

function ResultComponent() {
  const [output, setOutput] = useState('');

  const inputValue = (event) => {
    let currentValue = output;
    if (currentValue === '0') {
      currentValue = event.target.value;
    } else {
      currentValue += event.target.value;
    }
    setOutput(currentValue);
  };

  const clearDisplay = () => {
    setOutput('0');
  };

  const attachOperator = (event) => {
    let valueToDisplay = output + event.target.value;
    // ... (rest of your code)
    setOutput(valueToDisplay);
  };

  const calculate = () => {
    let arithmetic = output;
    if (isNaN(arithmetic.slice(-1))) return;
  
    try {
      // eslint-disable-next-line no-new-func
      const result = Function(`'use strict'; return (${arithmetic})`)();
      setOutput(result);
    } catch (error) {
      setOutput('Error');
    }
  };
  
  const handleDecimal = (event) => {
    let currentValue = output;
    if (currentValue.slice(-1) === '.' || currentValue.match(/(-?\d+\.?\d*)$/)[0].includes('.')) {
      return;
    }
    let newValue = currentValue + event.target.value;
    setOutput(newValue);
  };

  return (
    <div id="calculator">
      <div id="display">{output}</div>
      <ButtonComponent label="0" onClick={inputValue} value="0" />
      <ButtonComponent label="1" onClick={inputValue} value="1" />
      <ButtonComponent label="2" onClick={inputValue} value="2" />
      <ButtonComponent label="3" onClick={inputValue} value="3" />
      <ButtonComponent label="4" onClick={inputValue} value="4" />
      <ButtonComponent label="5" onClick={inputValue} value="5" />
      <ButtonComponent label="6" onClick={inputValue} value="6" />
      <ButtonComponent label="7" onClick={inputValue} value="7" />
      <ButtonComponent label="8" onClick={inputValue} value="8" />
      <ButtonComponent label="9" onClick={inputValue} value="9" />

      <ButtonComponent label="+" onClick={attachOperator} value="+" />
      <ButtonComponent label="-" onClick={attachOperator} value="-" />
      <ButtonComponent label="*" onClick={attachOperator} value="*" />
      <ButtonComponent label="/" onClick={attachOperator} value="/" />
      <ButtonComponent label="=" onClick={calculate} value="=" />
      <ButtonComponent label="C" onClick={clearDisplay} />
      <ButtonComponent label="." onClick={handleDecimal} value="." />
    </div>
  );
}

export default ResultComponent;