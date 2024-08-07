
import data_products from "../Assets/data"
import Item from "../Item/Item"

function RelatedProducts() {
  return (
    <div className="py-20">
    <div className="flex flex-col justify-center items-center">
    <h1 className="font-bold lg:text-5xl text-2xl py-4">Related Poducts</h1>
    <hr className="lg:h-2 h-1 w-44 bg-black"/>
    </div>

    <div className="grid lg:grid-cols-4 py-10 gap-5">
        {data_products.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
    </div>
</div>
  )
}

export default RelatedProducts