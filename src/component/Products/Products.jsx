import React, { useEffect, useState } from 'react';
import './Products.css'
import { BsFillCartDashFill } from 'react-icons/bs';

const Products = (props) => {

    const {img,name,price,ratings,seller} = props.product;
    const handleProducts = props.handleProducts;
    
    return (
        <div className='product'>
            <img src={img}  alt=""/>
            <div className="product-details">
            <h4>{name}</h4>
            <h5>Price: {price}</h5>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            <button className='btn-cart' onClick={()=>handleProducts(props.product)}>Add To Cart  <BsFillCartDashFill/> </button> 
        </div>
    );
};

export default Products;