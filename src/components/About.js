import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{

    constructor(props){
        super(props);

        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent componentDidMount");
    }

    render(){
        console.log("Parent render")
        return (
            <div>
            <h2>About us</h2>
            <UserClass name={"Shah, (Class)"} location={"Rampur"} email={"shahmohammadt01@gmail.com"}/>
        </div>
        )
    }

}

export default About;