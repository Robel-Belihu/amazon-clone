import React from 'react';
import "./Home.css";
import Product from './Product';
import Footer from './Footer';

function Home() {
    return (
        <div className='container'>
            <div className='home'>
                <div className='home__container'>
                    <img className='banner__img'
                        src='https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/89aa0cfb-43bf-4651-afd5-9ce43a831060._UR3000,600_.jpeg'
                        alt=''
                    />
                    <div className='home__row'>
                        <Product
                            title="De'Longhi KG200 Electric Coffee Grinder, Stainless Steel Blade, 90g Coffee Bean Capacity, Black"
                            price={34.99}
                            rating={5}
                            image="https://3dbo2q210xna3qs2hvkeqtr1-wpengine.netdna-ssl.com/wp-content/uploads/2021/07/best-practices-image1-1.jpg"
                        />
                        <Product
                            title="Comfort each step with the help from YEEZY."
                            price={219.99}
                            rating={5}
                            image="https://petapixel.com/assets/uploads/2017/03/product_feat.jpg"
                        />
                    </div>
                    <div className='home__row'>
                        <Product
                            title="World's Largest Cosmetic Brand. Buy three of Your Favorite Products for price of two. Order Now!"
                            price={89.99}
                            rating={5}
                            image="https://img.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40282.jpg?w=2000"
                        />
                        <Product
                            title="SteelSeries - Arctis Nova Pro Wired Gaming Headset for PC, PS5, and PS4 - Black"
                            price={199.99}
                            rating={5}
                            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
                        />
                        <Product
                            title="Simple to use, the Fitbit Inspire 2 is a sports wristband. "
                            price={24.99}
                            rating={5}
                            image="https://media.ldlc.com/r1600/ld/products/00/05/71/20/LD0005712071_1.jpg"
                        />
                    </div>
                    <div className='home__row'>
                        <Product
                            title="NEEWER 2 Pieces Bi-color 660 LED Video Light and Stand Kit  "
                            price={209.99}
                            rating={5}
                            image="https://www.bigcommerce.com/blog/wp-content/uploads/2016/06/ecommerce-product-photography.jpg"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Home