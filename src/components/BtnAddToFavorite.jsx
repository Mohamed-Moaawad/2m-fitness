import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
// React Icons
import { GoHeart } from "react-icons/go";
import { db } from '../firebase/config';
import { RotatingLines } from 'react-loader-spinner';


const BtnAddToFavorite = ({user, item}) => {

    const [loaderIcon, setLoaderIcon] = useState(false)


    
    const addToFavorite = async(item)=>{

        setLoaderIcon(true)

        await setDoc(doc(db, `favorite - ${user.uid}`, `${item.data().id}`),{
            id: item.data().id,
            title: item.data().title,
            price: item.data().price,
            discount: item.data().discount,
            percent: item.data().percent,
            description: item.data().description,
            image: item.data().image, 
            anotherImage: item.data().anotherImage,
            inFavorite: true,
        })

        setLoaderIcon(false)

    }


    return (
        <>
            <div className="icon-favorite" 
            onClick={()=>[
                addToFavorite(item)
            ]}>
                {loaderIcon ? (
                    <RotatingLines
                        visible={true}
                        height="10"
                        width="10"
                        strokeColor="var(--black-color)"
                        strokeWidth="4"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                ) : (
                    <GoHeart />
                )}
                <span>wishlist</span>
            </div>
        </>
    )
}

export default BtnAddToFavorite
