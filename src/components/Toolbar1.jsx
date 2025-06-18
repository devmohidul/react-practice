function Button({ onSmash, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onSmash();
      }}
    >
      {children}
    </button>
  );
}
export default function Toolbar1() {
  return (
    <>
      <div onClick={() => console.log("Clicking Toolbar")}>
        <Button onSmash={() => console.log("playing movie")}>Play Movie</Button>
        <Button onSmash={() => console.log("Uploading Image")}>
          Upload Image
        </Button>
      </div>
    </>
  );
}
