import { useRef } from "react";

export default function CatFriendsList() {
  const itemsRef = useRef(null);

  const scrollToCat = (catId) => {
    const map = getMap();
    const node = map.get(catId);

    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const getMap = () => {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };

  return (
    <>
      <nav>
        <button onClick={() => scrollToCat(1)}>Neo</button>
        <button onClick={() => scrollToCat(9)}>Millie</button>
        <button onClick={() => scrollToCat(2)}>Bella</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            >
              <img src={cat.imgUrl} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];

for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imgUrl: "https://placecats.com/neo/250/200?image=" + i,
  });
}
