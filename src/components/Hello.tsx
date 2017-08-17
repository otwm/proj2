import * as React from "react";

interface Props {
    name: string,
};

class Hello extends React.Component<Props, Object> {
    render() {
        return (
            <div >
                <h1 >Hi! {this.props.name}</h1 >
            </div >
        );
    }
}

export default Hello;
