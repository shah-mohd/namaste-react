import RestaurantCard, {withVegRestaurantCard} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {ShimmerBody} from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Footer from "./Footer";

const Body = ()=> {

    // Hook - useState
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchRes, setSearchRes] = useState("");

    const VegRestaurantCard = withVegRestaurantCard(RestaurantCard);

    const {loggedInUser, setUserName} = useContext(UserContext);

    // console.log(listOfRestaurant);

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

    return listOfRestaurant.length === 0 ? <ShimmerBody/> : (
        <div className="Body-container ">
            <div className="justify-center py-4 bg-[#ff5200] hidden sm:flex">
                <div className="">
                    <input 
                    className="mr-2 border-2 border-[#02060c26] bg-white w-80 h-10 rounded-lg text-base font-medium"
                    type="text" 
                    value={searchRes} 
                    onChange={(e)=>(setSearchRes(e.target.value))}
                    placeholder="Search for restaurant, item or more"/>
                    <button 
                    className="px-6 py-1 h-10 font-bold bg-black text-white mr-4 rounded-sm cursor-pointer"
                    onClick={()=>{
                        const searchRestaurants = listOfRestaurant.filter((res)=> (
                            res.info.name.toLowerCase().includes(searchRes.toLowerCase())
                        ));
                        setFilteredRestaurant(searchRestaurants);
                    }}>Search</button>

                </div>
                <button 
                className="px-6 py-1 h-10 font-bold bg-black text-white mr-4 rounded-sm cursor-pointer"
                onClick={() => {
                    filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                    setFilteredRestaurant(filteredList);
                 } }
                >Top Rated Restaurant</button>

                <div className="mx-8">
                    <label className="mr-2 font-bold text-lg text-white cursor-pointer">Username:</label>
                    <input 
                    className="mr-2 border-2 border-[#02060c26] bg-white w-80 h-10 rounded-lg text-base font-medium"
                    type="text"
                    value={loggedInUser}
                    onChange={ (e)=> setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-self-start bg-[#ff5404d4]">
                {filteredRestaurant.map( (restaurant) => (
                    <Link to={/restaurants/ + restaurant.info.id} key = {restaurant.info.id}>
                        {restaurant.info.veg ? <VegRestaurantCard resData = {restaurant}/> : <RestaurantCard resData = {restaurant}/>}
                        
                    </Link>
                ))}
            </div>
            <Footer/>
        </div> 
    )
}

export default Body;