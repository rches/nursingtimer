import React from "react";
import CreateChildForm from "../components/CreateChildForm";
import SelectChildList from "../components/SelectChildList";
import { base } from "../base";

class MainLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payLoad: [],
            formVisible: false,
            selectedChildName: "",
            selectedChildID: "",
            userName: "",
            listVisible: false
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
        try {
            this.setState({ userName: this.props.userName });
        } catch (e) {
            console.error(e);
        }
    }

    componentDidUpdate() {
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

    toggleList = e => {
        e.preventDefault();
        this.setState({ listVisible: !this.state.listVisible });
    };

    hideForm = () => {
        this.setState({ formVisible: false });
    };

    handleClick = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 };
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.listVisible ? (
                        <></>
                    ) : (
                        <button
                            className="u-full-width"
                            onClick={this.toggleForm}
                        >
                            Add Child!
                        </button>
                    )}
                </div>
                {this.state.formVisible && (
                    <CreateChildForm
                        hideForm={this.hideForm}
                        handleClick={this.handleClick}
                    />
                )}
                <div className="row">
                    <button className="u-full-width" onClick={this.toggleList}>
                        {this.state.listVisible ? "Go Back" : "Select Child!"}
                    </button>
                </div>
                {this.state.listVisible && (
                    <SelectChildList
                        payLoad={this.state.payLoad}
                        userName={this.props.userName}
                    />
                )}
            </div>
        );
    }
}

export default MainLanding;
