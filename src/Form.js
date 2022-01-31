import React, { useState } from "react";
import noteObject from "./services/persons";

const Form = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState("");
    const [newNum, setNewNum] = useState("");

    const handleInput = (event) => {
        const temp = event.target.value;
        setNewName(temp);
    };

    const handleInputNum = (event) => {
        const temp = event.target.value;
        setNewNum(temp);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const t = { name: newName, num: newNum, important: false };
        const found = persons.find((person) => person.name === t.name);
        if (!found) {
            noteObject.create(t).then((response) => {
                setPersons(persons.concat(response.data));
            });
        } else {
            if (
                window.confirm(
                    `${newName} already exist in phonebook. Do you want to update it?`
                )
            ) {
                const changedPerson = { ...found, num: newNum };
                noteObject.update(found.id, changedPerson).then(() => {
                    setPersons(
                        persons.map((person) => {
                            return person.id !== found.id
                                ? person
                                : changedPerson;
                        })
                    );
                });
            }
        }
        setNewName("");
        setNewNum("");
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
