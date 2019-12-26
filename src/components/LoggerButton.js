import React from "react";

class LoggerButton extends React.Component {
    componentWillMount() {
        //put firebase connection open here
    }

    componentWillUnmount() {
        //put firebase close connection here
    }

    render() {
        return <button onClick={this.props.onClick}>{this.props.text}</button>;
    }
}

export default LoggerButton;
