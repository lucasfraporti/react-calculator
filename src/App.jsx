import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button";

import { Container, Content, Row } from "./Styles";

import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  // Limpando
  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  // Adicionar números no visor
  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  // Função de adição
  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(sum.toString());
      setFirstNumber("0");
    }
  };

  // Função de subtração
  const handleSubtractionNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const subtraction = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(subtraction.toString());
      setOperation("");
    }
  };

  // Função de multiplicação
  const handleMultiplyNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(multiply.toString());
      setOperation("");
    }
  };

  // Função de divisão
  const handleDivideNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const multiply = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(multiply.toString());
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;

        case "-":
          handleSubtractionNumbers();
          break;

        case "*":
          handleMultiplyNumbers();
          break;

        case "/":
          handleDivideNumbers();
          break;

        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={"C"} onClick={handleOnClear} />
          <Button label={"/"} onClick={handleDivideNumbers} />
          <Button label={"*"} onClick={handleMultiplyNumbers} />
        </Row>

        <Row>
          <Button label={7} onClick={() => handleAddNumber("7")} />
          <Button label={8} onClick={() => handleAddNumber("8")} />
          <Button label={9} onClick={() => handleAddNumber("9")} />
          <Button label={"-"} onClick={handleSubtractionNumbers} />
        </Row>
        <Row>
          <Button label={4} onClick={() => handleAddNumber("4")} />
          <Button label={5} onClick={() => handleAddNumber("5")} />
          <Button label={6} onClick={() => handleAddNumber("6")} />
          <Button label={"+"} onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label={1} onClick={() => handleAddNumber("1")} />
          <Button label={2} onClick={() => handleAddNumber("2")} />
          <Button label={3} onClick={() => handleAddNumber("3")} />
          <Button label={"="} onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
