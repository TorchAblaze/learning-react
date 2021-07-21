// Learning React (with JSX: A syntax extension to JS that is used with React to describe elements in the UI)

// Step 1:
// Since JS acts as an extension to the JS language, it accepts any valid JS expressions written inside {}, this is called a JSX expression. They can be placed between JSX tags or as the value of an attribute in the JSX tag.
const desc =
  "I just learned how to create a React node and render it into the DOM.";
const myTitleID = "main-title";
const name = "Tiffany";

// Step 2:
// This isn't really HTML or JS syntax. It's JSX:
// JSX can contain children or nested elements
const header = (
  <header>
    <h1 id={myTitleID}>{name}'s First React Element (with Guil)!</h1>
    {/* React uses a camel case property naming convention instead of the usual HTML attribute names. Example:
    Use className instead of class (because class is a reserved word in JS used to define classes) */}
    <p className="main-desc">{desc}</p>
    <input value={10 * 20} />
    {/* Wherever you're including the curly-braces, you're exiting JSX and entering JS territory: */}
  </header>
);
// Step 2 end

ReactDOM.render(header, document.getElementById("root"));
// Step 1 end
