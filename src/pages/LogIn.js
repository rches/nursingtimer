import React from "react";
import Header from "../components/layout/header.js";
import Footer from "../components/layout/footer.js";
import { base } from "../base";

class LogIn extends React.Component {
    render() {
        return (
            <div>
                <h1>Log In here!</h1>
                <button onClick={this.props.signInUser}>Google Sign In</button>
            </div>
        );
    }
}

export default LogIn;
