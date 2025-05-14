import "./App.css";
import AllInfo from "./components/AllInfo";
import Gallery from "./components/Gallery";
import Props1 from "./components/Props1";
import Props2 from "./components/Props2";

const person = {
  h1: {
    color: "red",
    backgroundColor: "yellow",
  },
};

const nperson = "Mohidul Hasan";
const age = 34;
const gender = "Male";

function App() {
  const name = "Mohidul Hasan";

  return (
    <>
      <Gallery />
      <h1 style={person.h1}>{name} is a software developer</h1>
      <AllInfo nperson={nperson} age={age} gender={gender} />
      <Props1>
        <Props2 />
      </Props1>
    </>
  );
}

export default App;
