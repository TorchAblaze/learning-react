// In most apps, you'll have a list of sibling elements that get updated, removed, added and reordered on the page.
// Key - a unique identifier that gives React a way to quickly and reliably identify an element in the list
// React does not recommend using index for unique keys, because the index might not always uniquely identify elements. It's usually best to use a unique id.

// Step 1: Add an id property for each player
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

// Step 2: Pass Player a new Key prop
// The React docs recommend using a string as the key value, so use the toString() method to convert the id value to a string
const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />
      {props.initialPlayers.map((player) => (
        <Player
          name={player.name}
          score={player.score}
          key={player.id.toString()}
        />
      ))}
    </div>
  );
};
// Step 2 end

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById("root")
);

// Not all React elements need a key prop
// Pass a key prop anytime you're creating elements by iterating over an array of items that will be rearranged, added or deleted in your UI
// The key will help React identify which items were changed, added or removed from the DOM.
