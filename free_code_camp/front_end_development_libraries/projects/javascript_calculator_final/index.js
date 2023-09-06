//External Data

//Rendered function

function App() {
  const [display, setDisplay] = React.useState("0");
  const handleNumber = (event) => {
    const number = event.target.textContent;
    if (display === "0") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };
  const handleOperator = (event) => {
    const operator = event.target.textContent;
    setDisplay(`${display} ${operator}`);
  };
  return (
    <div id="container">
      <div className="calculator">
        <div id="display">
          <input type="text" value={display} disabled />
          <div></div>
        </div>
        <div className="buttons" id="clear">
          AC
        </div>
        <div className="buttons" id="divide" onClick={handleNumber}>
          /
        </div>
        <div className="buttons" id="multiply" onClick={handleOperator}>
          *
        </div>
        <div className="buttons numbers" onClick={handleNumber} id="seven">
          7
        </div>
        <div className="buttons numbers" onClick={handleNumber} id="eight">
          8
        </div>
        <div className="buttons numbers" onClick={handleNumber} id="nine">
          9
        </div>
        <div className="buttons" id="subtract" onClick={handleNumber}>
          -
        </div>
        <div className="buttons numbers" onClick={handleNumber} id="four">
          4
        </div>
        <div className="buttons numbers" onClick={handleNumber} id="five">
          5
        </div>
        <div className="buttons numbers" onClick={handleNumber} id="six">
          6
        </div>
        <div className="buttons" id="add">
          +
        </div>
        <div className="buttons numbers" onClick={handleNumber} id="one">
          1
        </div>
        <div className="buttons numbers" onClick={handleNumber} id="two">
          2
        </div>
        <div className="buttons numbers" onClick={handleNumber} id="three">
          3
        </div>
        <div className="buttons" id="equals">
          =
        </div>
        <div className="buttons numbers" id="zero">
          0
        </div>
        <div className="buttons numbers" id="decimal">
          .
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
