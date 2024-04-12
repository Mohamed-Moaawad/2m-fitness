import React, { useState } from 'react'
import './Product.css'

import { Link } from 'react-router-dom';

import { auth, db } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import BtnAddToCart from './BtnAddToCart';
import BtnAddToFavorite from './BtnAddToFavorite';


const Product = ({item, styleList, styleTwo}) => {
    const [user, loading, error] = useAuthState(auth)
    

    

    return (
        <div className='product-component'>
            <div className={`card-product ${styleList} ${styleTwo}`}>
                <div className="img">
                    <img className='img-1' src={item.data().image} alt="product" />
                    {item.data().anotherImage && (
                        <img className='img-2' src={item.data().anotherImage} alt="product" />
                    )}
                    {item.data().discount && (
                        <div className="disc">
                            <span>off</span>
                            <span>{item.data().percent.toFixed()}%</span>
                        </div>
                    )}
                    
                    {user && (
                        <BtnAddToFavorite user={user} item={item} />
                    )}
                    
                    {user ? (
                        <BtnAddToCart user={user} item={item}/>
                    ) : (
                        <button><Link to='/sign-in'>Add to cart</Link></button>
                    )}

                </div>
                <Link to={`/details/${item.id}`} className="text">
                    <h5>{item.data().title}</h5>
                    <h4>${item.data().discount ? item.data().discount : item.data().price} {item.data().discount && <sub>${item.data().price} </sub>}
                    </h4>
                    
                </Link>
            </div>
        </div>
    )
}

export default Product
