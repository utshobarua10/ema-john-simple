import React, { useEffect, useState } from 'react';
import './Products.css'

const Products = (props) => {

    const {img,name,price,ratings,seller} = props.product;
    return (
        <div className='product'>
            <img src={img}  alt=""/>
            <h4>{name}</h4>
            <h4>Price: {price}</h4>
            <h5>Manufacturer: {seller}</h5>
            <h5>Rating: {ratings}</h5>
        </div>
    );
};

export default Products;