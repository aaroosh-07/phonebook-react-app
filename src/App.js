import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", num: "99999999" }
  ]);
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
      setPersons(persons.concat(t));
      setNewName("");
    } else {
      alert(`${newName} already exist in phonebook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInput} />
          number: <input value={newNum} onChange={handleInputNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p>
          {person.name} {person.num}
        </p>
      ))}
    </div>
  );
};

export default App;
