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
                <div className="row">
                    <div className="six columns">
                        <label>
                            Name:
                            <input
                                className="u-full-width"
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </label>
                        <div className="six columns">
                            <input
                                className="u-full-width"
                                type="submit"
                                value="Submit"
                            />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default CreateChildForm;
