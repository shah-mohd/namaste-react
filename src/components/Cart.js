import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";
import useItemPriceSum from "../utils/useItemPriceSum";


const Cart = ()=> {

    const dispatch = useDispatch();

    const cartItems = useSelector((store)=> store.cart.items);
    // console.log(cartItems);

    const itemPriceSum = useItemPriceSum(cartItems);
    // console.log(itemPriceSum)

    const handleClearCart = ()=> {
        dispatch(clearCart());
    }

    return(
        <div className="">
            <div className="text-center">
                <button 
                onClick={handleClearCart}
                className="bg-black text-white m-4 px-4 py-2 rounded-lg cursor-pointer"
                >Clear Cart</button>
                {cartItems.length == 0 && <p className="text-center">Cart is empty! Add items to the cart.</p>}
            </div>

            <div className="flex">
            <div className="w-8/12">
                <ItemsList items = {cartItems}/>
            </div>
            <div className="w-4/12">
                <h3 className="font-bold text-xl text-center pt-5">Total Amount: {itemPriceSum}</h3>
            </div>
            </div>
            
            
        </div>       
    )
}

export default Cart;