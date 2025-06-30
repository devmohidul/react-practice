import { useState } from "react";

export default function Myfrom() {
  const [person, setPerson] = useState({
    firstName: "Mohidul",
    lastName: "Hasan",
    email: "m@gmail.com",
    contact: {
      fb: "mm@gmail.com",
    },
  });

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactChange = (e) => {
    setPerson({
      ...person,
      contact: {
        ...person.contact,
        fb: e.target.value,
      },
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
      <label>
        FB:{" "}
        <input
          type="text"
          name="fb"
          value={person.contact.fb}
          onChange={handleContactChange}
        />
      </label>

      <p>
        {person.firstName} {""}
        {person.lastName} {""}
        {person.email} {""}
        {person.contact.fb} {""}
      </p>
    </>
  );
}
