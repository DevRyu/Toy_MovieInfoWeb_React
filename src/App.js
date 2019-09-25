import React from "react";

function Food(props) {
  console.log(props);
  return <h1>I Like Potato</h1>;
}
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food name="kimchi" something={true} papa={["hello", 1, 2, 3]} />
    </div>
  );
}

export default App;
