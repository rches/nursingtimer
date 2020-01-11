import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import firebase from "../base.js";

class LogOut extends React.Component {
    render() {
        firebase
            .auth()
            .signOut()
            .catch(function(error) {
                // An error happened.
            });

        return (
            <div>
                <Redirect to="/" />
            </div>
        );
    }
}

export default LogOut;
