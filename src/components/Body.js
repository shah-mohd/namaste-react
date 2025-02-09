import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = ()=> {

    // Hook - useState
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async ()=> {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listOfRestaurant.length === 0) return <Shimmer/>
    

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