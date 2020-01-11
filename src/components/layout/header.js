import React from "react";

const Header = props => {
    const isLoggedIn = props.isLoggedIn;

    return (
        <>
            <h2>Nursing Timer from a function</h2>
            {isLoggedIn ? (
                <div>Hello, {props.userName}</div>
            ) : (
                <div>Please log in!</div>
            )}
        </>
    );
};

export default Header;
