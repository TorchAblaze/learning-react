function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>{" "}
      <span className="stats">Players: {props.totalPlayers(5)}</span>
    </header>
  );
}

// Step 2:
// Pass props as a paremeter to the Player function
const Player = (props) => {
  return (
    <div className="player">
      {/* Pass props.name into the span tag */}
      <span className="player-name">{props.name}</span>
      {/* Give the child counter component a prop of score */}
      <Counter score={props.score} />
      {/* Step 2 end */}
    </div>
  );
};

// Step 3
// Pass props as a parameter to the Counter function
const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      {/* Pass props.score into the span tag */}
      <span className="counter-score">{props.score}</span>
      {/* Step 3 end */}
      <button className="counter-action increment"> + </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={(n) => n + 10} />
      {/* Step 1: */}
      {/* Since player is the parent of counter, it's going to define the props for both a player's name and score */}
      <Player name="Tiffany" score={50} />
      {/* Step 1 end */}
      {/* Step 4: */}
      {/* Now that we've setup our player component to receive props and pass props down to the conter component, we have a dynamic and reusuable player component */}
      {/* For example, we can now use multiple player tages insid the app component to add players and scores to the scoreboard */}
      <Player name="Treasure" score={85} />
      <Player name="Ashley" score={90} />
      <Player name="James" score={80} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// Notes:
// Components facilitate what's known as separation of concerns
// That's the idea that each component in your UI should be responsible for one thing only, and shouldn't contain extra code that handles other things.
// Each component addresses a specific concern.
// Example: Counter is just responsible for displaying a score which you can increase and decrease (not working yet)
// Player only displays player info like the name and score counter
// The header doesn't get reused, it only appears once, but it makes our app component easier to read and think about. It also reduces code complexity and improves maintainability
