import { useState } from "react";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="mt-5">
      <h1 className="text-center">FCC: Javascript Calculator</h1>
      <Calculator />
    </Container>
  );
}

export default App;

function Calculator() {
  const [formula, setFormula] = useState("");
  const [current, setCurrent] = useState("0");
  const [prevVal, setPrevVal] = useState("");
  const [evaluated, setEvaluated] = useState(false);

  const clear = () => {
    setFormula("");
    setCurrent("");
    setPrevVal("");
    setEvaluated(false);
  };

  type evalInput =
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "0"
    | "/"
    | "*"
    | "-"
    | "+"
    | ".";

  const input = (x: evalInput) => {
    if (evaluated) {
      setPrevVal(current);
      setCurrent(x);
      setFormula(prevVal + x);
      setEvaluated(false);
      return;
    }
    // TODO: Operand überschreiben oder zahl negieren, wenn minus oder weiter anhängen, wenn kein operand
    if (x === "*" || x === "+" || x === "/") {
      setFormula((prev) => prev + x);
      setCurrent(x);
      return;
    } else {
      setFormula((prev) => prev + x);
      setCurrent((prev) => prev + x);
    }
  };

  const calculate = () => {
    // TODO: zusammenrechnen von dem Zeug
    console.log("formula", formula);
    console.log("current", current);
    console.log("prevVal", prevVal);
    console.log("evaluated", evaluated);
  };

  return (
    <Container fluid="sm">
      <div className="parent">
        <div className="div1 text-end">
          {formula} <br />
          <span id="display">{current}</span>
        </div>
        <button
          className="div2"
          id="clear"
          onClick={clear}>
          AC
        </button>
        <button
          className="div3"
          onClick={() => input("/")}
          id="divide">
          /
        </button>
        <button
          className="div4"
          onClick={() => input("*")}
          id="multiply">
          x
        </button>
        <button
          className="div8"
          onClick={() => input("-")}
          id="subtract">
          -
        </button>
        <button
          className="div9"
          onClick={() => input("+")}
          id="add">
          +
        </button>
        <button
          className="div18"
          onClick={calculate}
          id="equals">
          =
        </button>
        <button
          className="div16"
          onClick={() => input(".")}
          id="decimal">
          .
        </button>
        <button
          className="div7"
          onClick={() => input("9")}
          id="nine">
          9
        </button>
        <button
          className="div6"
          onClick={() => input("8")}
          id="eight">
          8
        </button>
        <button
          className="div5"
          onClick={() => input("7")}
          id="seven">
          7
        </button>
        <button
          className="div10"
          onClick={() => input("6")}
          id="six">
          6
        </button>
        <button
          className="div11"
          onClick={() => input("5")}
          id="five">
          5
        </button>
        <button
          className="div12"
          onClick={() => input("4")}
          id="four">
          4
        </button>
        <button
          className="div15"
          onClick={() => input("3")}
          id="three">
          3
        </button>
        <button
          className="div14"
          onClick={() => input("2")}
          id="two">
          2
        </button>
        <button
          className="div13"
          onClick={() => input("1")}
          id="one">
          1
        </button>
        <button
          className="div17"
          onClick={() => input("0")}
          id="zero">
          0
        </button>
      </div>
    </Container>
  );
}
