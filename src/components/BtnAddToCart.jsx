import React, { useState } from 'react'
import { RotatingLines } from 'react-loader-spinner';
import { collection, doc, setDoc, updateDoc } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/config';


const BtnAddToCart = ({item, user}) => {

    const [value, loading, error] = useCollection(collection(db, `cart - ${user.uid}`))
    

    const [loaderIcon, setLoaderIcon] = useState(false)

    const addProductToCart = async(item)=>{
        // await updateDoc(doc(db, 'Products', `${item.id}`),{
        //     inCart: true
        // })


        setLoaderIcon(true)

        const cartID = new Date().getTime()        
        await setDoc(doc(db, `cart - ${user.uid}`, `${item.data().id}`),{
            id: item.data().id,
            title: item.data().title,
            price: item.data().price,
            discount: item.data().discount,
            percent: item.data().percent,
            description: item.data().description,
            image: item.data().image,
            anotherImage: item.data().anotherImage,
            inCart: true,
            quantity: 1,
        })

        setLoaderIcon(false)
        // 
    }   



    return (
        <>
            <button //disabled={item.data().inCart ? true : false}
                onClick={()=>{
                addProductToCart(item)
            }}>{loaderIcon ? (
                <RotatingLines
                    visible={true}
                    height="20"
                    width="20"
                    strokeColor="var(--black-color)"
                    strokeWidth="4"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            ): 'add to cart'}</button>
        </>
    )
}

export default BtnAddToCart
