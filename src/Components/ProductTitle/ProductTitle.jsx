import React from 'react'

function ProductTitle(props) {
    const {product} = props;
  return (
    <div className='my-5 font-semibold'>
        <h4>HOME > SHOP > {product.category} > {product.name}</h4>
       
    </div>
  )
}

export default ProductTitle