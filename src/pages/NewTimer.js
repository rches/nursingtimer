import React from "react";
import Header from "../components/layout/header.js";
import Footer from "../components/layout/footer.js";
import TextArea from "../components/textarea";
import TimerButton from "../components/TimerButton";
import LoggerButton from "../components/LoggerButton";
import { base, firebase } from "../base";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

// import { directive } from '@babel/types';

class NewTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: "",
            endDate: "",
            isOn: false,
            clickCount: 0,
            childID: "",
            childName: "",
            isVisible: true
        };
    }

    handleTimerClick = e => {
        e.preventDefault();
        this.setState({ isOn: !this.state.isOn });
        this.setState({ clickCount: this.state.clickCount + 1 });
        if (!this.state.isOn) {
            this.setState({ startDate: new Date() });
        } else if (this.state.isOn) {
            this.setState({ endDate: new Date() });
        }
    };

    handleResetClick = e => {
        e.preventDefault();
        if (this.state.clickCount >= 2) {
            alert("Would you like to reset the timer?");
        }
        this.setState({
            startDate: "",
            endDate: "",
            isOn: false,
            clickCount: 0
        });
    };

    handleLoggerClick = (e, props) => {
        e.preventDefault();
        base.collection("Nursing")
            .doc(this.props.childID)
            .update({
                feeding: firebase.firestore.FieldValue.arrayUnion({
                    Name: this.state.childName,
                    interaction_type: "Nursing",
                    startDate: this.state.startDate,
                    endDate: this.state.endDate,
                    duration: this.state.startDate - this.state.endDate
                })
            });
    };

    componentDidMount() {
        this.setState({
            childID: this.props.childID,
            childName: this.props.childName
        });
    }

    render() {
        const yesChild = (
            <div>
                {this.state.clickCount < 2 && (
                    <TimerButton
                        onClick={this.handleTimerClick}
                        text={this.state.isOn ? "End Timer" : "Start Timer"}
                    />
                )}
                {this.state.clickCount >= 2 && (
                    <>
                        <LoggerButton
                            onClick={this.handleLoggerClick}
                            text="Log the info!!!!"
                        />
                        <TimerButton
                            onClick={this.handleResetClick}
                            text="Start Over"
                        />
                    </>
                )}
                <br />
                <div>
                    <div>New nursing timer for {this.state.childName}</div>
                </div>

                <TextArea
                    text={this.state.startDate.toString()}
                    timeType="Start Time:"
                />
                <TextArea
                    text={this.state.endDate.toString()}
                    timeType="End Time:"
                />
                <br />
                <Footer />
            </div>
        );

        return (
            <div className="wrapper">
                {this.props.childID ? yesChild : <Redirect to="/mainlanding" />}
            </div>
        );
    }
}

export default NewTimer;
