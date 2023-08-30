marked.setOptions({
  breaks: true,
  renderer: renderer,
});

const renderer = new marked.Renderer();

function App() {
  const [text, setText] = React.useState("");
  return (
    <div className="text-center px-4">
      <h1 className="p-4">My MarkDown Previewer</h1>
      <textarea
        name=""
        id=""
        rows="10"
        value={text}
        onChange={(el) => setText(el.target.value)}
        className="textarea"
      ></textarea>
      <h3 className="mt-3">Output</h3>
      <Preview markdown={text} />
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
      id="preview"
    ></div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
