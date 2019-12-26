import React from "react";

const TimerButton = props => (
    <button onClick={props.onClick}>{props.text}</button>
);

export default TimerButton;
