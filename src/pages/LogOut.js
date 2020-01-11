import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { firebase } from "../base.js";

class LogOut extends React.Component {
    redirect = () =>
        firebase
            .auth()
            .signOut()
            .then()
            .catch(function(error) {
                // An error happened.
            });
    render() {
        return (
            <>
                <div>{this.redirect()}</div>
                <Redirect to="/" />;
            </>
        );
    }
}

export default LogOut;
