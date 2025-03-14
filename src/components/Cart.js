import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";


const Cart = ()=> {

    const dispatch = useDispatch();

    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);
    
    const handleClearCart = ()=> {
        dispatch(clearCart());
    }

    return(
        <div>
            <div className="text-center">
                <button 
                onClick={handleClearCart}
                className="bg-black text-white m-4 px-4 py-2 rounded-lg cursor-pointer"
                >Clear Cart</button>
            </div>
            {cartItems.length == 0 && <p className="text-center">Cart is empty! Add items to the cart.</p>}
            <ItemsList items = {cartItems}/>
        </div>
    )
}

export default Cart;