import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewTimer from "./pages/NewTimer.js";
import LogIn from "./pages/LogIn";
import MainLanding from "./pages/MainLanding.js";
import Reports from "./pages/Reports.js";
import Welcome from "./pages/Welcome.js";
import { firebase } from "./base.js";
import Header from "./components/layout/header";
import "./App.css";
import useSpring from "react-spring";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            loggedIn: false
        };
    }

    signInUser = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                console.log("Log In Successful");
            })
            .catch(function(error) {
                console.log(error.message);
            });
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            let displayName;
            if (user) {
                // User is signed in.
                displayName = user.displayName;
                this.setState({ loggedIn: true, userName: displayName });
                // ...
            } else {
                displayName = "";
                this.setState({ loggedIn: false, userName: displayName });
            }
        });
    }

    toggleNav = e => {
        e.preventDefault();
        this.setState({ navVis: !this.state.navVis });
    };

    render() {
        return (
            <Router>
                <Header
                    userName={this.state.userName}
                    isLoggedIn={this.state.loggedIn}
                />
                <button onClick={this.toggleNav}>Toggle Nav</button>
                <div>
                    {this.state.navVis ? (
                        <div></div>
                    ) : (
                        <div className="nav">
                            <ul>
                                <li>
                                    <Link to="/">Log In</Link>
                                </li>

                                <li>
                                    <Link to="/mainlanding">Home</Link>
                                </li>

                                <li>
                                    <Link to="/reports">Reports</Link>
                                </li>
                            </ul>
                        </div>
                    )}

                    <Switch>
                        <Route exact path="/">
                            <LogIn signInUser={this.signInUser} />
                        </Route>

                        <Route path="/mainlanding">
                            <MainLanding userName={this.state.userName} />
                        </Route>

                        <Route path="/reports">
                            <Reports />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
