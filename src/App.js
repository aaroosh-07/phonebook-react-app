import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";
import DisplayList from "./DisplayList";

const App = () => {
  const [persons, setPersons] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      const data = response.data;
      setPersons(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Form persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      {isLoading && <p>loading......</p>}
      {persons && <DisplayList persons={persons} />}
    </div>
  );
};

export default App;
