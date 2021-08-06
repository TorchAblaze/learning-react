// There are two ways that data gets handled in react: props and state.
// Props are read-only or immutable.
// State is used to store information about a component that can change over time. For any data that's going to change, we have to use state.
// State is the data you want to track in your app.
// State is what allows you to create components that are dynamic and interactive, and it's the only data that changes over time.
// When a user removes data, adds data, or even types into the text field, they are changing the state of the application, and all those changes need to be stored somewhere.
// In react, this data is stored in state.
// State itself is a regular JavaScript object with properties that define the pieces of data that change.
// State is what keeps your UI in sync with your data.
// As the data changes, different components of the app will update what they show to the user.
// Data from state is distributed through props
// Props are still how you get data into a component
// State is only available to components that are class components
// So far we've been defining components using stateless functional components (see previous branches)
// Class components offer a more powerful way to build components becuase they're the only type of components that let you use state.

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

// Step 2 Part 1: Remove the score prop being passed to the Counter and player components, since Counter is now maintaining its own score state.
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>
      <Counter />
    </div>
  );
};
// Step 2 Part 1 end

// Step 1
// In JavaScript classes, the extends keyword is used to create a subclass, or a child of another class.
// In this case, we're extending from React.Component which is part of React's API for component class definition.
// The only method you need to define in a class componenet is called render.
// Classes need to access props with this.props
// In class components, props are not accessed through arguments like they are in functional components. Props are a property of the component itself. "this" refers to the component instance.
// In the Counter class component, score is our state (it's what changes)
// Since state is an object, you create and initalize state within a class inside the constructor method.
// The object name must be state otherwise the constructor method won't work
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    };
  }
  // The Counter class can also be written like this:
  // class Counter extends React.Component {
  //   state = {
  //     score: 0
  //   };

  // Step 3: Replace this.props.score with this.state.score
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.state.score}</span>
        {/* Step 3 end */}
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}
// Step 1 end

// Step 2 Part 2: Remove the score prop below
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
// Step 2 Part 2 end

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById("root")
);

// If a component is only receiving input through props and rendering UI, it's best to use a function or a stateless functional component.
//Functions are a little easier to write, read and understand, and you can think of a stateless functional component as just the render method from a class component with props passed in as an argument.
// When you want to add state, that's when you use a class component.
// You can also create stateless components as classes in case you ever need to convert the component from stateless to stateful
