import React from "react";

const SelectChildList = props => (
    <ul>
        {props.childArray.map((childName, index) => {
            return <li key={index}>{childName}</li>;
        })}
    </ul>

    // <p>{props.childArray}</p>
);

export default SelectChildList;
