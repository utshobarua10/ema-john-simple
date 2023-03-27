import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    
    const [products, setProducts] = useState([]);
    useEffect(()=> { 
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
    
    } ,[])

    return (
         <div className='products'>
            {/* Products coming here */}
            <div className='products-container'>

                {
                    products.map(product =>  <Products product ={product} key={product.id}></Products>)
                }

            </div>

        {/* Order summary here */}

        <div>
            <h3>Order summary</h3>
        </div>


{/* Full divs ends here */}
        </div>
    );
};

export default Shop;