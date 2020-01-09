import React from "react";
import { base, firebase } from "../base";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewTimer from "../pages/NewTimer.js";

class SelectChildList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChildName: "Child here",
            selectedChildID: "fdsagdsagdsagdgdsa"
        };
    }
    // componentDidMount() {
    //     return (
    //         <ul>
    //             {console.log(this.props.payLoad)}{" "}
    //             {this.props.payLoad.map(payLoad => (
    //                 <li key={payLoad.id}>
    //                     <button onClick={this.props.setChildInfo}>
    //                         {payLoad.load.Name}
    //                     </button>
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    handleClick = payLoad => {
        this.setState({
            selectedChildName: payLoad.load.Name,
            selectedChildID: payLoad.id
        });
    };

    render() {
        return (
            <Router>
                <div>{this.state.selectedChildID}</div>

                <div>
                    <ul>
                        {this.props.payLoad.map(payLoad => (
                            <li key={payLoad.id}>
                                <Link
                                    to={"/newtimer/" + payLoad.id}
                                    onClick={() => this.handleClick(payLoad)}
                                >
                                    {payLoad.load.Name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <hr />

                    <Switch>
                        {this.props.payLoad.map(payLoad => (
                            <Route
                                exact
                                path={"/newtimer/" + payLoad.id}
                                key={payLoad.id}
                            >
                                <NewTimer />
                            </Route>
                        ))}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default SelectChildList;
