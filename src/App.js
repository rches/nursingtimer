import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewTimer from "./pages/NewTimer.js";
import LogIn from "./pages/LogIn";
import ChildSelect from "./pages/ChildSelect.js";
import Reports from "./pages/Reports.js";
import Welcome from "./pages/Welcome.js";
import { auth, base, firebase } from "./base.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: "",
            endDate: "",
            isOn: false,
            clickCount: 0,
            user: {},
            loggedIn: false
        };
    }

    // Timer Data Object needs:
    //child name
    //age
    //time stamp logged
    //start time
    //end time
    //feeeding type
    //notes
    //logged by: user name

    signInUser = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                // The signed-in user info.
                const user = result.user;
                this.setState({ user: user });
                console.log(user);
                // ...
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    };

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Log In</Link>
                        </li>
                        <li>
                            <Link to="/welcome">Welcome</Link>
                        </li>
                        <li>
                            <Link to="/childselect">Child Select</Link>
                        </li>
                        <li>
                            <Link to="/newtimer">New Timer</Link>
                        </li>
                        <li>
                            <Link to="/reports">Reports</Link>
                        </li>
                    </ul>

                    <hr />

                    <div>{this.state.user.displayName}</div>

                    <Switch>
                        <Route exact path="/">
                            <LogIn
                                signInUser={this.signInUser}
                                user={this.state.user}
                            />
                        </Route>
                        <Route path="/welcome">
                            <Welcome />
                        </Route>
                        <Route path="/childselect">
                            <ChildSelect />
                        </Route>
                        <Route path="/newtimer">
                            <NewTimer />
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
