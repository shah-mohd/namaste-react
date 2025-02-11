import { CDN_LOGO } from "../utils/constents";
import { useState } from "react";

const Header = ()=> {
    const [loginBtn, setLoginBtn] = useState("Login");
    return (
        <div className="header-container">
            <div className="logo">
                <img src={CDN_LOGO} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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