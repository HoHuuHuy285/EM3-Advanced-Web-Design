import "./App.css";
import CounterRow from "./components/CounterRow";
function App() {
  let counterRows = [];
  for (let i = 0; i < 5; i++) {
    counterRows.push(<CounterRow key={i} id={i + 1} />);
  }
  // const people = ['John', 'Paul', 'Mary'];
  // const listItems = people.map(person =><li>{person}</li>);

  const listNames = ["John", "Paul", "Mary", "Ringo", 123, 456, 789];
  const nameOnlyList = listNames.filter((name) => isNaN(name));

  const newListName = nameOnlyList.map((name) => <li>{name}</li>);
  let No = 0;
  const Tea = (props) => {
    No = No + 1;
    return <div>This is tea cup number: {props.number} </div>;
  };

  const TeaSet = () => {
    return (
      <>
        <Tea />
        <Tea />
        <Tea />
      </>
    );
  };
  return (
    <>
      <ul>{newListName}</ul>
      <Tea number={1}></Tea>
      <Tea number={2}></Tea>
      <Tea number={3}></Tea>
    </>
  );
  // return (
  //   <>
  //     <header>
  //       <h1>Counter application</h1>
  //     </header>
  //     {/* <div id='counterContainer'>
  //       {counterRows}
  //     </div> */}
  //     <div>{listItems}</div>
  //   </>
  // );
}

export default App;
