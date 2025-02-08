import { CDN_RES_IMG } from "../utils/constents";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla:{deliveryTime}} = resData?.info;
    return (
        <div className="res-card">
            <img 
            className="res-card-logo"
            src={CDN_RES_IMG+cloudinaryImageId}
            alt="logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;