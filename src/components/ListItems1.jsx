import { people } from "./Data2";
import { getImageUrl } from "./Utils1";

export default function ListItems1() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = chemists.map((person) => {
    return (
      <li>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    );
  });
  const nonChemists = people.filter(
    (person) => person.profession !== "chemist"
  );
  const list = nonChemists.map((person1) => {
    return (
      <li>
        <img src={getImageUrl(person1)} alt={person1.name} />
        <p>
          <b>{person1.name}:</b>
          {" " + person1.profession + " "}
          known for {person1.accomplishment}
        </p>
      </li>
    );
  });
  return (
    <>
      <h1>Checmists</h1>
      <ul>{listItems}</ul>
      <br />
      <h1>Others</h1>
      <ul>{list}</ul>
    </>
  );
}
