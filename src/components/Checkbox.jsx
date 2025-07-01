import { useImmer } from "use-immer";

const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function Checkbox() {
  const [myList, updateMyList] = useImmer(initialList);
  const [yourList, updateYourList] = useImmer(initialList);

  const handleToggleMyList = (artworkId, nextSeen) => {
    updateMyList((draft) => {
      const artwork = draft.find((a) => a.id === artworkId);
      artwork.seen = nextSeen;
    });
  };

  const handleToggleYourList = (artworkId, nextSeen) => {
    updateYourList((draft) => {
      const artwork = draft.find((a) => a.id === artworkId);
      artwork.seen = nextSeen;
    });
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
