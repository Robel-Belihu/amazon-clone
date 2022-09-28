import React from 'react';
import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from "react-router-dom"
import { useState } from 'react';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ cart }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to="/">
                <img className='header__logo' src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png" alt="amazon__logo" />
            </Link>
            <div className='header__search'>
                <input className='header__searchInput' />
                <SearchOutlinedIcon
                    className="header__searchIcon"
                />
            </div>
            <div className='header__nav'>
                <div className='nav__option'>
                    <span className='upper__line'>Hello, Guest</span>
                    <span className='lower__line'> Sign in</span>
                </div>
                <div className='nav__option'>
                    <span className='upper__line'>Returns</span>
                    <span className='lower__line'> & Orders</span>
                </div>
                <div className='nav__option'>
                    <span className='upper__line'>Your</span>
                    <span className='lower__line'>Prime</span>
                </div>
                <Link to="/checkout">
                    <div className='nav__option'>
                        <ShoppingCartCheckoutIcon
                            className='nav__shopCart'
                        />
                        <span className='lower__line header__cartCounter'>{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header