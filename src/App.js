import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import TextArea from "./components/textarea";

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

    handleClick = e => {
        e.preventDefault();
        this.setState({ isOn: !this.state.isOn });
        this.setState({ clickCount: this.state.clickCount + 1 });
        if (!this.state.isOn) {
            this.setState({ startDate: new Date() });
        } else if (this.state.isOn) {
            this.setState({ endDate: new Date() });
        }

        if (this.state.clickCount === 2) {
            alert("Would you like to reset the timer?");
        }
    };

    render() {
        let timerButton;

        if (this.state.clickCount < 2) {
            timerButton = (
                <button onClick={this.handleClick}>
                    {this.state.isOn ? "Stop the time" : "Start the time"}
                </button>
            );
        } else {
            timerButton = (
                <button onClick={this.handleClick}>Reset the Timer!</button>
            );
        }
        return (
            <div className="wrapper">
                <Header />
                {timerButton}
                <br />

                <TextArea text={this.state.startDate.toString()} />
                <TextArea text={this.state.endDate.toString()} />
                <TextArea text={this.state.clickCount} />
                <br />
                <button>Log this info!</button>
                <Footer />
            </div>
        );
    }
}

export default App;
