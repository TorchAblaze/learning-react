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

  incrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  };

  decrementScore = () => {
    this.setState((prevState) => ({
      score: this.state.score - 1,
    }));
  };

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

// Since the app component is responsible for rendering the player component, it's going to own and maintain the player state.
// That state will then be passed down and available to the player component as well as all children of App via props.

// Step 1: Make App a stateful component by converting it from a function to a class
class App extends React.Component {
  // Initialize a player state using a class property
  state = {
    players: [
      {
        name: "Tiffany",
        id: 1,
      },
      {
        name: "Treasure",
        id: 2,
      },
      {
        name: "Ashley",
        id: 3,
      },
      {
        name: "James",
        id: 4,
      },
    ],
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />

        {/* Players list */}
        {this.state.players.map((player) => (
          <Player name={player.name} key={player.id.toString()} />
        ))}
      </div>
    );
  }
}
// Step 1 end
// Remember state is an object that stores all the data that the component itself needs and data that might get passed down to its children.

// Step 2: Delete the initial players prop given to the App component in ReactDOM.render
ReactDOM.render(<App />, document.getElementById("root"));

// Types of State
// Application State:
// Data that is available to the entire application
// The main state we typically think about
// In this app, application state lives in the App component and all of its child components have access to it.
// Component State:
// State that is specific to a component and not shared outside of the component
// The counter has state that's not shared or visible outside of the component. It's state required just for that component to do it's job -- increasing and decreasing the score.
