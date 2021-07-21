// Learning React: A JS library for building user interfaces (without JSX)

// Step 1:

const title = React.createElement(
  // createElement accepts 3 arguments that define the element you want to create (type of element you want to create (string), object creating any attributes/values you want to give the element -- can be an empty object {} or null, contents/children of the element you're creating -- can also be null)
  "h1", // type of element
  { id: "main-title", title: "This is a title." }, // object/props
  "My First React Element (with Guil)!" // children
);
// The above creates:
// <h1 id="main-title" title="This is a title">My First React Element (with Guil)!</h1>

// React does not create actual DOM nodes (not actual h1, div, span, or text node)
console.log(title);

// The elements that React creates are actually plain JavaScript objects that describe the element you'd like to display to your UI

// Step 3 Part 1/2:
const desc = React.createElement(
  "p",
  null,
  "I just learned how to create a React node and render it into the DOM"
);

const header = React.createElement("header", null, title, desc); // createElement considers anything after the second argument as children, so you can provide any number of children arguments after the props argument

// Step 3 Part 1/2 end

ReactDOM.render(
  // This is the function that actually does the creating and updating of the DOM; it connects React to the DOM -- accepts two arguments: React element/JS object that describes the element you'd like to render and the actual HTML element you want to update or render to

  // title, // for step 1, uncomment title to see it appear in the root div and comment Step 3 part 2

  // Step 3 part 2/2:
  header, // change title to header
  // Step 3 part 2/2 end

  document.getElementById("root") // This targets a DOM element with the id root --> no significance in the id root, can be named whatever (container/app are also common). This root element will need to be created in the HTML file. (Go to index.html for step 2)
);

// Step 1 end

// Take away:
// React never touches the DOM directly -- it manages what gets rendered to the DOM and what gets updated via reactDOM.render (it's not until render that the browser creates actual DOM elements)

// React creates objects that describe DOM nodes. React only manages what gets rendered to the DOM via ReactDOM.render. It's the job of render() to interpret the element objects and create DOM nodes out of them.
