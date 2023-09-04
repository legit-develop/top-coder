function App() {
  const [expression, setExpression] = React.useState("");
  const [result, setResult] = React.useState(0);
  const compute = (symbol) => {
    setExpression((prev) => prev + symbol);
    if (expression[expression.length - 1] == "=") {
      if (/[0-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(result + symbol);
      }
    }
  };

  const calculate = () => {
    setResult(eval(expression));
    setExpression((prev) => prev + ` = `);
  };

  const allClear = () => {
    setExpression("");
    setResult(0);
  };

  return (
    <div id="container">
      <div className="calculator">
        <div id="display">
          <input type="text" value={expression} placeholder="0" disabled />
          <div className="total">{result}</div>
        </div>
        <div onClick={allClear} className="buttons" id="clear">
          AC
        </div>
        <div onClick={() => compute("/")} className="buttons" id="divide">
          /
        </div>
        <div onClick={() => compute("*")} className="buttons" id="multiply">
          *
        </div>
        <div
          onClick={() => compute("7")}
          className="buttons numbers"
          id="seven"
        >
          7
        </div>
        <div
          onClick={() => compute("8")}
          className="buttons numbers"
          id="eight"
        >
          8
        </div>
        <div onClick={() => compute("9")} className="buttons numbers" id="nine">
          9
        </div>
        <div onClick={() => compute("-")} className="buttons" id="subtract">
          -
        </div>
        <div onClick={() => compute("4")} className="buttons numbers" id="four">
          4
        </div>
        <div onClick={() => compute("5")} className="buttons numbers" id="five">
          5
        </div>
        <div onClick={() => compute("6")} className="buttons numbers" id="six">
          6
        </div>
        <div onClick={() => compute("+")} className="buttons" id="add">
          +
        </div>
        <div onClick={() => compute("1")} className="buttons numbers" id="one">
          1
        </div>
        <div onClick={() => compute("2")} className="buttons numbers" id="two">
          2
        </div>
        <div
          onClick={() => compute("3")}
          className="buttons numbers"
          id="three"
        >
          3
        </div>
        <div onClick={calculate} className="buttons" id="equals">
          =
        </div>
        <div onClick={compute} className="buttons numbers" id="zero">
          0
        </div>
        <div
          onClick={() => compute(".")}
          className="buttons numbers"
          id="decimal"
        >
          .
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
