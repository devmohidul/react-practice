const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

export default function ListItems() {
  const listItems = people.map((person) => (
    <li key={person.id}>{person.name}</li>
  ));

  const chemists = people.filter((person) => person.profession === "chemist");
  return (
    <>
      <ul>{listItems}</ul>
      <h1>Chemists</h1>
      <ul>
        {chemists.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </>
  );
}
