import { useState } from "react";
const Feedback = ({ text, items }) => {
  return (
    <>
      <h3>{text}</h3>
      {items.map((item) => (
        <button onClick={() => item.event()}>{item.text}</button>
      ))}
    </>
  );
};
const Statistics = ({ text, good, neutral, bad }) => {
  return (
    <>
      <h3>{text}</h3>
      <p>good : {good}</p>
      <p>neutral : {neutral}</p>
      <p>bad : {bad}</p>
    </>
  );
};

const Average = ({ text, good, neutral, bad }) => {
  // good 1  neutral 0  bad -1
  if (good + neutral + bad === 0) {
    return <p>{text} : 0</p>;
  }
  const total = good * 1 + bad * -1;
  const average = total / (good + neutral + bad);
  return (
    <p>
      {text} : {average}
    </p>
  );
};
const Positive = ({ text, good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return <p>{text} : 0 %</p>;
  }
  const positive = good / (good + neutral + bad);
  return (
    <p>
      {text} : {positive} %
    </p>
  );
};
const StatisticsLines = ({ text, value, unit = "" }) => {
  return (
    <>
      <p>
        {text} : {value} {unit}
      </p>
    </>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  function handleGoodClick() {
    setGood(good + 1);
  }
  function handleNeutralClick() {
    setNeutral(neutral + 1);
  }
  function handleBadClick() {
    setBad(bad + 1);
  }
  const feedbackItems = [
    {
      text: "good",
      event: handleGoodClick,
    },
    {
      text: "neutral",
      event: handleNeutralClick,
    },
    {
      text: "bad",
      event: handleBadClick,
    },
  ];
  return (
    <>
      <Feedback text="give feedback" items={feedbackItems} />
      <h3>statistics</h3>
      <StatisticsLines text="good" value={good} />
      <StatisticsLines text="neutral" value={neutral} />
      <StatisticsLines text="bad" value={bad} />
      <StatisticsLines
        text="average"
        value={
          good + neutral + bad === 0
            ? 0
            : (good * 1 + bad * -1) / (good + neutral + bad)
        }
      />
      <StatisticsLines
        text="positive"
        value={good + neutral + bad === 0 ? 0 : good / (good + neutral + bad)}
        unit="%"
      />
    </>
  );
};

export default App;
