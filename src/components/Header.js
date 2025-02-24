import { CDN_LOGO } from "../utils/constents";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ()=> {
    const [loginBtn, setLoginBtn] = useState("Login");
    return (
        <div className="header-container">
            <div className="logo">
                <img src={CDN_LOGO} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button 
                    className="login-btn"
                    onClick={() => {
                        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                    }}
                    >{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;