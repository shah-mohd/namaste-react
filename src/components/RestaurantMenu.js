import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_RES_INFO } from "../utils/constents";
import { CDN_RES_IMG } from "../utils/constents";

const RestaurantMenu = ()=> {

    const {resId} = useParams();
    const [resInfo, setResInfo] = useState(null);
    
    console.log(resId);

    useEffect(()=>{
        fetchMenuData();
    },[])

    const fetchMenuData = async ()=> {
        const data = await fetch(CDN_RES_INFO+resId);
        const json = await data.json();
        setResInfo(json);
    }

    // console.log(resInfo);

    if(resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage, avgRating, totalRatingsString, cloudinaryImageId , sla:{deliveryTime}} = resInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards, title} = resInfo.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    // console.log(title);

    return(
        <div className="res-info-container">
            <div className="res">
                <div className="res-name">
                    <h1>{name}</h1>
                </div>
                <div className="res-info">
                    <h3>{avgRating} ({totalRatingsString}) - {costForTwoMessage}</h3>
                    <h3>{cuisines.join(",  ")}</h3>
                    <h3>{deliveryTime} mins</h3>   
                </div>
            </div>
            {/* <div className="res-dish-info">
                <ul>
                    {itemCards.map((item)=> (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name} :  Rs - {item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price}</li>
                    ))}
                </ul>
            </div> */}

            <div className="res-dish-info">
                
                    {itemCards.map((item)=> (
                        
                        <div key={item?.card?.info?.id} className="res-dish-div">
                            <div>
                                <h3>{item?.card?.info?.name} :  Rs - {item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price}</h3>
                                <p>{item?.card?.info?.description}</p>
                            </div>
                            <div className="res-img-div">
                                <img src={CDN_RES_IMG + item?.card?.info?.imageId} />
                            </div> 
                        </div> 

                    ))}
                
            </div>

        </div>
    )
}

export default RestaurantMenu;