import { getImageUrl } from "./Utils1";
export default function Avatar({ size, person }) {
  let thumbnailSize = "s";
  if (size > 90) {
    thumbnailSize = "b";
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
