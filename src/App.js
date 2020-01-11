import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import NewTimer from "./pages/NewTimer.js";
import LogIn from "./pages/LogIn";
import MainLanding from "./pages/MainLanding.js";
import Reports from "./pages/Reports.js";
import Welcome from "./pages/Welcome.js";
import { firebase } from "./base.js";
import Header from "./components/layout/header";
import LogOut from "./pages/LogOut";

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

    render() {
        return (
            <Router>
                <Header
                    userName={this.state.userName}
                    isLoggedIn={this.state.loggedIn}
                />

                <div>
                    <ul>
                        {this.state.loggedIn ? (
                            <li>
                                <Link to="/logout">Log Out</Link>
                            </li>
                        ) : (
                            <li>
                                <Link to="/">Log In</Link>
                            </li>
                        )}

                        <li>
                            <Link to="/mainlanding">Home</Link>
                        </li>

                        <li>
                            <Link to="/reports">Reports</Link>
                        </li>
                    </ul>

                    <hr />

                    <Switch>
                        <Route exact path="/">
                            {this.state.loggedIn ? (
                                <Redirect to="/mainlanding" />
                            ) : (
                                <LogIn signInUser={this.signInUser} />
                            )}
                        </Route>

                        <Route path="/logout">
                            <LogOut />
                        </Route>

                        <Route path="/mainlanding">
                            <MainLanding />
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
