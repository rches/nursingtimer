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
        this.setState({ clickCount: +1 });
        if (!this.state.isOn) {
            this.setState({ startDate: new Date() });
        } else if (this.state.isOn) {
            this.setState({ endDate: new Date() });
        }
    };

    render() {
        return (
            <div className="wrapper">
                <Header />
                <button onClick={this.handleClick}>
                    {this.state.isOn ? "Stop the time" : "Start the time"}
                </button>
                <TextArea text={this.state.startDate.toString()} />
                <TextArea text={this.state.endDate.toString()} />
                <Footer />
            </div>
        );
    }
}

export default App;
