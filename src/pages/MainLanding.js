import React from "react";
import CreateChildForm from "../components/CreateChildForm";
import SelectChildList from "../components/SelectChildList";
import ChildList from "./ChildList";
import { base, firebase } from "../base";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class MainLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payLoad: [],
            formVisible: false,
            selectedChildName: "",
            selectedChildID: ""
        };
    }

    componentDidMount() {
        try {
            let childArr = [];

            base.collection("Nursing")
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        let load = doc.data();
                        let id = doc.id;
                        // console.log(load, id);
                        childArr.push({ id: id, load });
                    });
                    this.setState({
                        payLoad: [...childArr]
                    });
                });
        } catch (e) {
            console.error(e);
        }
    }

    toggleForm = e => {
        e.preventDefault();
        this.setState({ formVisible: !this.state.formVisible });
    };

    hideForm = () => {
        this.setState({ formVisible: false });
    };

    render() {
        return (
            <div>
                <button onClick={this.toggleForm}>Toggle Form</button>
                {this.state.formVisible && (
                    <CreateChildForm hideForm={this.hideForm} />
                )}
                <SelectChildList payLoad={this.state.payLoad} />
            </div>
        );
    }
}

export default MainLanding;
