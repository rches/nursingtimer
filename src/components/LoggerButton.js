import React from "react";

class LoggerButton extends React.Component {
    componentDidMount() {
        //put firebase connection open here
        console.log(`Logging button mounted!`);
    }

    componentWillUnmount() {
        //put firebase close connection here
        console.log(`Logging button unmounted!`);
    }

    render() {
        return <button onClick={this.props.onClick}>{this.props.text}</button>;
    }
}

export default LoggerButton;
