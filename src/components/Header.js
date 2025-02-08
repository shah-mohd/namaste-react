import { CDN_LOGO } from "../utils/constents";

const Header = ()=> {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;