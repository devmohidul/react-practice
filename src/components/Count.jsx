import { useRef } from "react";

export default function Count() {
  console.log("rendering");
  let ref = useRef(0);
  function handleClick() {
    ref.current = ref.current + 1;
    console.log("You Clicked " + ref.current + " times");
  }
  return <button onClick={handleClick}>Click Me!</button>;
}
