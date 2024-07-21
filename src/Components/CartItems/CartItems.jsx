import { ShopContext } from "../../Context/ShopContext"
import { useContext } from "react"


function CartItems() {
    const {products,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className="w-[85%] m-auto">
        <div className="grid grid-cols-6 my-3">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {products.map((e)=>{
            if(cartItems[e.id]>0){
                return <div key={e.id}>
                    <div className="grid grid-cols-6 items-center py-10 gap-4">
                        <img src={e.image} alt="" className="w-24"/>
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className="border-2 w-12 py-3">{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id]}</p>
                        <span onClick={()=>removeFromCart(e.id)} className="cursor-pointer">X</span>
                    </div>
                    <hr />
                    </div>
            }
            return null;
        })}
        <div className="grid grid-cols-2 gap-20 py-16">
            <div className="w-full">
                <h3 className="font-semibold text-2xl py-5">Cart Totals</h3>
                <div className="my-5">
                    <div className="flex justify-between py-2">
                        <p>Subtatal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between py-2">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold py-2">
                        <p>Total</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                </div>
                <button className=" font-medium py-3 w-[40%] bg-red-600 text-white">TO CHECKOUT</button>
            </div>
            <div>
                <p className="text-[#4a4a4a]">If You Have Promo Code Write It here</p>
                <div className= "flex gap-10 justify-around bg-slate-200 w-3/4 py-4">
                <input type="text" placeholder="promo code" className="outline-none bg-transparent"/>
                <button className="font-medium bg-black px-4 py-2 text-white">Submit</button>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default CartItems