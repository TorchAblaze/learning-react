// Learning React (with JSX and components)

// Components
// A component is a piece of UI that you can reuse
// Component should be as small as possible and not have too many responsibilities
// Creating a React Component is a two step process:
// Step 1: Define the component as either a JS function or class
// Setp 2: Display the component in the UI with a JSX tag

// React components are required to begin with an upper case letter
// Header is going to return react elements describing what should appear on the screen using JSX

// Step 1:
function Header() {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}
// Header as an arrow funtion with implicit return:
// const Header = () => (
//   <header>
//     <h1>Scoreboard</h1>
//     <span className="stats">Players: 1</span>
//   </header>
// );

// Step 2:
const Player = () => {
  return (
    <div className="player">
      <span className="player-name">Tiffany</span>

      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">35</span>
        <button className="counter-action increment"> + </button>
      </div>
    </div>
  );
};
// Step 2 end

// A JSX tag cannot only reprsent an HTML element, it can also represent a user defined component
// Example: We can use a header tag wherever we want to display the header
ReactDOM.render(<Header />, document.getElementById("root"));
// The tag name (i.e. <Header>) needs to exactly match the name of the function
// Step 1 end

// Things to know about JSX tags that refer to react component:
// 1. When you see a capitialized JSX tag, it means it's referring to a React component (which is why component names need to have a capitalized letter)
// 2. You can use the self closing form of the tag <JSX tag /> if the component has no children. Otherwise, opening and closing tags should be used to provide more JSX tags as the children to make it useful to displaying nested component (the Header is a self contained header element though, so <Header /> can be used)
// 3. A component's JSX tag is also a function called to React.createElement under the hood (see Babel compiled component.png)
