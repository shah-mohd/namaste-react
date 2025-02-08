import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = ()=> {
    return (
        <div className="Body-container">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map( (restaurant) => (
                    <RestaurantCard resData = {restaurant} key = {restaurant.info.id}/>
                ))}
            </div>
        </div>
    )
}

export default Body;