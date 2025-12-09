import { getImageUrl } from "./Utils";

export default function Profile({
  name,
  imageId,
  profession,
  discovery,
  awards,
  imageSize = 70,
}) {
  return (
    <div>
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageId)}
          alt={name}
          width={imageSize}
          height={imageSize}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: 4 </b>({awards.join(", ")})
          </li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>
    </div>
  );
}
