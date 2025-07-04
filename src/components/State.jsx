import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((number) => number + 1);
          // setTimeout(() => {
          //   alert(number);
          // }, 3000);
        }}
      >
        +5
      </button>
    </>
  );
}
