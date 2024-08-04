import { useContext } from "react"
import { ShopContext } from "../../Context/ShopContext"
import Item from "../Item/Item"

const ShopCategory = (props) => {
  const {products} = useContext(ShopContext)
  return (
    <div className="lg:w-[85%] m-auto overflow-hidden">
          <div className="bg-gradient-to-r from-[#f7d5f9] to-[#e1ffea22] flex justify-between items-center">
    <div className="px-20">
        <p className="lg:text-6xl text-2xl font-bold text-[#ba3331]">Sale 50% OFF !</p>
            <button className="bg-[#ba3331] rounded-full mt-5 text-white py-2 lg:px-20 px-3"> Explore Now</button>
    </div>
    <div>
        <img src={props.banner} alt="" className="lg:h-42"/>
    </div>
</div>
    <div className="flex justify-between pt-5">
    <p>Showing 1-12 out of 36 Products</p>
    <p className="border-2 rounded-full px-5 py-2">Sort By </p>
    </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 py-5 gap-5">
        {products.map((item,i) =>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else {
            return null;
          }
        })
        }
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#5c5c5c] py-3 px-5 text-white border-2 rounded-full">
          Load More
        </button>
      </div>
    </div>
  )
}
 
export default ShopCategory