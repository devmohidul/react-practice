import { useImmer } from "use-immer";

export default function Myfrom() {
  const [person, updatePerson] = useImmer({
    firstName: "Mohidul",
    lastName: "Hasan",
    email: "m@gmail.com",
    contact: {
      fb: "mm@gmail.com",
      types: {
        category: "social media",
      },
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePerson((draft) => {
      const keys = name.split(".");
      if (keys.length === 1) {
        draft[keys[0]] = value;
      } else if (keys.length === 2) {
        draft[keys[0]][keys[1]] = value;
      } else if (keys.length === 3) {
        draft[keys[0]][keys[1]][keys[2]] = value;
      }
    });
  };

  // const handleContactChange = (e) => {
  //   updatePerson((draft) => {
  //     draft.contact.fb = e.target.value;
  //   });
  // };

  return (
    <>
      <label>
        First Name:{" "}
        <input
          type="text"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:{" "}
        <input
          type="text"
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="text"
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <label>
        FB:{" "}
        <input
          type="text"
          name="contact.fb"
          value={person.contact.fb}
          onChange={handleChange}
        />
      </label>
      <label>
        Types:{" "}
        <input
          type="text"
          name="contact.types.category"
          value={person.contact.types.category}
          onChange={handleChange}
        />
      </label>

      <p>
        {person.firstName} {""}
        {person.lastName} {""}
        {person.email} {""}
        {person.contact.fb} {""}
        {person.contact.types.category}
      </p>
    </>
  );
}
