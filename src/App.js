import React from "react";
import "./App.css";
import Header from "./components/layout/header.js";
import Footer from "./components/layout/footer.js";
import TextArea from "./components/textarea";
import TimerButton from "./components/TimerButton";
import LoggerButton from "./components/LoggerButton";
import { base } from "./base";

// import { directive } from '@babel/types';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: "",
            endDate: "",
            isOn: false,
            clickCount: 0
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

    handleLoggerClick = e => {
        e.preventDefault();
        base.collection("feeding").add({
            startDate: this.state.startDate,
            endDate: this.state.endDate
        });
    };

    render() {
        return (
            <div className="wrapper">
                <Header />
                {/* this evaluation below reads 'if clickCount is less than 2 display TimerButton' - React Documentation!
                 */}
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
    }
}

export default App;
