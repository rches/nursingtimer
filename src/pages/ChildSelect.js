import React from "react";
import CreateChildForm from "../components/CreateChildForm";
import SelectChildList from "../components/SelectChildList";
import { base } from "../base";

class ChildSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childArray: []
        };
    }

    componentDidMount() {
        base.collection("Children").onSnapshot(query => {
            query.keys(doc => {
                this.setState(prevState => ({
                    childArray: [...prevState.childArray, doc.id]
                }));
                console.log(doc.id);
            });
        });
        // .doc("ChildrenList")

        // .get()
        // .then(doc => {
        //     // Object.keys(doc._snapshot).forEach(names => console.log(names));
        //     const names = doc.data();
        //     console.log(names.ChildrenName);
        //     this.setState({ childArray: names.ChildrenName });
        // });
    }

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
                    <SelectChildList childArray={this.state.childArray} />
                </div>
            </>
        );
    }
}

export default ChildSelect;
