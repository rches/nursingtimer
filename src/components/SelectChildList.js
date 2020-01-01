import React from "react";
import { base } from "../base";
let childArray;

class SelectChildList extends React.Component {
    componentDidMount() {
        base.collection("Children")
            .doc("ChildrenList")

            .get()
            .then(doc => {
                // Object.keys(doc._snapshot).forEach(names => console.log(names));
                const names = doc.data();
                console.log(names.ChildrenName);
                childArray = names.ChildrenName;
            });
    }

    render() {
        // const childList = childArray.map(child => <li>{child}</li>);

        return <>{/* <ul>{childList}</ul> */}</>;
    }
}

export default SelectChildList;
