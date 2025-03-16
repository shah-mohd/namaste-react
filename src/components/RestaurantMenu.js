import { useParams } from "react-router-dom";
import {ShimmerMenu} from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = ()=> {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if(resInfo === null) return <ShimmerMenu />

    const {name, cuisines, costForTwoMessage, avgRating, totalRatingsString, cloudinaryImageId , sla:{deliveryTime}} = resInfo?.data?.cards[2]?.card?.card?.info;

    const categories = resInfo.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=> category?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return(
        <div className="">

            {/* restaurant info */}
            <div className="w-6/12 m-auto  p-4 rounded-b-lg bg-linear-to-t from-gray-200 to-white  shadow-lg shadow-black">
                <div className="font-bold text-3xl my-8">
                    <h1>{name}</h1>
                </div>
                <div className="font-bold bg-white border border-gray-300 rounded-lg p-4">
                    <h3 className="text-xl my-2">{avgRating} ({totalRatingsString}) - {costForTwoMessage}</h3>
                    <h3>{cuisines.join(",  ")}</h3>
                    <h3>{deliveryTime} mins</h3>   
                </div>
            </div>

            <div className="">
                {categories.map((category, index) => (
                    <RestaurantCategory 
                    key={category.card.card.title} 
                    data = {category.card.card}
                    showItems = {index === showIndex}
                    setShowIndex = {()=> setShowIndex(index === showIndex ? null : index)}
                    />
                ))
                }
            </div>

        </div>
    )
}

export default RestaurantMenu;