import React from "react";

import Profileclss from "./ProfileClass";


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            const:2,
        };
    }
    render() {
        return (
            <div>
                <h1>About The  Website</h1>
                <h5>this is the react live course</h5>
                <Profileclss Name={"First Child"} />
            </div>
        );
    }

}



export default About;