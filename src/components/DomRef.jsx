import { useRef } from "react";

export default function DomRef() {
  let myRef = useRef(null);
  const handleChange = () => {
    myRef.current.textContent = "Hello React";
  };
  return (
    <>
      <h2 ref={myRef}>Hello</h2>
      <button onClick={handleChange}>Change</button>
    </>
  );
}
