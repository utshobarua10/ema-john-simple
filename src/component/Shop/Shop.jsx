import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import { FaBeer } from 'react-icons/fa';

import './Shop.css'
const Shop = () => {
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=> { 
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
    
    } ,[])

    const handleProducts =(product)=>{
        const newCart = [...cart,product]
        setCart(newCart)
    }



    return (
         <div className='products'>
            {/* Products coming here */}
            <div className='products-container'>

                {
                    products.map(product =>  <Products 
                        product ={product} 
                        key={product.id}
                        handleProducts={handleProducts}
                        
                        ></Products>)
                }

            </div>

        {/* Order summary here */}

        <div>
            <h3>Order summary</h3>
            <h2>Cart length: {cart.length}</h2>
        </div>


{/* Full divs ends here */}
        </div>
    );
};

export default Shop;