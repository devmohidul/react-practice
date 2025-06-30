import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function Delete() {
  const [artists, setArtists] = useState(initialArtists);
  return (
    <>
      <h2>Inspiring Sculpture:</h2>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
