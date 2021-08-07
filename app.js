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

  // We are receiving an error in the console because we are referencing this.setState inside the incrementScore method, but "this" is actually undefined inside the method.
  // In objects or classes, "this" usually refers to the parent that owns the method, so "this" should be the Counter class.
  // However, when you create a class component that extends from React.Component, any custom methods you create are not bound to the component by default. That's why we've lost our binding to the component.
  // Remember you need to bind your custom methods so that "this" refers to the component.
  incrementScore() {
    this.setState({
      score: this.state.score + 1,
    });
  }

  // Step 2: Add a decrementScore method
  decrementScore = () => {
    this.setState({
      score: this.state.score - 1,
    });
  };
  // Step 2 end

  // Step 1
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
          onClick={this.incrementScore.bind(this)}
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}
// Other ways this problem could be solved:
// 1:
// Arrow function: onClick={() => this.incrementScore()}
// With the arrow function, we don't need to bind "this" because arrow functions use a lexical "this" which means it automatically binds them to the scope in which they are defined.
// 2:
// The most common way to define an event handler in React is with an arrow function, so we could rewrite the increment function as follows:
// incrementScore = () => {
//   this.setState({
//     score: this.state.score + 1,
//   });
// };
// The function gets bound to the component instance so we would no longer need the .bind(this) in the onClick incrementScore function reference.
// 3:
// Another way to bind an event handler is in the class constructor:
// constructor() {
//   super();
//   this.state = { score: 0 };
//   this.incrementScore = this.incrementScore.bind(this);
// }
// Then pass the function to a React event like so:
// <button onClick={ this.incrementScore }> + </button>
// Step 1 end

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
