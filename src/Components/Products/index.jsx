import React from "react";
import {ProductsData} from '../../Data/ProductsData'
import './styles.module.scss'

const Products = () => {
    return (
        <div>
            {ProductsData.map((product, i) => (
                <div key={i}>
                    <img src={product.img} alt="{product.name}" />
                    <div>
                        <p>
                            {product.name} - ${product.price}
                        </p>
                    </div>
                    <button onClick={()=> console.log(product)}>Agregar a Carrito</button>
                </div>
            ))}
        </div>
    )
}

export default Products