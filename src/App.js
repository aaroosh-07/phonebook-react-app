import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState(null);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(()=>{
    console.log('use effect in effect');
    axios.get('http://localhost:3001/persons').then(response=>{
      const data = response.data;
      setPersons(data);
      setIsLoading(false);
      console.log(data);
    });
  },[]);

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
      {isLoading && <p>loading......</p>}
      {persons && persons.map((person) => (
        <p>
          {person.name} {person.num}
        </p>
      ))}
    </div>
  );
};

export default App;
