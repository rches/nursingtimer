import React from "react";

function Display(props) {
    return (
        <div className="timeDisplay">
            <div>
                {props.timeType}: {props.value}
            </div>
            ;
        </div>
    );
}
