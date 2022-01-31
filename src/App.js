import React, { useEffect, useState } from "react";
import noteObject from "./services/persons.js";
import Form from "./Form";
import DisplayList from "./DisplayList";
import Notification from "./Notification";

const App = () => {
    const [persons, setPersons] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setmessage] = useState(null);

    useEffect(() => {
        noteObject.getAll().then((response) => {
            const data = response.data;
            setPersons(data);
            setIsLoading(false);
        });
    }, []);

    return (
        <div>
            <Notification message={message} setMessage={setmessage} />
            <h2>Phonebook</h2>
            <Form
                persons={persons}
                setPersons={setPersons}
                setmessage={setmessage}
            />
            <h2>Numbers</h2>
            {isLoading && <p>loading......</p>}
            {persons && (
                <DisplayList persons={persons} setPersons={setPersons} />
            )}
        </div>
    );
};

export default App;
