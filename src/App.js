import logo from "./logo.svg";
import "./App.css";
import data from "./artifacts/data.json";
import CrosswordApp from "./CrosswordApp";

function App() {
  return (
    <div style={{ marginLeft: "20px" }}>
      <header style={{ fontSize: 30 }}>Ecclesiastes Crossword Puzzle</header>
      <p>
        <span>
          What do people get for all the toil and anxious striving with which
          they
        </span>
        <span style={{ fontWeight: "bold" }}> solve crossword puzzles </span>
        <span>under the sun?</span>
      </p>
      <div>- Clues are below.</div>
      <div>- Most of the quotes are taken from the NIV.</div>
      <div>
        - Please press "Reset" before starting, or else currently-filled entries
        will not be registered.
      </div>
      <div>
        - Pro-tip: Clicking on a box you're trying to fill will highlight the
        associated clue below. Clicking on a clue will direct you to the blank
        word.
      </div>
      <CrosswordApp data={data} />
    </div>
  );
}

export default App;
