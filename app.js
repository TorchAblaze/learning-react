// Learning React (with JSX and components)

// Components
// A component is a piece of UI that you can reuse
// Creating a React Component is a two step process:
// Step 1: Define the component as either a JS function or class
// Setp 2: Display the component in the UI with a JSX tag

// React components are required to begin with an upper case letter
// Header is going to return react elements describing what should appear on the screen using JSX
function Header() {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}

ReactDOM.render(header, document.getElementById("root"));
