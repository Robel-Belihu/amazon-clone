import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='container'>
            <Link to="/checkout">
                <div className='footer__upper'>
                    <h5>Go to cart</h5>
                </div>
            </Link>
            <footer className='footer'>
                <div className='row__1'>
                    <ul>
                        <h4>Get to Know Us</h4>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Investor Relations</li>
                        <li>Amazon Devices</li>
                        <li>Amazon Science</li>
                    </ul>
                </div>
                <div className='row__1'>
                    <ul>
                        <h4>Make Money with Us</h4>
                        <li>Sell products on Amazon</li>
                        <li>Sell on Amazon Business</li>
                        <li>Sell apps on Amazon</li>
                        <li>Become an Affiliate</li>
                        <li>Advertise Your Products</li>
                        <li>Self-Publish with Us</li>
                        <li>Host an Amazon Hub</li>
                        <li>See More Make Money with Us</li>
                    </ul>
                </div>
                <div className='row__1'>
                    <ul>
                        <h4>Amazon Payment Products</h4>
                        <li>Amazon Business Card</li>
                        <li>Shop with Points</li>
                        <li>Reload Your Balance</li>
                        <li>Amazon Currency Converter</li>
                    </ul>
                </div>
                <div className='row__1'>
                    <ul>
                        <h4>Let Us Help You</h4>
                        <li>Amazon and COVID-19</li>
                        <li>Your Account</li>
                        <li>Your Orders</li>
                        <li>Shipping Rates & Policies</li>
                        <li>Returns & Replacements</li>
                        <li>Manage Your Content and Devices</li>
                        <li>Amazon Assistant</li>
                        <li>Help</li>
                    </ul>
                </div>
                <small className='footer__copyright'>© 1996-2022, Amazon.com, Inc. or its affiliates</small>
            </footer>
        </div>
    )
}

export default Footer