import { CDN_LOGO } from "../utils/constents";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header = ()=> {
    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="flex justify-between m-4 h-38 bg-pink-100 border">
            <div className="logo">
                <img 
                className="h-full"
                src={CDN_LOGO} alt="logo" />
            </div>
            <div className="nav-items">
                <ul className="flex items-center h-38 font-bold text-xl">
                    <li className="px-4">
                        Online Status:{onlineStatus?"🟢":"🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button 
                    className="px-6 py-1 bg-black text-white border mr-4 rounded-sm cursor-pointer"
                    onClick={() => {
                        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                    }}
                    >{loginBtn}</button>
                    <li className="pr-4 font-medium text-lg">
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;