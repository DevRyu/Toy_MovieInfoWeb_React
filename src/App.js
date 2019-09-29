import React from "react";

function Food({ name }) {
  return <h1>I Like {name}</h1>;
}
const foodILike = [
  {
    name: "A"
  },
  {
    name: "B"
  },
  {
    name: "C"
  }
];
// 음식 배열을 통해넣음
function App() {
  return (
    <div>
      <div>im </div>
      {foodILike.map(dish => (
        <Food name={dish.name} />
      ))}
    </div>
  );
  //디쉬는 오브젝트
}

export default App;
//app 화면
