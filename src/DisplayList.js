import React from "react";

const Record = ({person})=>{
    return(
        <p>{person.name} {person.num}</p>
    );
};

const DisplayList = ({persons})=>{
    return(
        <div>
        {persons.map(person => <Record person={person} key={person.id}/>)}
        </div>
        );
};

export default DisplayList;