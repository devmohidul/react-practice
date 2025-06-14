const AlertButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};
export default function Toolbar() {
  return (
    <>
      <AlertButton message="playing"> Play Movie </AlertButton>
      <AlertButton message="uploading">Upload Movie</AlertButton>
    </>
  );
}
