// HTML elements accept attributes that give them further meaning and additional behavior (ex. element id, class name, or img alt text)
// Every React component and element can receive a list of attributes just like HTML elements, this list is called properties, or "props"
// Props: A list of properties used to pass data to a component. Components are customized and made reusable with props.
// There are two main steps to using props in a component:
// 1. Write/define the props in a component's JSX tag using an attribute syntax
// 2. Enable the use of props in a component

// Every React element and component has a props object containing the list of props given to it

// Step 2:
// When you define a component using a function, the function gets one default argument from React, a props object containing a list of props given to the component
// We'll enable the use of props in the Header component by giving the function a parameter called props:
function Header(props) {
  console.log(props); // (dispalys the title and totalPlayers props that we made in the Header JSX tag in the App component in Step 1)
  // We'll want to place these prop values into our h1 and span JSX tags -- we can do this with dot notation
  return (
    <header>
      <h1>{props.title}</h1>{" "}
      {/* We replace the word "Scoreboard" with props.title inside a JSX expression (curly braces {}) above and replace 1 with props.totalPlayers() below */}
      <span className="stats">Players: {props.totalPlayers(5)}</span>
    </header>
  );
}

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

// Step 1:
// You pass props to a component via the component's JSX tag at the place where it's used
// The Header tag is used in the app component, so this is where we'd go to add props to Header
const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={(n) => n + 10} />{" "}
      {/* We've added the title and totalPlayers(could be named anything) props to the Header JSX tag */}
      {/* Note: Anytime you pass a prop other than a string, like a number or a variable, you should place it between curly braces so that it gets evaluated as a JSX expression */}
      {/* Players list */}
      {/* Step 1 end */}
      <Player />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
