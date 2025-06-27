import { useState } from "react";
import "./App.css";
import { sculptureList } from "./components/Data1.js";

// const person = {
//   h1: {
//     color: "red",
//     backgroundColor: "yellow",
//   },
// };

// const nperson = "Mohidul Hasan";
// const age = 34;
// const gender = "Male";

function App() {
  // const name = "Mohidul Hasan";
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      {/* <Gallery />
      <h1 style={person.h1}>{name} is a software developer</h1>
      <AllInfo nperson={nperson} age={age} gender={gender} />
      <Props1>
        <Props2 />
      </Props1>
      <PackingList /> */}
      {/* <Recipelist />
      <Map /> */}
      {/* <Time time={new Date()} /> */}
      {/* <Button /> */}
      {/* <Toolbar /> */}
      {/* <Toolbar1 /> */}
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}

export default App;
