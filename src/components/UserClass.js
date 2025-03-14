import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userData:{}
        }

        // console.log("Child constructor");
    }

    async componentDidMount(){
        // console.log("Child componentDidMount");
        const data = await fetch("https://api.github.com/users/shah-mohd");
        const json = await data.json();
        this.setState({
            userData : json,
        })
    }

    render(){  
        // console.log("Child render");
        const {avatar_url, name, location, email} = this.state.userData;
        return(
            <>
            <div>
                <UserContext.Consumer>
                    {({loggedInUser})=> <h1 className="font-medium">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>

            <div className="flex w-6/12 mx-auto">
                <div className="w-3/12">
                    <img 
                    className="rounded-lg"
                    src={avatar_url} />
                </div>
                <div className="w-9/12 ml-10 font-bold text-gray-600">
                    <h2 className="">Name: {name}</h2>
                    <h3>Location: {location}</h3>
                    <h4>Email: shahmohammadt01@gmail.com</h4>
                </div>
            </div>
        </>
        )
    }
}

export default UserClass;