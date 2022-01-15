import logo from "./logo.svg";
import "./App.css";
import data from "./artifacts/data.json";
import CrosswordApp from "./CrosswordApp";

function App() {
  return (
    <>
      <header>The puzzle below is based on the whole of Ecclesiastes</header>
      <p>Most or all of the quotes are taken from the NIV.</p>
      <p>Please press "Reset" before starting.</p>
      <CrosswordApp data={data} />
    </>
  );
}

export default App;
