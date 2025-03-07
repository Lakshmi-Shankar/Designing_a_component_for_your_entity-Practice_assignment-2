// write product card here
import React from 'react';
import Button from "./button.jsx"
import productImage from "../assets/productImage.jpg"
import "../App.css"

const Productcard = () => {
    return (
        <>
            <div className='productCard'>
                <div className='productImg'>
                    <img src={productImage} alt='Product' className='image'/>
                </div>
                <div className='productName'>
                    <p>Apple Laptop Ultra</p>
                </div>
                <div className='price'>
                    <p>Rs: 500</p>
                </div>
                <div>
                    <Button />
                </div>
            </div>
        </>
    );
}

export default Productcard;
