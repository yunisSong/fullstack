import { useState } from "react";

const Display = ({ count }) => {
  return <p style={{ color: "red", textAlign: "center" }}>count :{count}</p>;
};
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <Display count={count} />
      <Button onClick={increment} text="plus" />
      <Button onClick={decrement} text="minus" />
      <Button onClick={reset} text="reset" />
    </>
  );
};

export default App;
