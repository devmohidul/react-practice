import "./App.css";
import AllInfo from "./components/AllInfo";
import Gallery from "./components/Gallery";

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
    </>
  );
}

export default App;
