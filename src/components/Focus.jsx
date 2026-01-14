import { useRef } from "react";
import MyInput from "./MyInput";

export default function Focus() {
  let inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <MyInput ref={inputRef} type="text" style={{ padding: "10px 0px" }} />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}
