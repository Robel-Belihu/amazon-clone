import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({ id, title, price, rating, image }) {
    const [{ cart }, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }
    return (
        <div className='product'>
            <img
                src={image}
                alt=''
            />
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <button onClick={addToCart} className='product__btn'>
                Add to Cart
            </button>
        </div>
    )
}

export default Product