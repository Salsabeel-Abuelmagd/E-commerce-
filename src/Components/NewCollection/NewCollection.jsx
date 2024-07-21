import new_collection from "../Assets/Newcollection.js"
import Item from "../Item/Item"

function NewCollection() {
  return (
    <div className="py-20">
        <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-5xl py-4">New Collection</h1>
        <hr className="h-2 w-44 bg-black"/>
        </div>

        <div className="grid grid-cols-4 py-10 gap-5">
            {new_collection.map((item,i)=>{
                 
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollection