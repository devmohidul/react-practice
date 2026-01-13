import { useRef } from "react";

export default function Focus() {
  let inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input ref={inputRef} type="text" style={{ padding: "10px 0px" }} />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}
