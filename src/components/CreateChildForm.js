import React from "react";
import { base } from "../base";

class CreateChildForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    handleChange = e => {
        this.setState({ value: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        base.collection("Nursing")
            .doc()
            .set({ Name: this.state.value });

        this.props.hideForm();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default CreateChildForm;
