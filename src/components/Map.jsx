import { getImageUrl } from "./Utils.jsx";

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

export default function Map() {
  const chemist = people.filter((person) => person.profession === "chemist");
  const scientists = people
    .filter((person) => person.profession != "chemist")
    .map((scientist) => (
      <li
        key={scientist.id}
        style={{ display: "flex", padding: "15px", alignItems: "center" }}
      >
        <img
          src={getImageUrl(scientist)}
          alt={scientist.name}
          style={{ borderRadius: "50%", padding: "10px" }}
        />
        <p>
          <b>{scientist.name}:</b>
          {" " + scientist.profession + " "}
          known for {scientist.accomplishment}
        </p>
      </li>
    ));
  const listItems = chemist.map((person) => (
    <li
      key={person.id}
      style={{ display: "flex", padding: "15px", alignItems: "center" }}
    >
      <img
        src={getImageUrl(person)}
        alt={person.name}
        style={{ borderRadius: "50%", padding: "10px" }}
      />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <>
      <h2>Chemists</h2>
      <ul>{listItems}</ul>
      <h2>Scientists</h2>
      <ul>{scientists}</ul>
    </>
  );
}
