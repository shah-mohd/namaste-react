import ItemsList from "./ItemsList";

const RestaurantCategory = ({data, showItems, setShowIndex})=> {

    const handelClick = ()=> {
        setShowIndex();
    }

    return (
        <div className="">
        {/* title section */}
        <div
        onClick={handelClick}
        className="flex justify-between w-6/12 mx-auto my-4 p-2 bg-gray-200 rounded-lg cursor-pointer">
            <div>
                <span>{data.title}</span>
                <span> ({data.itemCards.length})</span>
            </div>
            <div>
                {/* <span>⬇️</span> */}
                {showItems ? <span>⬆️</span> : <span>⬇️</span>}
            </div>
        </div>

        {/* Descriptions section*/}
        <div>
            {showItems && <ItemsList items = {data.itemCards}/>}
        </div>

        </div>
    );
}

export default RestaurantCategory;