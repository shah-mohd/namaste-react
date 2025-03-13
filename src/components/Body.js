import RestaurantCard, {withVegRestaurantCard} from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=> {

    // Hook - useState
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchRes, setSearchRes] = useState("");

    const VegRestaurantCard = withVegRestaurantCard(RestaurantCard);

    console.log(listOfRestaurant);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async ()=> {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlienStatus = useOnlineStatus();

    if(onlienStatus === false) return <h1>Looks like you are offline! Please check your internet connection.</h1>;

    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="Body-container ">
            <div className="flex m-4">
                <div className="">
                    <input 
                    className="mr-2 border"
                    type="text" 
                    value={searchRes} 
                    onChange={(e)=>(setSearchRes(e.target.value))}/>
                    <button 
                    className="bg-green-100 px-2 rounded-sm mr-4 border cursor-pointer"
                    onClick={()=>{
                        const searchRestaurants = listOfRestaurant.filter((res)=> (
                            res.info.name.toLowerCase().includes(searchRes.toLowerCase())
                        ));
                        setFilteredRestaurant(searchRestaurants);
                    }}>Search</button>
                </div>
                <button 
                className="bg-green-100 px-2 rounded-sm border cursor-pointer"
                onClick={() => {
                    filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                    setFilteredRestaurant(filteredList);
                 } }
                >Top Rated Restaurant</button>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map( (restaurant) => (
                    <Link to={/restaurants/ + restaurant.info.id} key = {restaurant.info.id}>
                        {restaurant.info.veg ? <VegRestaurantCard resData = {restaurant}/> : <RestaurantCard resData = {restaurant}/>}
                        
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;