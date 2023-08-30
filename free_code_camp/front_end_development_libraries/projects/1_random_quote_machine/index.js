function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuotes, setRandomQuotes] = React.useState([]);
  const apiURL = "https://api.quotable.io/random";
  React.useEffect(() => {
    async function getQuote() {
      const response = await fetch(apiURL);
      const data = await response.json();
      setQuotes(data);
      setRandomQuotes(data);
    }
    getQuote();
  }, []);
  return (
    <div className="text-center">
      <h3>{quotes.content}</h3>
      <h6>{quotes.author}</h6>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
