import React, { useState } from "react";
import axios from "axios";

const Form = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");

  const handleInput = (event) => {
    const temp = event.target.value;
    console.log(event.target);
    setNewName(temp);
  };

  const handleInputNum = (event) => {
    const temp = event.target.value;
    setNewNum(temp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const t = { name: newName, num: newNum };
    const found = persons.find((person) => person.name === t.name);
    if (!found) {
      axios.post("http://localhost:3001/persons", t).then((response) => {
        console.log(response.data);
      });
      setPersons(persons.concat(t));
      setNewName("");
    } else {
      alert(`${newName} already exist in phonebook`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInput} />
          number: <input value={newNum} onChange={handleInputNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default Form;
