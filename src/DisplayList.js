import noteObject from "./services/persons";
import React from "react";

const Record = ({ person, toggleImportance, deleteRecord }) => {
    const label = person.important ? "important" : "not important";
    return (
        <p>
            {person.name} {person.num}
            <button onClick={toggleImportance}>{label}</button>
            <button onClick={deleteRecord}>delete</button>
        </p>
    );
};

const DisplayList = ({ persons, setPersons }) => {
    const toggleimportanceof = (id) => {
        const person = persons.find((person) => person.id === id);
        const changedPerson = { ...person, important: !person.important };
        noteObject.update(id, changedPerson).then((response) => {
            setPersons(
                persons.map((person) => {
                    return person.id === id ? changedPerson : person;
                })
            );
        });
    };
    const deleteRecordOf = (id) => {
        if (window.confirm("do want to delete this record?")) {
            noteObject.deleteRecord(id).then((response) => {
                const updatedList = persons.filter(
                    (person) => person.id !== id
                );
                setPersons(updatedList);
            });
        }
    };
    return (
        <div>
            {persons.map((person) => (
                <Record
                    person={person}
                    toggleImportance={() => toggleimportanceof(person.id)}
                    deleteRecord={() => deleteRecordOf(person.id)}
                    key={person.id}
                />
            ))}
        </div>
    );
};

export default DisplayList;
