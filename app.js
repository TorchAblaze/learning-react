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

  // The way setState works is it takes the object passed to it with the updated state and eventually merges it into the component's current state.
  // A state update may be asynchronous -- sometimes updates to the DOM don't happen immediately when you call this.setState.
  // If you have multiple setState calls inside an event handler, React will often batch or bundle the updates together into a single update.
  // This may not always lead to the component rerendering with the new data and could cause state inconsistency.
  // Because state maybe updated asynchronously, whenever you need to update state based on previous state, you shouldn't rely on this.state to calculate the next state.
  // Instead of an object, setState also accepts a call back function that produces state based on the previous state in a more reliable way.
  // The call back funtion receives the previous state as its first argument and the props at the time the update is applied as an optional second argument.
  // Step 1:
  incrementScore = () => {
    this.setState((prevState) => {
      return {
        score: prevState.score + 1,
      };
    });
  };

  decrementScore = () => {
    this.setState((prevState) => {
      return {
        score: this.state.score - 1,
      };
    });
  };
  // Step 1 end
  // The call back function is guaranteed to fire after the update is applied and rendered out to the DOM.
  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          {" "}
          -{" "}
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

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
