import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext"
import { useContext } from "react";
import ProductTitle from "../ProductTitle/ProductTitle"
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import RelatedProducts from "../RelatedProducts/RelatedProducts";


function Product() {
  const {products} = useContext(ShopContext);
  const {productId} =useParams();
  const product = products.find((e)=> e.id === Number(productId));

  return (
    <div className="w-[85%] m-auto">
      <ProductTitle product={product}/>
      <ProductDisplay product={product} />
      <RelatedProducts/>

    </div>
  )
}

export default Product