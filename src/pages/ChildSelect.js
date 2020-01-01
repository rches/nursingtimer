import React from "react";
import CreateChildForm from "../components/CreateChildForm";
import SelectChildList from "../components/SelectChildList";
import { base } from "../base";

class ChildSelect extends React.Component {
    childArray = () => {};
    render() {
        return (
            <>
                <h1>Select that Baby!</h1>;
                <div>
                    <h1>Add Child</h1>
                    <CreateChildForm />
                </div>
                <div>
                    <h1>Select Child</h1>
                    <SelectChildList childArray={this.childArray} />
                </div>
            </>
        );
    }
}

export default ChildSelect;
