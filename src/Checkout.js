import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ cart, user }, dispatch] = useStateValue();
    let basket;
    return (
        <div className='checkout'>
            <div className="checkout__left">

                <div>
                    <h3>Hello, { }</h3>
                    <h2 className="checkout__title">Shopping Cart</h2>

                    {cart.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                </div>
            </div>
            <div className='checkout__rightSide'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout