function App() {
  const [quote, setQuote] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");
  const [color, setColor] = React.useState("#000");
  React.useEffect(() => {
    async function getQuote() {
      //const apiURL = "https://api.quotable.io/random";
      // const response = await fetch(apiURL);
      // const data = await response.json();
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuote(data);
      let randIndex = Math.floor(Math.random() * data.length);
      //setRandomQuote(data);
      setRandomQuote(data[randIndex]);
    }
    getQuote();
  }, []);

  const getNewQuote = () => {
    const color = [
      "#FF9B50",
      "#0E21A0",
      "#9A3B3B",
      "#040D12",
      "#141E46",
      "#352F44",
      "#E19898",
      "#A2678A",
    ];
    let randIndex = Math.floor(Math.random() * quote.length);
    let colorIndex = Math.floor(Math.random() * color.length);
    setRandomQuote(quote[randIndex]);
    setColor(color[colorIndex]);
  };

  return (
    <div style={{ background: color, minHeight: "100vh" }}>
      <div className="container">
        <div className="container">
          <h1>Random Quotes</h1>
          {randomQuote ? (
            <>
              <h5>{randomQuote.author.split(",")[0] || "no author"}</h5>
              <p>{`"${randomQuote.text}"`}</p>
            </>
          ) : (
            <h2>Loading</h2>
          )}
          <div>
            <button onClick={getNewQuote} className="btn btn-info">
              New Quote
            </button>
            <a
              href={
                "https://twitter.com/intent/tweet?hashtags=quotes&related=legitDeveloper&text=" +
                encodeURIComponent(
                  '"' + randomQuote.text + '" ' + randomQuote.author
                )
              }
              target="_blank"
              className="btn btn-primary"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a href="" target="_blank" className="btn btn-warning">
              <i className="fa fa-tumblr"></i>
            </a>
            <button className="btn btn-warning">Check</button>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
