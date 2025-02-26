import React from "react";

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
            <div className="user-card">
                <div className="user-img">
                    <img src={avatar_url} />
                </div>
                <div className="user-info">
                    <h2>Name: {name}</h2>
                    <h3>Location: {location}</h3>
                    <h4>Email: shahmohammadt01@gmail.com</h4>
                </div>
        </div>
        )
    }
}

export default UserClass;