import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = ()=> {

    // Hook - useState
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchRes, setSearchRes] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async ()=> {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="Body-container">
            <div className="filter">
                <div className="search">
                    <input 
                    className="search-box"
                    type="text" 
                    value={searchRes} 
                    onChange={(e)=>(setSearchRes(e.target.value))}/>
                    <button 
                    className="search-btn"
                    onClick={()=>{
                        const searchRestaurants = listOfRestaurant.filter((res)=> (
                            res.info.name.toLowerCase().includes(searchRes.toLowerCase())
                        ));
                        setFilteredRestaurant(searchRestaurants);
                    }}>Search</button>
                </div>
                <button 
                className="filter-btn"
                onClick={() => {
                    filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                    setFilteredRestaurant(filteredList);
                 } }
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map( (restaurant) => (
                    <Link to={/restaurants/ + restaurant.info.id} key = {restaurant.info.id}><RestaurantCard resData = {restaurant}/></Link>
                ))}
            </div>
        </div>
    )
}

export default Body;