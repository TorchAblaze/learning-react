function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>{" "}
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

// Inside the player component, a delete button is going to trigger the change in the player state
// To call the handleRemovePlayer() when the button is clicked, we pass onClick an anonymous function using an arrow function that returns a call to the function which is being passed in through props with props.removePlayer.
// Then we pass the player id into the function so that it knows which player to remove onClick
// We're passing the id as a prop, so we can access it with props.id
// Step 3:
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => props.removePlayer(props.id)}
        >
          x
        </button>
        {props.name}
      </span>
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
      score: prevState.score - 1,
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

class App extends React.Component {
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

  // The handleRemovePlayer function takes an id parameter for the player to remove the state
  // Step 1:
  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };
  // Step 1 end

  // We should never modify or mutate state directly.
  // In order to remove a player from the players array and state, we need to produce a new array that no longer contains the player object we want to remove
  // Filter is used to remove elements from an array without affecting the original array.
  // Like the map method, the filter method takes a callback function
  // The first parameter of the callback represents the current item being processed in the array (in this case 'p' for player).
  // Then we need to return all player objects and state except for the one we want to remove, using the player id.
  // When handleRemovePlayer is invoked, we iterate through the player's array and state and filter out only the player object whose id does not equal the id passed into handleRemovePlayer.

  // Step 2:
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />

        {/* Players list */}
        {this.state.players.map((player) => (
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}
// Step 2 end
// The player component is a child of App, but it can have access to the handleRemovePlayer function written in the App class through props.
// Props is what React uses to pass data from component to component -- you can pass functions through props, even data from state
// We add the 'removePlayer' prop and the 'id' prop to the Player component to let the function know which player to remove

ReactDOM.render(<App />, document.getElementById("root"));
