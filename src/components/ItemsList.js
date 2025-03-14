import { CDN_RES_IMG } from "../utils/constents";

const ItemsList = ({items})=> {
    return (
        <div>
            {items.map((item)=> (
                <div 
                key={item.card.info.id}
                className="w-6/12 mx-auto my-4 p-4 flex justify-between border-b bg-gray-100 rounded-lg">
                    <div className="w-9/12">
                        <p className="font-bold text-xl">{item.card.info.name}</p>
                        <p className="font-bold text-base">{item.card.info.price/100 || item.card.info.defaultPrice/100}</p>
                        <p className="text-gray-500">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12 m-4 relative">
                        <img 
                        className="rounded-lg"
                        src={CDN_RES_IMG + item.card.info.imageId} />
                        <button className="absolute left-12 bottom-0 border border-gray-400 bg-white px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-50">ADD</button>
                    </div>
                    
                </div>
            ))}

        </div>
    )
}

export default ItemsList;