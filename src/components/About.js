import User from "./User";
import UserClass from "./UserClass";

const About = ()=> {
    return(
        <div>
            <h2>About us</h2>
            <h3>This is about page</h3>

            <User name={"Shah, (Function)"} location={"Rampur"} email={"shahmohammadt01@gmail.com"}/>

            <UserClass name={"Shah, (Class)"} location={"Rampur"} email={"shahmohammadt01@gmail.com"}/>
        </div>
    )
}

export default About;