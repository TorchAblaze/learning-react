function Header() {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}

// React components can make use of, or refer, to other React components (for example, you can render the Counter component within the Player component return statement, as seen below), this is called composition
const Player = () => {
  return (
    <div className="player">
      <span className="player-name">Tiffany</span>

      <Counter />
    </div>
  );
};

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">35</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
};

// Typically, React applications have a single top level component that wraps the entire application and composes all the main components together:
const App = () => {
  return (
    <div className="scoreboard">
      <Header />

      {/* Players list */}
      <Player />
    </div>
  );
};

// ReactDOM.render usually renders your top level element into the DOM, so we're going to pass our App component in the function using the JSX tag
ReactDOM.render(<App />, document.getElementById("root"));
// Our entire application is now mounted into the DOM

// Remember, React never allows us to touch the actual DOM directly
// React just mangages what gets rendered into the DOM and what should appear on the screen ~ this makes it tricky to debug things in the browser
// ^ (Oh, so that's why those errors are so freaking vague)
