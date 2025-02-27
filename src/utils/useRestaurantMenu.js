import { useState, useEffect } from "react";
import { CDN_RES_INFO } from "./constents";

const useRestaurantMenu = (resId)=> {

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=> {
        const data = await fetch(CDN_RES_INFO + resId);
        const json = await data.json();
        setResInfo(json);
    }

    return resInfo;
}

export default useRestaurantMenu;