// function App() {
//   return (
//     <>
//       <h1>Hello React</h1>
//     </>
//   );
// }
const Hello = ({ name, age }) => {
  return (
    <>
      <p>
        Hello {name},you are {age} years old
      </p>
    </>
  );
};
const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  return (
    <>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <p>Hello React,it is {now.toString()}</p>
      <Hello name="React" age={10} />
      <Hello name="Yunis" age={20} />
      <Hello name="Tan" age={30} />
    </>
  );
};

export default App;
