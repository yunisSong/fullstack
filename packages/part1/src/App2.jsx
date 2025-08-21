import { useState } from "react";

const Display = ({ name, count }) => {
  return (
    <p style={{ color: "red", textAlign: "center" }}>
      {name} :{count}
    </p>
  );
};
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <p>No clicks yet</p>;
  }
  return (
    <>
      <p>{allClicks.join(" ")}</p>
    </>
  );
};

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAllClicks] = useState([]);
  const handleLeftClick = () => {
    setAllClicks([...allClicks, "L"]);
    setClicks({
      ...clicks,
      left: clicks.left + 1,
    });
  };
  const handleRightClick = () => {
    setAllClicks([...allClicks, "R"]);
    setClicks({
      ...clicks,
      right: clicks.right + 1,
    });
  };

  return (
    <>
      <Display name="left" count={clicks.left} />
      <Button onClick={handleLeftClick} text="left" />
      <Display name="right" count={clicks.right} />
      <Button onClick={handleRightClick} text="right" />
      <History allClicks={allClicks} />
    </>
  );
};

export default App;
