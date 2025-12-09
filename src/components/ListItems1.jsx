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
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}
