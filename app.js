// Step 1: Create a players array of objects to iterate over
const players = [
  {
    name: "Tiffany",
    score: 50,
  },
  {
    name: "Treasure",
    score: 85,
  },
  {
    name: "Ashley",
    score: 90,
  },
  {
    name: "James",
    score: 80,
  },
];
// Step 1 end

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
      <Counter score={props.score} />
    </div>
  );
};

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
};

// Step 3: To use these props inside the App funtion, we need to pass it the parameter for "props"
const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />
      {/* map over the players array to return a player component for each object in the array */}
      {props.initialPlayers.map((player) => (
        <Player name={player.name} score={player.score} />
      ))}
    </div>
  );
};
// Step 3 end

// Step 2: To get the players data into the application, the players array needs to be passed down as props to the main App component
// To do this, add a prop name of initialPlayers to the App tag and pass it the players array
ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById("root")
);
// Step 2 end
