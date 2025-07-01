import { useState } from "react";

let initialShapes = [
  { id: 0, type: "circle", x: 600, y: 100 },
  { id: 1, type: "square", x: 750, y: 100 },
  { id: 2, type: "circle", x: 900, y: 100 },
];

export default function MovingCircle() {
  const [shapes, setShapes] = useState(initialShapes);
  const movingShapes = () => {
    setShapes(
      shapes.map((shape) => {
        if (shape.type === "circle") {
          return {
            ...shape,
            y: shape.y + 50,
          };
        } else {
          return shape;
        }
      })
    );
  };
  return (
    <>
      <button
        style={{ marginBottom: "30px", border: "1px solid green" }}
        onClick={movingShapes}
      >
        Moving Circle Down
      </button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            width: 50,
            height: 50,
            backgroundColor: "red",
            borderRadius: shape.type === "circle" ? "50%" : "",
            left: shape.x,
            top: shape.y,
            position: "absolute",
          }}
        ></div>
      ))}
    </>
  );
}
