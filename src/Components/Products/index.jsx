import React from "react";
import {ProductsData} from '../../Data/ProductsData'
import styles from './styles.module.scss'

const Products = () => {
    return (
        <div className={styles.productsContainer}>
            {ProductsData.map((product, i) => (
                <div key={i} className={styles.product}>
                    <img src={product.img} alt="{product.name}" />
                    <div>
                        <p>
                            {product.name}
                        </p>
                        <p>
                            ${product.price}
                        </p>
                    </div>
                    <button onClick={()=> console.log(product)}>Agregar a Carrito</button>
                </div>
            ))}
        </div>
    )
}

export default Products