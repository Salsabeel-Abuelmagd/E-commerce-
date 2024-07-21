import { Link } from "react-router-dom"

const Item = (props) => {
  return (
    <div className="hover:scale-110 cursor-pointer" >
   
   <Link to={`/product/${props.id}`}>  <img src={props.image} alt="" onClick={scrollTo(0,0)}/> </Link>
    <p>{props.name}</p>
    <div className="flex gap-3">
    <span className="font-bold">${props.new_price}</span>
    <span className="line-through text-[#6c6b6b]">{props.old_price}</span>
    </div>
    </div>
  )
}

export default Item


