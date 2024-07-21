import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {

  const [menu,setmenu]=useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <>
    <div className="my-8 w-[85%] m-auto">
    <div className="flex  justify-between items-center">
      <h1 className="font-bold text-3xl">YOUR STORE</h1>
      <ul className="flex justify-between gap-10">
        <li className="cursor-pointer" onClick={()=>{setmenu("shop")}}><Link to="/">Shop</Link>  {menu==="shop"?<hr className="bg-red-400 h-1.5 rounded-sm" />:<></>} </li>
        <li className="cursor-pointer" onClick={()=>{setmenu("men")}}><Link to="/men">Men</Link> {menu==="men"?<hr className="bg-red-400 h-1.5 rounded-sm" />:<></>} </li>
        <li className="cursor-pointer" onClick={()=>{setmenu("women")}}><Link to="/women">Women</Link> {menu==="women"?<hr className="bg-red-400 h-1.5 rounded-sm" />:<></>} </li>
        <li className="cursor-pointer" onClick={()=>{setmenu("kids")}}><Link to="/kids">Kids</Link> {menu==="kids"?<hr className="bg-red-400 h-1.5 rounded-sm" />:<></>} </li>
      </ul>
      <div className="flex justify-between gap-10">
      <Link to="/login"><button className="font-semibold border-2 rounded-full px-10 py-2 active:bg-slate-400">Login</button></Link>
      <div  className="relative">
      <Link to="/cart"><img src="/src/Components/Assets/Navbar/Cart1 with buy.png" alt="cart" /></Link>
      <span className="absolute -top-3 -right-2 bg-red-600 rounded-full h-6 px-1.5  text-white">{getTotalCartItems()}</span>
      </div>
      </div>
    </div>
    </div>
    <hr />
    </>
  )
}

export default Navbar;