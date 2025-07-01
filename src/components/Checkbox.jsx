import { useState } from "react";

const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function Checkbox() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  const handleToggleMyList = (artworkId, nextSeen) => {
    const myNextList = myList.map((artwork) => {
      if (artwork.id === artworkId) {
        return {
          ...artwork,
          seen: nextSeen,
        };
      } else {
        return artwork;
      }
    });
    setMyList(myNextList);
  };

  const handleToggleYourList = (artworkId, nextSeen) => {
    const yourNextList = yourList.map((artwork) => {
      if (artwork.id === artworkId) {
        return {
          ...artwork,
          seen: nextSeen,
        };
      } else {
        return artwork;
      }
    });
    setYourList(yourNextList);
  };

  return (
    <>
      <h2>Art Bucket List</h2>
      <h3>My list of art to see</h3>
      <ItemList artwork={myList} onToggle={handleToggleMyList} />
      <h3>Your list of art to see</h3>
      <ItemList artwork={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

const ItemList = ({ artwork, onToggle }) => {
  return (
    <ul>
      {artwork.map((artwork) => (
        <li key={artwork.id} style={{ textAlign: "left" }}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
};
