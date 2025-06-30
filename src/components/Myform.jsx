import { useState } from "react";

export default function Myfrom() {
  const [person, setPerson] = useState({
    firstName: "Mohidul",
    lastName: "Hasan",
    email: "m@gmail.com",
  });

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

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

      <p>
        {person.firstName} {""}
        {person.lastName} {""}
        {person.email} {""}
      </p>
    </>
  );
}
