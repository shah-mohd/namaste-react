import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = ()=> {

    // Hook - useState
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);


    return (
        <div className="Body-container">
            <div className="filter">
                <button 
                className="filter-btn"
                onClick={() => {
                    filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                    setListOfRestaurant(filteredList);
                 } }
                >Top Rated Restaurant</button>
                <button
                className="all-res-btn"
                onClick={() => {
                    setListOfRestaurant(resList);
                }}
                >See All Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestaurant.map( (restaurant) => (
                    <RestaurantCard resData = {restaurant} key = {restaurant.info.id}/>
                ))}
            </div>
        </div>
    )
}

export default Body;