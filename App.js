import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=> {
    return (
        <div className="header-container">
            <div className="logo">
                <img src="data:image/png;base64,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" alt="logo" />
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

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf"
            alt="logo"
            />
            <h3>Meghana Foods</h3>
            <h4>Biryani, Paneer</h4>
            <h4>4.4 Rating</h4>
            <h4>32 mintes</h4>
        </div>
    )
}

const Body = ()=> {
    return (
        <div className="Body-container">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = ()=> {
    return (
        <div>
            <Header />
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);