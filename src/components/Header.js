import { CDN_LOGO } from "../utils/constents";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=> {
    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-[#ff5200]">
            <div className="m-4 h-24">
                <img 
                className="h-full rounded-2xl"
                src={CDN_LOGO}
                alt="logo" 
                />
            </div>
            <div className="nav-items">
                <ul className="flex items-center h-38 w-full font-bold text-[#ffffff] text-base">
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
                    <li className="px-4">
                        <Link to="/cart">Cart- ({cartItems.length})</Link>
                    </li>
                    <button 
                    className="px-6 py-1 bg-black text-white mr-4 rounded-sm cursor-pointer"
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