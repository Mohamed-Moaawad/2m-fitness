import React from 'react'
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../firebase/config';
const NavIcons = ({user}) => {
    const [value, loading, error] = useCollection(collection(db, `cart - ${user.uid}`))
    const [valueF] = useCollection(collection(db, `favorite - ${user.uid}`))
    
    return (
        <>
            <NavLink to='/favorite' className="favorite-icon">
                <GoHeart />
                <span className='number-cart'>{valueF ? valueF.docs.length : '0'}</span>
            </NavLink>
            <NavLink to='/cart' className="cart-icon ms-4">
                <BsCart3 />
                <span className='number-cart'>{value ? value.docs.length : '0'}</span>
            </NavLink>
        </>
    )
}

export default NavIcons
