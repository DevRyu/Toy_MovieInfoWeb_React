import React from "react";

function Food({ name }) {
  return <h1>I Like {name}</h1>;
}
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food name="kimchi" />
      <Food name="gogi" />
      <Food name="ramen" />
      <Food name="soup" />
    </div>
  );
}

export default App;
