// State is local to a component -- a component can maintain its own state, unlike props, which are read-only.

const players = [
  {
    name: "Tiffany",
    score: 50,
    id: 1,
  },
  {
    name: "Treasure",
    score: 85,
    id: 2,
  },
  {
    name: "Ashley",
    score: 90,
    id: 3,
  },
  {
    name: "James",
    score: 80,
    id: 4,
  },
];

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>{" "}
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>
      <Counter />
    </div>
  );
};

class Counter extends React.Component {
  state = {
    score: 0,
  };

  // We create a function or event handler that updates our state using React's built-in set state method.
  // Then we give the buttons an onClick event that calls the event handler when clicked.
  // Whenever the score state gets updated, React will re-render our component and the change will be visible in our UI.
  // In class components, a common pattern is to create event handlers as a method on the class.

  // Step 1 Part 1:
  // It's important to remember that state is never modified directly. Example: We can't type "this.state.score += 1"
  // The only way React allows you to update a component state is by using its built-in set state method.
  // this.setState lets React know that state has changed and that it should re-render and make changes to the component based on the change in state.
  // You pass setState an object that contains the part of the state you want to update and the value you want to update it to.
  incrementScore() {
    this.setState({
      score: this.state.score + 1,
    });
  }
  // Step 1 Part 1 end

  // Now we need to instruct React to listen for the clik event on a button
  // React events are similar to JS events except that they are written inline and named using camelCase.

  // Step 1 Part 2
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
          // Notice we don't use () to call incrementScore -- we're only passing a reference to the method.
          // Adding () will call incrementScore and make it run right when the component mounts, or gets displayed on the page, which we don't want. (We only want to call incrementScore when the button is clicked.)
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}
// Step 1 Part 2 end

// An error will appear in the console: "Cannot read property 'setState' of undefined"
// It looks like the binding to the component was lost, so we're not able to reference it with "this" from within the incrementScore method.
// This issue is fixed in the next branch: binding

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />
      {props.initialPlayers.map((player) => (
        <Player name={player.name} key={player.id.toString()} />
      ))}
    </div>
  );
};

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById("root")
);
