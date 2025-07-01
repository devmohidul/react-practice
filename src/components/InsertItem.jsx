import { useState } from "react";

let nextId = 3;
const initialArtists = [
  { id: 0, name: "Mohidul Hasan" },
  { id: 1, name: "Mosharrof Hosen" },
  { id: 2, name: "Miadul Islam" },
];
export default function InsertItem() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  const handleClick = () => {
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName("");
  };
  return (
    <>
      <h3>Inspiring Sculptors: </h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Insert</button>
      {artists.map((artist) => {
        return (
          <ul>
            <li key={artist.id}>{artist.name}</li>
          </ul>
        );
      })}
    </>
  );
}
