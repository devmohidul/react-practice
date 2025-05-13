import SingleInfo from "./SingleInfo";

export default function AllInfo(props) {
  return (
    <div>
      <h1>Here is your all info</h1>
      <h2>
        {props.nperson} {props.age} {props.gender}
      </h2>
      <SingleInfo {...props} />
    </div>
  );
}
