export default function Button() {
  function handleClick() {
    alert("Button is clicked");
  }
  return <button onClick={handleClick}>Click now</button>;
}
