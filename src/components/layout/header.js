import React from "react";

const Header = props => {
    const isLoggedIn = props.isLoggedIn;

    return (
        <div className="container">
            <div className="header row">
                <div className="two-thirds column">
                    <h4>Infant Nursing Timer</h4>
                </div>
                {isLoggedIn ? (
                    <div className="one-third column">
                        Hello, {props.userName}
                    </div>
                ) : (
                    <div className="one-third column">Please log in!</div>
                )}
            </div>
        </div>
    );
};

export default Header;
