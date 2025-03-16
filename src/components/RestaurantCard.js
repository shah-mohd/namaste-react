import { CDN_RES_IMG } from "../utils/constents";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla:{deliveryTime}} = resData?.info;
    return (
        <div 
        className="w-50 h-100 m-4 p-4 rounded-2xl bg-white overflow-hidden shadow-lg shadow-black"
        >
            <img 
            className="rounded-lg"
            src={CDN_RES_IMG+cloudinaryImageId}
            alt="logo"
            />
            <h3 className="font-bold text-lg my-2">{name}</h3>
            <h4 className="">{cuisines.join(", ")}</h4>
            <h4>{avgRating} star</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export const withVegRestaurantCard = (RestaurantCard)=> {
    return (props)=> {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 px-2 rounded-sm">Veg</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;